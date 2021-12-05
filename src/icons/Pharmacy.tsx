import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { FC } from 'react';
import constants from 'theme/constants';

interface IPharmacyProps {
  size?: number;
  color?: string;
}

const Pharmacy: FC<IPharmacyProps> = ({
  size = constants.iconSize,
  color = 'black',
}) => {
  return <MaterialCommunityIcons name='pharmacy' size={size} color={color} />;
};

export default Pharmacy;
