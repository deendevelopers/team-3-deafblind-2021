import React from 'react';
import { View, Text } from 'react-native';
import { HomeStackParamList } from 'navigation/HomeStackScreen';
import { StackScreenProps } from '@react-navigation/stack';
import { HomeStackScreens } from 'navigation/Navigation.types';
import { AppContext } from '../../state/context';

export type ChooseCategoryRoutingProps = StackScreenProps<
  HomeStackParamList,
  HomeStackScreens.ChooseCategoryScreen
>;

interface IChooseCategoryScreenProps extends ChooseCategoryRoutingProps {}

const ChooseCategoryScreen = ({
  navigation,
  route,
}: IChooseCategoryScreenProps) => {
  const value = React.useContext(AppContext);

  return (
    <View>
      <Text>ChooseCategoryScreen</Text>
    </View>
  );
};

export default ChooseCategoryScreen;
