import { FontAwesome } from '@expo/vector-icons';
import React, { FC } from 'react';
import constants from 'theme/constants';

interface IBankProps {
  size?: number;
  color?: string;
}

const Bank: FC<IBankProps> = ({
  size = constants.iconSize,
  color = 'black',
}) => {
  return <FontAwesome name='bank' size={size} color={color} />;
};

export default Bank;
