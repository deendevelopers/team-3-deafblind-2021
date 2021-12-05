import { StackScreenProps } from '@react-navigation/stack';
import {
  HomeStackParamList,
  HomeStackScreens,
} from 'navigation/Navigation.types';
import { getPlacesByType } from '../../network/GoogleMapsAPI';
import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import ActivityIndicator from 'components/ActivityIndicator';
import { Card, Paragraph, Title } from 'react-native-paper';

export type CategoriesScreenRoutingProps = StackScreenProps<
  HomeStackParamList,
  HomeStackScreens.CategoriesScreen
>;

interface ICategoriesScreenProps extends CategoriesScreenRoutingProps {}

const CategoriesScreen = ({ navigation, route }: ICategoriesScreenProps) => {
  const [allPlaces, setAllPlaces] = useState<any>(null);
  const { categoryType } = route.params;
  /* To Do: 
  - Pass the type into the API
  - For each result, render a card with the name, distance and accessibility info
  
  */

  useEffect(() => {
    (async () => {
      const response = await getPlacesByType(categoryType);
      setAllPlaces(response);
    })();
  }, []);

  useEffect(() => {
    console.log('\n****** All places response start *****');
    console.log(allPlaces?.length);
    console.log('****** All places response end *****\n');
  }, [allPlaces]);
  return (
    <ScrollView>
      {!allPlaces ? (
        <ActivityIndicator />
      ) : (
        allPlaces.map((currentPlace) => {
          return (
            <Card>
              <Card.Content>
                <Title>{currentPlace.name}</Title>
                <Paragraph>{currentPlace.location}</Paragraph>
              </Card.Content>
            </Card>
          );
        })
      )}
    </ScrollView>
  );
};

export default CategoriesScreen;
