import { StackScreenProps } from '@react-navigation/stack';
import { OnboardingScreens } from 'navigation/Navigation.types';
import { OnboardingScreenParamList } from 'navigation/Navigator';
import React from 'react';
import { View, Text, Button } from 'react-native';

export type LandingScreenRoutingProps = StackScreenProps<
  OnboardingScreenParamList,
  OnboardingScreens.LandingScreen
>;

interface ILandingScreenProps extends LandingScreenRoutingProps {}

const LandingScreen = ({ navigation }: ILandingScreenProps) => {
  return (
    <View>
      <Text>LandingScreen</Text>
      <Button
        title='Navigate to Location screen'
        onPress={() => navigation.navigate(OnboardingScreens.LocationScreen)}
      />
    </View>
  );
};

export default LandingScreen;
