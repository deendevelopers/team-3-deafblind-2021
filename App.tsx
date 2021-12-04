import createStackNavigator from '@react-navigation/stack/lib/typescript/src/navigators/createStackNavigator';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  Provider as PaperProvider,
  DefaultTheme as PaperTheme,
} from 'react-native-paper';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import LandingScreen from 'screens/Home/LandingScreen';
import LocationScreen from 'screens/Home/LocationScreen';
import { MainApp } from './src/navigation/Navigator';

const Stack = createStackNavigator();

// React Native Paper - app theme
const theme = {
  ...PaperTheme,
  roundness: 2,
  colors: {
    ...PaperTheme.colors,
    primary: '#53433A',
    accent: '#f1c40f',
    text: '#2a150d',
  },
};

// React Navigation Theme
const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#9B4949',
    background: '#F4F3EF',
    card: '#9B4949',
    text: 'white',
  },
};

const App = () => (
  <PaperProvider theme={theme}>
    <NavigationContainer theme={MyTheme}>
      {/* Show landing only once (use async storage to store boolean) */}
      <Stack.Navigator initialRouteName='LandingScreen'>
        <Stack.Screen name='LandingScreen' component={LandingScreen} />
        <Stack.Screen name='LocationScreen' component={LocationScreen} />
        <Stack.Screen name='Main' component={MainApp} />
      </Stack.Navigator>
    </NavigationContainer>
  </PaperProvider>
);

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
