import { FontAwesome5 } from '@expo/vector-icons';
import React, { FC } from 'react';
import constants from 'theme/constants';

interface IPaletteProps {
  size?: number;
  color?: string;
}

const Palette: FC<IPaletteProps> = ({
  size = constants.iconSize,
  color = 'black',
}) => {
  return <FontAwesome5 name='palette' size={size} color={color} />;
};

export default Palette;
