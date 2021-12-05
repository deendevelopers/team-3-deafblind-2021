import { Entypo } from '@expo/vector-icons';
import React, { FC } from 'react';
import constants from 'theme/constants';

interface IEyeProps {
  size?: number;
  color?: string;
}

const Eye: FC<IEyeProps> = ({ size = constants.iconSize, color = 'black' }) => {
  return <Entypo name='eye' size={size} color={color} />;
};

export default Eye;
