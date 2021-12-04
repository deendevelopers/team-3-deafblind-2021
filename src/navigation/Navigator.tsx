import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import React from 'react';
import HomeStackScreen from './HomeStackScreen';
import { Navigators, OnboardingScreens } from './Navigation.types';
import SettingsStackScreen from './SettingsStackScreen';

const Tab = createMaterialBottomTabNavigator();

export type OnboardingScreenParamList = {
  [OnboardingScreens.LandingScreen]: undefined;
  [OnboardingScreens.LocationScreen]: undefined;
};

export function MainApp() {
  return (
    <Tab.Navigator initialRouteName={Navigators.HomeNavigator}>
      <Tab.Screen
        name={Navigators.HomeNavigator}
        component={HomeStackScreen}
        // options={{
        //   tabBarIcon: ({ color, size = 20 }) => (
        //     <MaterialCommunityIcons
        //       name='coffee-to-go'
        //       color={color}
        //       size={size}
        //     />
        //   ),
        // }}
      />
      <Tab.Screen
        name={Navigators.SettingsNavigator}
        component={SettingsStackScreen}
        // options={{
        //   headerShown: false,
        //   tabBarIcon: ({ color, size = 20 }) => (
        //     <MaterialCommunityIcons
        //       name='badge-account'
        //       color={color}
        //       size={size}
        //     />
        //   ),
        // }}
      />
    </Tab.Navigator>
  );
}
