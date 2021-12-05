import React from 'react';
import { View, Text } from 'react-native';
import {
  ActivityIndicator as PaperIndicator,
  Colors,
} from 'react-native-paper';
import colors from 'theme/colors';

interface IActivityIndicatorProps {}

const ActivityIndicator = (props: IActivityIndicatorProps) => {
  return <PaperIndicator animating color={colors.tertiary} size='large' />;
};

export default ActivityIndicator;
