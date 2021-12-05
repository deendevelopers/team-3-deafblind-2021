import { Ionicons } from '@expo/vector-icons';
import React, { FC } from 'react';
import constants from 'theme/constants';

interface IEarProps {
  size?: number;
  color?: string;
}

const Ear: FC<IEarProps> = ({ size = constants.iconSize, color = 'black' }) => {
  return <Ionicons name='ear' size={size} color={color} />;
};

export default Ear;
