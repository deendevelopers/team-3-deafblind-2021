import { StackScreenProps } from '@react-navigation/stack';
import { Navigators, OnboardingScreens } from 'navigation/Navigation.types';
import { OnboardingScreenParamList } from 'navigation/Navigator';
import React, { useState } from 'react';
import { Button, Paragraph, TextInput } from 'react-native-paper';
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import colors from 'theme/colors';
import ArrowRight from 'icons/ArrowRight';

export type LocationScreenRoutingProps = StackScreenProps<
  OnboardingScreenParamList,
  OnboardingScreens.LocationScreen
>;

interface ILocationScreenProps extends LocationScreenRoutingProps {}

const LocationScreen = ({ navigation }: ILocationScreenProps) => {
  const [input, setInput] = useState('');
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView>
        {/* CONTAINER */}
        <View
          style={{
            marginTop: 60,
          }}
        >
          <View style={styles.iconText}>
            <View style={[styles.centre, { marginBottom: 30 }]}>
              <Text style={styles.title}>
                Find the best places {'\n'} around
              </Text>
            </View>

            <View style={styles.icon}>
              <Icon name='map-marker-alt' size={100} color='#F27F3E'></Icon>
            </View>
          </View>

          <View
            style={{
              marginTop: 100,
            }}
          >
            <View style={{ paddingHorizontal: 30 }}>
              <Text>Enter Postcode</Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                <View style={{ flex: 11 }}>
                  <TextInput
                    style={styles.postcodeInput}
                    accessibilityLabel='Postcode'
                    placeholder='E14 7QY'
                    placeholderTextColor='#A6A6A6'
                    // underlineColor='transparent'
                    mode='outlined'
                    value={input}
                    onChangeText={(text) => setInput(text)}
                    theme={{
                      colors: {
                        primary: colors.primary,
                        underlineColor: colors.primary,
                      },
                    }}
                  />
                </View>

                <TouchableOpacity
                  accessibilityLabel='Submit postcode'
                  accessibilityHint='Navigates to the screen where you can choose a category'
                  onPress={() => navigation.navigate(Navigators.MainNavigator)}
                  style={{
                    marginLeft: 10,
                    flex: 1,
                  }}
                >
                  <ArrowRight color={colors.primary} size={30} />
                </TouchableOpacity>
              </View>
            </View>

            <Paragraph
              style={{
                textAlign: 'center',
                fontSize: 20,
                paddingTop: 20,
              }}
            >
              Or
            </Paragraph>

            <View style={styles.ctaButtonContainer}>
              <Button
                icon='map-marker'
                mode='contained'
                uppercase={false}
                style={styles.ctaButton}
                contentStyle={styles.ctaButtonInner}
                labelStyle={styles.ctaButtonText}
                onPress={() => navigation.navigate(Navigators.MainNavigator)}
              >
                Use My Current Location
              </Button>
              <Text
                style={{
                  textAlign: 'center',
                  paddingTop: 5,
                }}
              >
                We will need your permission to locate you
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'space-between',
  },
  postcodeInput: {
    // justifyContent: 'flex-end',
    // alignSelf: 'center',
    // width: 300,
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
    // borderColor: colors.primary,
    // borderRadius: 20,
    // backgroundColor: 'white',
    // underlineColor: 'transparent'
  },
  postcodeLabel: {
    marginLeft: 40,
    paddingBottom: 5,
    fontSize: 16,
    fontWeight: '500',
  },
  iconText: {
    // marginTop: 100,
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
    width: 350,
    paddingTop: 20,
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
    justifyContent: 'center',
  },
});

export default LocationScreen;
