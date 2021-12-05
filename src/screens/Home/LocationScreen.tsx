import { StackScreenProps } from '@react-navigation/stack';
import { Navigators, OnboardingScreens } from 'navigation/Navigation.types';
import { OnboardingScreenParamList } from 'navigation/Navigator';
import React from 'react';
import { Button, TextInput } from 'react-native-paper';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export type LocationScreenRoutingProps = StackScreenProps<
  OnboardingScreenParamList,
  OnboardingScreens.LocationScreen
>;

interface ILocationScreenProps extends LocationScreenRoutingProps { }

const LocationScreen = ({ navigation }: ILocationScreenProps) => {
  return (
    <View style={styles.container}>

      <View style={styles.iconText}>

        <View style={styles.centre}>
          <Text style={styles.title}>Find the best places {'\n'} around</Text>
          <Text>We need your permission</Text>
        </View>

        <View style={styles.icon}>
          <Icon name="map-marker-alt" size={100} color="#F27F3E"></Icon>
        </View>

      </View>

      <View>
        <Text style={styles.postcodeLabel}>
          Enter Postcode
        </Text>
        <TextInput
          style={styles.postcodeInput}
          accessibilityLabel="Postcode"
          placeholder="E14 7QY"
          placeholderTextColor="#A6A6A6"
          underlineColor="transparent"

        />
      </View>

      <View style={styles.ctaButtonContainer}>
        <Button
          icon="map-marker"
          mode="contained"
          uppercase={false}
          style={styles.ctaButton}
          contentStyle={styles.ctaButtonInner}
          labelStyle={styles.ctaButtonText}
          onPress={() => navigation.navigate(Navigators.MainNavigator)}>
          Use My Current Location
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
  postcodeInput: {
    justifyContent: 'flex-end',
    alignSelf: 'center',
    width: 300,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderRadius: 20,
    backgroundColor: 'white',
    // underlineColor: 'transparent'
  },
  postcodeLabel: {
    marginLeft: 65,
    paddingBottom: 5,
    fontSize: 16,
    fontWeight: '500',
  },
  iconText: {
    marginTop: 200,
  },
  icon: {
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#2D2D2D',
    fontSize: 30,
    fontWeight: '800',
    textAlign: 'center',
    paddingBottom: 10,
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
    fontSize: 18,
    fontWeight: '500',
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
})

export default LocationScreen;