import { StackScreenProps } from '@react-navigation/stack';
import {
  HomeStackParamList,
  HomeStackScreens,
} from 'navigation/Navigation.types';
import { getPlacesByType, ILocationData } from '../../network/GoogleMapsAPI';
import React, { useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';
import ActivityIndicator from 'components/ActivityIndicator';
import { Card, Paragraph, Title } from 'react-native-paper';
import { storeData, getData } from '../../storage/storageMethods';
import { types } from 'network/GoogleMapsAPI.types';
import ShoppingCart from 'icons/ShoppingCart';
import colors from 'theme/colors';
import Bank from 'icons/Bank';
import Food from 'icons/Food';
import Pharmacy from 'icons/Pharmacy';

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

  const renderIcon = () => {
    if (categoryType === types.supermarket) {
      return <ShoppingCart size={40} color={colors.tertiary} />;
    }
    if (categoryType === types.bank) {
      return <Bank size={40} color={colors.tertiary} />;
    }
    if (categoryType === types.restaurant) {
      return <Food size={40} color={colors.tertiary} />;
    }
    if (categoryType === types.pharmacy) {
      return <Pharmacy size={40} color={colors.tertiary} />;
    }
  };

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
                accessibilityLabel={`View ${currentPlace.name}`}
                accessibilityHint={`Navigate to the next screen to find out more about ${currentPlace.name}`}
                onPress={() =>
                  navigation.navigate(HomeStackScreens.CategoryScreen, {
                    categoryItem: currentPlace,
                    categoryType,
                  })
                }
              >
                <Card.Content
                  style={{ flexDirection: 'row', alignItems: 'center' }}
                >
                  <View style={{ marginRight: 20, flex: 2 }}>
                    {renderIcon()}
                  </View>

                  <View
                    style={{
                      flex: 10,
                    }}
                  >
                    <Title>{currentPlace.name}</Title>
                    <Paragraph>{currentPlace.distance} miles away</Paragraph>
                  </View>
                </Card.Content>
              </Card>
            );
          })
      )}
    </ScrollView>
  );
};

export default CategoriesScreen;
