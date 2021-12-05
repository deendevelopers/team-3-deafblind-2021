import React, { useState } from 'react';
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
import colors from 'theme/colors';
import { AppContext } from './src/state/context';

const Stack = createStackNavigator();

// React Native Paper - app theme
const theme = {
  ...PaperTheme,
  roundness: 2,
  colors: {
    ...PaperTheme.colors,
    primary: colors.primary,
    accent: colors.tertiary,
    text: 'black',
  },
};

// React Navigation Theme
const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.primary,
    background: '#F4F3EF',
    card: '#112E51',
    text: 'white',
  },
};

const App = () => {
  const [locationData, setLocationData] = useState({});

  return (
    <AppContext.Provider
      value={{
        locationData,
        setLocationData,
      }}
    >
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
    </AppContext.Provider>
  );
};

export default App;
