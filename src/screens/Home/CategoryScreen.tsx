import { StackScreenProps } from '@react-navigation/stack';
import {
  HomeStackParamList,
  HomeStackScreens,
} from 'navigation/Navigation.types';
import { typeFormatted, types } from 'network/GoogleMapsAPI.types';
import React, { useEffect } from 'react';
import { View, Alert, ScrollView, Image } from 'react-native';
import { Title, Subheading, Paragraph, Button } from 'react-native-paper';
import AccessibilityInfo from 'components/AccessibilityInfo';
import { commonStyles } from '../../utils/commonStyles';
import { openInMaps } from '../../utils/openInMaps';

export type CategoryScreenRoutingProps = StackScreenProps<
  HomeStackParamList,
  HomeStackScreens.CategoryScreen
>;

interface ICategoryScreenProps extends CategoryScreenRoutingProps {}

const CategoryScreen = ({ navigation, route }: ICategoryScreenProps) => {
  const { categoryItem, categoryType } = route.params;

  useEffect(() => {
    navigation.setOptions({
      headerTitle: categoryItem.name,
    });
  }, []);
  const { containerStyle } = commonStyles;

  const createMapsAlert = () =>
    Alert.alert(
      'Open Location In Maps',
      `Would you like to open ${categoryItem.name} in the maps app?`,
      [
        {
          text: 'No',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'Yes',
          onPress: () => openInMaps(categoryItem.lat, categoryItem.lng),
        },
      ]
    );

  const renderImage = () => {
    if (categoryType === types.restaurant) {
      return (
        <Image
          source={require('../../../assets/restaurant.jpeg')}
          style={{
            width: '100%',
            height: undefined,
            aspectRatio: 1,
          }}
          accessibilityLabel='food served on a plate at a restaurant'
        />
      );
    }
    if (categoryType === types.supermarket) {
      return (
        <Image
          source={require('../../../assets/supermarket.jpeg')}
          style={{
            width: '100%',
            height: undefined,
            aspectRatio: 1,
          }}
          accessibilityLabel='supermarket aisle with products on the left and right hand side'
        />
      );
    }
    if (categoryType === types.pharmacy) {
      return (
        <Image
          source={require('../../../assets/pharmacy.jpeg')}
          style={{
            width: '100%',
            height: undefined,
            aspectRatio: 1,
          }}
          accessibilityLabel='pharmacy shelves stocked with pharmaceutical products'
        />
      );
    }
    if (categoryType === types.bank) {
      return (
        <Image
          source={require('../../../assets/bank.jpeg')}
          style={{
            width: '100%',
            height: undefined,
            aspectRatio: 1,
          }}
          accessibilityLabel='outer exterior of a bank'
        />
      );
    }
  };

  return (
    <ScrollView style={containerStyle}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <View>
          <Title>{categoryItem.name}</Title>
          <Subheading>{typeFormatted[categoryType as string]}</Subheading>
        </View>

        <View
          style={{
            alignSelf: 'flex-end',
          }}
        >
          <Paragraph>{categoryItem.distance} miles</Paragraph>
        </View>
      </View>

      {renderImage()}

      <AccessibilityInfo data={categoryItem.accessibility} />

      <Title>Address</Title>
      <Paragraph>{categoryItem.location}</Paragraph>

      {categoryItem.contact && (
        <Button
          mode='outlined'
          accessibilityLabel={`Call ${categoryItem.name}`}
          accessibilityHint={`Perform a call to ${categoryItem.name}'s using your phone app'`}
          onPress={() => console.log('perform phone call (not working yet)')}
        >
          Call
        </Button>
      )}

      <Button
        mode='outlined'
        accessibilityLabel='Open location in maps'
        accessibilityHint={`Open ${categoryItem.name} in the maps app for directions`}
        onPress={() => createMapsAlert()}
      >
        Open location in maps
      </Button>
    </ScrollView>
  );
};

export default CategoryScreen;
