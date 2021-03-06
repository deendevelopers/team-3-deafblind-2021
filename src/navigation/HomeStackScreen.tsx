import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { View } from 'react-native';
import AllCategoriesScreen from 'screens/Home/AllCategoriesScreen';
import CategoriesScreen from 'screens/Home/CategoriesScreen';
import CategoryScreen from 'screens/Home/CategoryScreen';
import ChooseCategoryScreen from 'screens/Home/ChooseCategoryScreen';
import { HomeStackParamList, HomeStackScreens } from './Navigation.types';

interface IHomeStackScreenProps {}

const HomeStackScreen = (props: IHomeStackScreenProps) => {
  const Stack = createStackNavigator<HomeStackParamList>();

  return (
    <Stack.Navigator
      initialRouteName={HomeStackScreens.ChooseCategoryScreen}
      screenOptions={{
        headerBackTitleVisible: true,
        headerTintColor: 'white',
      }}
    >
      <Stack.Screen
        name={HomeStackScreens.ChooseCategoryScreen}
        component={ChooseCategoryScreen}
        options={{
          headerLeft: () => null,
        }}
      />
      <Stack.Screen
        name={HomeStackScreens.AllCategoriesScreen}
        component={AllCategoriesScreen}
      />
      <Stack.Screen
        name={HomeStackScreens.CategoriesScreen}
        component={CategoriesScreen}
      />
      <Stack.Screen
        name={HomeStackScreens.CategoryScreen}
        component={CategoryScreen}
      />
    </Stack.Navigator>
  );
};

export default HomeStackScreen;
