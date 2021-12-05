import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import React from 'react';
import HomeStackScreen from './HomeStackScreen';
import { Navigators, OnboardingScreens } from './Navigation.types';
import SettingsStackScreen from './SettingsStackScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

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
        options={{
          tabBarIcon: ({ color, size = 20 }) => (
            <MaterialCommunityIcons name='home' color={color} size={size} />
          ),
          tabBarAccessibilityLabel: 'Navigate to the home screen',
        }}
      />
      <Tab.Screen
        name={Navigators.SettingsNavigator}
        component={SettingsStackScreen}
        options={{
          tabBarIcon: ({ color, size = 20 }) => (
            <Ionicons name='settings' color={color} size={size} />
          ),
          tabBarAccessibilityLabel: 'Navigate to the settings screen',
        }}
      />
    </Tab.Navigator>
  );
}
