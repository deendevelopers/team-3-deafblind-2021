import React from 'react';
import { StyleSheet } from 'react-native';
import {
  Provider as PaperProvider,
  DefaultTheme as PaperTheme,
} from 'react-native-paper';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import LandingScreen from 'screens/Home/LandingScreen';
import LocationScreen from 'screens/Home/LocationScreen';
import { MainApp } from './src/navigation/Navigator';
import { createStackNavigator } from '@react-navigation/stack';
import { Navigators, OnboardingScreens } from 'navigation/Navigation.types';

const Stack = createStackNavigator();

// React Native Paper - app theme
const theme = {
  ...PaperTheme,
  roundness: 2,
  colors: {
    ...PaperTheme.colors,
    primary: '#112E51',
    accent: '#f1c40f',
    text: 'black',
  },
};

// React Navigation Theme
const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#112E51',
    background: '#F4F3EF',
    card: '#112E51',
    text: 'white',
  },
};

const App = () => (
  <PaperProvider theme={theme}>
    <NavigationContainer theme={MyTheme}>
      {/* Show landing only once (use async storage to store boolean) */}
      <Stack.Navigator initialRouteName='LandingScreen'>
        <Stack.Screen
          name={OnboardingScreens.LandingScreen}
          component={LandingScreen}
        />
        <Stack.Screen
          name={OnboardingScreens.LocationScreen}
          component={LocationScreen}
        />
        <Stack.Screen
          name={Navigators.MainNavigator}
          component={MainApp}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  </PaperProvider>
);

export default App;
