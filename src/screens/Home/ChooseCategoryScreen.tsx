import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { StackScreenProps } from '@react-navigation/stack';
import {
  CATEGORIES,
  HomeStackParamList,
  HomeStackScreens,
} from 'navigation/Navigation.types';
import { AppContext } from '../../state/context';
import { Card, Paragraph, Subheading, Title } from 'react-native-paper';
import Bank from 'icons/Bank';
import colors from 'theme/colors';
import Palette from 'icons/Palette';

export type ChooseCategoryRoutingProps = StackScreenProps<
  HomeStackParamList,
  HomeStackScreens.ChooseCategoryScreen
>;

interface IChooseCategoryScreenProps extends ChooseCategoryRoutingProps {}

const ChooseCategoryScreen = ({
  navigation,
  route,
}: IChooseCategoryScreenProps) => {
  return (
    <View>
      <Text style={styles.currentLocation}>London, Piccadilly Circus</Text>

      <View>
        <Text style={styles.placeLabel}>Search for a place</Text>
        <TextInput
          style={styles.placeInput}
          accessibilityLabel='Enter a place name'
          underlineColor='transparent'
        />
      </View>

      <Text style={styles.categoryLabel}>Choose a category</Text>
      <View>
        <Card
          accessible
          style={styles.cardElement}
          accessibilityLabel='View places'
          accessibilityHint='Navigates to the places screen'
          accessibilityRole='button'
          onPress={() =>
            navigation.navigate(HomeStackScreens.AllCategoriesScreen, {
              category: CATEGORIES.places,
            })
          }
        >
          <Card.Content style={styles.cardContainer}>
            <View style={styles.iconContainer}>
              <Bank color={colors.tertiary} size={30} />
            </View>
            <Title style={styles.cardTitles}>Places</Title>
          </Card.Content>
        </Card>

        <Card
          accessible
          style={styles.cardElement}
          accessibilityLabel='View activities'
          accessibilityHint='Navigates to the activities screen'
          accessibilityRole='button'
          onPress={() =>
            navigation.navigate(HomeStackScreens.AllCategoriesScreen, {
              category: CATEGORIES.activities,
            })
          }
        >
          <Card.Content style={styles.cardContainer}>
            <View style={styles.iconContainer}>
              <Palette color={colors.tertiary} size={30} />
            </View>
            <Title>Activities</Title>
          </Card.Content>
        </Card>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 100,
  },
  cardElement: {
    borderRadius: 20,
    paddingLeft: 10,
    marginBottom: 10,
    width: '90%',
    alignSelf: 'center',
  },
  cardTitles: {
    fontSize: 18,
  },
  iconContainer: { marginRight: 15 },
  currentLocation: {
    alignSelf: 'flex-end',
    marginTop: 5,
    marginRight: 5,
    fontSize: 14,
    color: '#595959',
  },
  categoryLabel: {
    marginLeft: 20,
    marginBottom: 10,
    fontSize: 18,
    fontWeight: '700',
    color: '#2D2D2D',
  },
  placeInput: {
    justifyContent: 'flex-end',
    alignSelf: 'center',
    width: '90%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderRadius: 20,
    backgroundColor: 'white',
    marginBottom: 30,
    // underlineColor: 'transparent'
  },
  placeLabel: {
    marginLeft: 20,
    paddingBottom: 5,
    fontSize: 18,
    fontWeight: '700',
  },
});

export default ChooseCategoryScreen;
