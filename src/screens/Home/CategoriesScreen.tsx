import { StackScreenProps } from '@react-navigation/stack';
import {
  HomeStackParamList,
  HomeStackScreens,
} from 'navigation/Navigation.types';
import { getPlacesByType, ILocationData } from '../../network/GoogleMapsAPI';
import React, { useContext, useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import ActivityIndicator from 'components/ActivityIndicator';
import { Card, Paragraph, Title } from 'react-native-paper';
import { storeData, getData, removeValue } from '../../storage/storageMethods';
import { AppContext } from 'state/context';
import { types } from 'network/GoogleMapsAPI.types';

export type CategoriesScreenRoutingProps = StackScreenProps<
  HomeStackParamList,
  HomeStackScreens.CategoriesScreen
>;

interface ICategoriesScreenProps extends CategoriesScreenRoutingProps {}

const CategoriesScreen = ({ navigation, route }: ICategoriesScreenProps) => {
  const context = useContext(AppContext);

  const [allPlaces, setAllPlaces] = useState<ILocationData[] | null>(null);
  const [filteredPlaces, setFilteredPlaces] = useState<ILocationData[] | null>(
    null
  );
  const [loading, setLoading] = useState(false);
  const { categoryType } = route.params;

  const getStoredData = async () => {
    const storedData = await getData();
    if (!storedData) return null;
    return storedData;
  };

  useEffect(() => {
    setLoading(true);
    (async () => {
      // Get data from local storage
      const storedData = await getStoredData();

      // No stored API data - do a new fetch & store the data
      if (!storedData) {
        console.log('1: No stored API data - do a new fetch & store the data');
        const response = await getPlacesByType(categoryType);
        setAllPlaces(response);
        await storeData({
          [`${categoryType}`]: response,
        });
        setLoading(false);
        return;
      }

      // Stored API data - check if the current category exists as a property on the object
      if (storedData.categoryType) {
        console.log('2: Stored data - exists already: ');
        setAllPlaces(storedData.categoryType);
        return;
      }

      // Stored API data - exists, but not for this category
      console.log('3: API data exists but not for this category');
      const response = await getPlacesByType(categoryType);
      setAllPlaces(response);
      const combinedData = {
        ...storedData,
        categoryType: response,
      };

      await storeData(combinedData);
      setLoading(false);
    })();
  }, []);

  // Store specific types of each venue (pre-picked to hardcode)
  useEffect(() => {
    console.log(allPlaces);
    if (categoryType === types.pharmacy) {
      const pharmacyIDs = ['ChIJG6dE2CwFdkgROcOcqlAKQmo'];
      const filteredPlaces = allPlaces?.filter((item) => {
        return pharmacyIDs.includes(item.place_id);
      });
      console.log('FILTERED:');
      console.log(filteredPlaces);
      setFilteredPlaces(filteredPlaces);
    }
  }, [allPlaces]);

  return (
    // TODO: Convert to a FlatList
    <ScrollView>
      {!filteredPlaces ? (
        <ActivityIndicator />
      ) : (
        filteredPlaces
          .sort(
            (firstItem, secondItem) => firstItem.distance > secondItem.distance
          )
          .map((currentPlace) => {
            return (
              // Add accessibility info
              <Card
                key={`${currentPlace.place_id}`}
                onPress={() =>
                  navigation.navigate(HomeStackScreens.CategoryScreen, {
                    categoryItem: currentPlace,
                  })
                }
              >
                <Card.Content>
                  <Title>{currentPlace.name}</Title>
                  <Paragraph>{currentPlace.distance} miles away</Paragraph>
                </Card.Content>
              </Card>
            );
          })
      )}
    </ScrollView>
  );
};

export default CategoriesScreen;
