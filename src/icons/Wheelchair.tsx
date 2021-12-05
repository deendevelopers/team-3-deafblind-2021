import { FontAwesome } from '@expo/vector-icons';
import React, { FC } from 'react';
import constants from 'theme/constants';

interface IWheelchairProps {
  size?: number;
  color?: string;
}

const Wheelchair: FC<IWheelchairProps> = ({
  size = constants.iconSize,
  color = 'black',
}) => {
  return <FontAwesome name='wheelchair' size={size} color={color} />;
};

export default Wheelchair;
