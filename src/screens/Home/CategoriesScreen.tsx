import { StackScreenProps } from '@react-navigation/stack';
import {
  HomeStackParamList,
  HomeStackScreens,
} from 'navigation/Navigation.types';
import { getPlacesByType, ILocationData } from '../../network/GoogleMapsAPI';
import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import ActivityIndicator from 'components/ActivityIndicator';
import { Card, Paragraph, Title } from 'react-native-paper';
import { storeData, getData } from '../../storage/storageMethods';

export type CategoriesScreenRoutingProps = StackScreenProps<
  HomeStackParamList,
  HomeStackScreens.CategoriesScreen
>;

interface ICategoriesScreenProps extends CategoriesScreenRoutingProps {}

const CategoriesScreen = ({ navigation, route }: ICategoriesScreenProps) => {
  const [allPlaces, setAllPlaces] = useState<ILocationData[] | null>(null);
  const [filteredPlaces, setFilteredPlaces] = useState<ILocationData[] | null>(
    null
  );
  const [, setLoading] = useState(false);
  const { categoryType } = route.params;

  const getStoredData = async () => {
    const storedData = await getData();
    if (!storedData) return null;
    return storedData;
  };

  useEffect(() => {
    setLoading(true);
    (async () => {
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
        [`${categoryType}`]: response,
      };

      await storeData(combinedData);
      setLoading(false);
    })();
  }, []);

  useEffect(() => {
    const final = allPlaces
      ?.map((item) => {
        const newData = {
          ...item,
          accessibility: {
            wheelchair: true,
            parking: true,
            inductionLoop: true,
            lighting: true,
          },
        };

        return newData;
      })
      .slice(0, 5);

    setFilteredPlaces(final);
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
                    categoryType,
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
