import React from 'react';
import { View, StyleSheet } from 'react-native';
import { CATEGORIES, HomeStackParamList } from 'navigation/HomeStackScreen';
import { StackScreenProps } from '@react-navigation/stack';
import { HomeStackScreens } from 'navigation/Navigation.types';
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
      <Title>Choose a category</Title>
      <View>
        <Card
          accessible
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
            <Title>Places</Title>
          </Card.Content>
        </Card>

        <Card
          accessible
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
  },
  iconContainer: { marginRight: 15 },
});

export default ChooseCategoryScreen;
