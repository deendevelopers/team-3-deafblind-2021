import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import React from 'react';
import HomeStackScreen from './HomeStackScreen';
import SettingsStackScreen from './SettingsStackScreen';

const Tab = createMaterialBottomTabNavigator();

export function MainApp() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name='Home'
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
        name='Settings'
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
