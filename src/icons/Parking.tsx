import { FontAwesome5 } from '@expo/vector-icons';
import React, { FC } from 'react';
import constants from 'theme/constants';

interface IParkingProps {
  size?: number;
  color?: string;
}

const Parking: FC<IParkingProps> = ({
  size = constants.iconSize,
  color = 'black',
}) => {
  return <FontAwesome5 name='parking' size={size} color={color} />;
};

export default Parking;
