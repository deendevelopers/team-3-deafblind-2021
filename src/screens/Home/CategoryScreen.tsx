import { StackScreenProps } from '@react-navigation/stack';
import {
  HomeStackParamList,
  HomeStackScreens,
} from 'navigation/Navigation.types';
import React from 'react';
import { View, Text } from 'react-native';

export type CategoryScreenRoutingProps = StackScreenProps<
  HomeStackParamList,
  HomeStackScreens.CategoryScreen
>;

interface ICategoryScreenProps extends CategoryScreenRoutingProps {}

const CategoryScreen = ({ navigation, route }: ICategoryScreenProps) => {
  const { categoryItem } = route.params;
  return (
    <View>
      <Text>CategoryScreen</Text>
      <Text>{categoryItem.name}</Text>
    </View>
  );
};

export default CategoryScreen;
