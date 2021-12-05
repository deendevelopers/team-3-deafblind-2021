import { AntDesign } from '@expo/vector-icons';
import React, { FC } from 'react';
import constants from 'theme/constants';

interface IArrowRightProps {
  size?: number;
  color?: string;
}

const ArrowRight: FC<IArrowRightProps> = ({
  size = constants.iconSize,
  color = 'black',
}) => {
  return <AntDesign name='arrowright' size={size} color={color} />;
};

export default ArrowRight;
