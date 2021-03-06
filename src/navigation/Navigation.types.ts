import { ILocationData } from '../network/GoogleMapsAPI';
import { types } from '../network/GoogleMapsAPI.types';

export enum Navigators {
  HomeNavigator = 'Home',
  SettingsNavigator = 'Settings',
  MainNavigator = 'MainNavigator',
}

export enum OnboardingScreens {
  LandingScreen = 'LandingScreen',
  LocationScreen = 'LocationScreen',
}

export enum HomeStackScreens {
  ChooseCategoryScreen = 'Choose Category',
  AllCategoriesScreen = 'All Categories',
  CategoriesScreen = 'Categories',
  CategoryScreen = 'Category',
}

export enum SettingsStackScreens {
  SettingsScreen = 'SettingsScreen',
}

export type HomeStackParamList = {
  [HomeStackScreens.ChooseCategoryScreen]: undefined;
  [HomeStackScreens.AllCategoriesScreen]: { category: CATEGORIES };
  [HomeStackScreens.CategoriesScreen]: { categoryType: types };
  [HomeStackScreens.CategoryScreen]: {
    categoryItem: ILocationData;
    categoryType: types;
  };
};

export enum CATEGORIES {
  places = 'Places',
  activities = 'Activities',
}
