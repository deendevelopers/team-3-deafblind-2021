import { StackScreenProps } from '@react-navigation/stack';
import { OnboardingScreens } from 'navigation/Navigation.types';
import { OnboardingScreenParamList } from 'navigation/Navigator';
import React, { useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import HeaderOne from 'components/Typography/HeaderOne';
import HeaderTwo from 'components/Typography/HeaderTwo';
import HeadingHeavy from 'components/Typography/HeadingHeavy';
import ButtonText from 'components/Typography/ButtonText';

export type LandingScreenRoutingProps = StackScreenProps<
  OnboardingScreenParamList,
  OnboardingScreens.LandingScreen
>;

interface ILandingScreenProps extends LandingScreenRoutingProps {}

const LandingScreen = ({ navigation }: ILandingScreenProps) => {
  return (
    <View>
      <Button
        title='Navigate to Location screen'
        onPress={() => navigation.navigate(OnboardingScreens.LocationScreen)}
      />
    </View>
  );
};

export default LandingScreen;
