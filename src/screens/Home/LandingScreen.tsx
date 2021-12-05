import { StackScreenProps } from '@react-navigation/stack';
import { OnboardingScreens } from 'navigation/Navigation.types';
import { OnboardingScreenParamList } from 'navigation/Navigator';
import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';

export type LandingScreenRoutingProps = StackScreenProps<
  OnboardingScreenParamList,
  OnboardingScreens.LandingScreen
>;

interface ILandingScreenProps extends LandingScreenRoutingProps {}

const LandingScreen = ({ navigation }: ILandingScreenProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconText}>
        <View style={styles.icon}>
          <Icon name='users' size={200} color='#F27F3E'></Icon>
        </View>

        <View style={styles.centre}>
          <Text style={styles.title}>
            Your guide to {'\n'} accessible places
          </Text>
        </View>
      </View>

      <View style={styles.ctaButtonContainer}>
        <Button
          mode='contained'
          uppercase={false}
          style={styles.ctaButton}
          contentStyle={styles.ctaButtonInner}
          labelStyle={styles.ctaButtonText}
          onPress={() => navigation.navigate(OnboardingScreens.LocationScreen)}
        >
          Get started
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  iconText: {
    marginTop: 200,
  },
  icon: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#2D2D2D',
    fontSize: 30,
    fontWeight: '800',
    textAlign: 'center',
  },
  centre: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  ctaButtonContainer: {
    justifyContent: 'flex-end',
    alignSelf: 'center',
    marginBottom: 100,
    width: 300,
  },
  ctaButtonInner: {
    height: 70,
  },
  ctaButton: {
    borderRadius: 20,
  },
  ctaButtonText: {
    fontSize: 26,
    fontWeight: '500',
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default LandingScreen;
