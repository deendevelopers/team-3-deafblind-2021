import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import SettingsScreen from 'screens/Settings/SettingsScreen';
import { SettingsStackScreens } from './Navigation.types';

interface ISettingsStackScreenProps {}

export type SettingsStackScreenParamList = {
  [SettingsStackScreens.SettingsScreen]: undefined;
};

const SettingsStackScreen = (props: ISettingsStackScreenProps) => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name={SettingsStackScreens.SettingsScreen}
        component={SettingsScreen}
      />
    </Stack.Navigator>
  );
};

export default SettingsStackScreen;
