import { MaterialIcons } from '@expo/vector-icons';
import React, { FC } from 'react';
import constants from 'theme/constants';

interface IInfoProps {
  size?: number;
  color?: string;
}

const Info: FC<IInfoProps> = ({
  size = constants.iconSize,
  color = 'black',
}) => {
  return <MaterialIcons name='info-outline' size={size} color={color} />;
};

export default Info;
