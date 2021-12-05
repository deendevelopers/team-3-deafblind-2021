import { StackScreenProps } from '@react-navigation/stack';
import {
  HomeStackParamList,
  HomeStackScreens,
} from 'navigation/Navigation.types';
import { typeFormatted } from 'network/GoogleMapsAPI.types';
import React from 'react';
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

const CategoryScreen = ({ route }: ICategoryScreenProps) => {
  const { categoryItem, categoryType } = route.params;
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

      {/* Image */}
      <Title>IMAGE HERE</Title>

      {/* Accessibility Information */}
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
