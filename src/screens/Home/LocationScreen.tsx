import { StackScreenProps } from '@react-navigation/stack';
import { Navigators, OnboardingScreens } from 'navigation/Navigation.types';
import { OnboardingScreenParamList } from 'navigation/Navigator';
import React from 'react';
import { View, Text, Button } from 'react-native';

export type LocationScreenRoutingProps = StackScreenProps<
  OnboardingScreenParamList,
  OnboardingScreens.LocationScreen
>;

interface ILocationScreenProps extends LocationScreenRoutingProps {}

const LocationScreen = ({ navigation }: ILocationScreenProps) => {
  return (
    <View>
      <Text>LocationScreen</Text>
      <Button
        title='Navigate to AllCategories screen'
        onPress={() => navigation.navigate(Navigators.MainNavigator)}
      />
    </View>
  );
};

export default LocationScreen;
