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
import { useFonts } from 'expo-font';

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
    background: 'white',
  },
};

// React Navigation Theme
const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.primary,
    background: 'white',
    card: '#112E51',
    text: 'white',
  },
};

const App = () => {
  const [locationData, setLocationData] = useState({});

  const [loaded] = useFonts({
    Medium: require('./src/theme/fonts/SFProDisplay-Medium.ttf'),
    Bold: require('./src/theme/fonts/SFProDisplay-Bold.ttf'),
    Black: require('./src/theme/fonts/SFProDisplay-Black.ttf'),
    Regular: require('./src/theme/fonts/SFProDisplay-Regular.ttf'),
    SemiBold: require('./src/theme/fonts/SFProDisplay-SemiBold.ttf'),
    Heavy: require('./src/theme/fonts/SFProDisplay-Heavy.ttf'),
  });

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
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name={OnboardingScreens.LocationScreen}
              component={LocationScreen}
              options={{
                headerShown: false,
              }}
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
