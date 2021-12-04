import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import AllCategoriesScreen from 'screens/Home/AllCategoriesScreen';
import CategoriesScreen from 'screens/Home/CategoriesScreen';
import CategoryScreen from 'screens/Home/CategoryScreen';
import ChooseCategoryScreen from 'screens/Home/ChooseCategoryScreen';

interface IHomeStackScreenProps {}

const HomeStackScreen = (props: IHomeStackScreenProps) => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator initialRouteName='ChooseCategoryScreen'>
      <Stack.Screen
        name='ChooseCategoryScreen'
        component={ChooseCategoryScreen}
      />
      <Stack.Screen
        name='AllCategoriesScreen'
        component={AllCategoriesScreen}
      />
      <Stack.Screen name='CategoriesScreen' component={CategoriesScreen} />
      <Stack.Screen name='CategoryScreen' component={CategoryScreen} />
    </Stack.Navigator>
  );
};

export default HomeStackScreen;
