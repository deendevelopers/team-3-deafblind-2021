import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { FC } from 'react';
import constants from 'theme/constants';

interface IFoodProps {
  size?: number;
  color?: string;
}

const Food: FC<IFoodProps> = ({
  size = constants.iconSize,
  color = 'black',
}) => {
  return (
    <MaterialCommunityIcons name='food-fork-drink' size={size} color={color} />
  );
};

export default Food;
