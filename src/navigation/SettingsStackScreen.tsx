import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import SettingsScreen from 'screens/Settings/SettingsScreen';

interface ISettingsStackScreenProps {}

const SettingsStackScreen = (props: ISettingsStackScreenProps) => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name='SettingsScreen' component={SettingsScreen} />
    </Stack.Navigator>
  );
};

export default SettingsStackScreen;
