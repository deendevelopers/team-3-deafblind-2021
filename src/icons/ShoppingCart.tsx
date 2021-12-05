import { AntDesign } from '@expo/vector-icons';
import React, { FC } from 'react';
import constants from 'theme/constants';

interface IShoppingCartProps {
  size?: number;
  color?: string;
}

const ShoppingCart: FC<IShoppingCartProps> = ({
  size = constants.iconSize,
  color = 'black',
}) => {
  return <AntDesign name='shoppingcart' size={size} color={color} />;
};

export default ShoppingCart;
