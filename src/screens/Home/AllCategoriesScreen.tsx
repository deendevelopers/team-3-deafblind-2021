import { StackScreenProps } from '@react-navigation/stack';
import Palette from 'icons/Palette';
import Pharmacy from 'icons/Pharmacy';
import Bank from 'icons/Bank';
import ShoppingCart from 'icons/ShoppingCart';
import {
  CATEGORIES,
  HomeStackParamList,
  HomeStackScreens,
} from 'navigation/Navigation.types';
import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card, Title } from 'react-native-paper';
import { types } from '../../network/GoogleMapsAPI.types';
import colors from 'theme/colors';
import Food from 'icons/Food';

export type AllCategoriesRoutingProps = StackScreenProps<
  HomeStackParamList,
  HomeStackScreens.AllCategoriesScreen
>;

interface IAllCategoriesScreenProps extends AllCategoriesRoutingProps {}

const AllCategoriesScreen = ({
  navigation,
  route,
}: IAllCategoriesScreenProps) => {
  const { category } = route.params;

  useEffect(() => {
    navigation.setOptions({
      headerTitle: category,
    });
  }, []);

  const renderPlaces = () => {
    return (
      <View>
        <Card
          accessible
          accessibilityLabel='View restaurants'
          accessibilityHint='Navigates to the screen where you can view restaurants near you'
          accessibilityRole='button'
          onPress={() =>
            navigation.navigate(HomeStackScreens.CategoriesScreen, {
              categoryType: types.restaurant,
            })
          }
        >
          <Card.Content style={styles.cardContainer}>
            <View style={styles.iconContainer}>
              <Food color={colors.tertiary} size={40} />
            </View>
            <Title>Restaurants</Title>
          </Card.Content>
        </Card>

        <Card
          accessible
          accessibilityLabel='View pharmacies'
          accessibilityHint='Navigates to the screen where you can view pharmacies near you'
          accessibilityRole='button'
          onPress={() =>
            navigation.navigate(HomeStackScreens.CategoriesScreen, {
              categoryType: types.pharmacy,
            })
          }
        >
          <Card.Content style={styles.cardContainer}>
            <View style={styles.iconContainer}>
              <Pharmacy color={colors.tertiary} size={40} />
            </View>
            <Title>Pharmacy</Title>
          </Card.Content>
        </Card>

        <Card
          accessible
          accessibilityLabel='View banks'
          accessibilityHint='Navigates to the screen where you can view banks near you'
          accessibilityRole='button'
          onPress={() =>
            navigation.navigate(HomeStackScreens.CategoriesScreen, {
              categoryType: types.bank,
            })
          }
        >
          <Card.Content style={styles.cardContainer}>
            <View style={styles.iconContainer}>
              <Bank color={colors.tertiary} size={40} />
            </View>
            <Title>Banks</Title>
          </Card.Content>
        </Card>

        <Card
          accessible
          accessibilityLabel='View supermarkets'
          accessibilityHint='Navigates to the screen where you can view supermarkets near you'
          accessibilityRole='button'
          onPress={() =>
            navigation.navigate(HomeStackScreens.CategoriesScreen, {
              categoryType: types.supermarket,
            })
          }
        >
          <Card.Content style={styles.cardContainer}>
            <View style={styles.iconContainer}>
              <ShoppingCart color={colors.tertiary} size={40} />
            </View>
            <Title>Supermarkets</Title>
          </Card.Content>
        </Card>
      </View>
    );
  };
  return (
    <View>
      {category === CATEGORIES.places ? (
        renderPlaces()
      ) : (
        <Text>AllCategoriesScreen - {category}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: { marginRight: 15 },
});

export default AllCategoriesScreen;
