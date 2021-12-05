import React from 'react';
import { View, Text } from 'react-native';
import Constants from 'expo-constants';

interface ISettingsScreenProps {}

const SettingsScreen = (props: ISettingsScreenProps) => {
  return (
    <View>
      <Text>SettingsScreen</Text>
      <Text>Version: {Constants.manifest?.version}</Text>
    </View>
  );
};

export default SettingsScreen;
