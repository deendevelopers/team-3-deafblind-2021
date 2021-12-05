import React from 'react';
import { View, Text } from 'react-native';
import { Title } from 'react-native-paper';

interface Props {
  color?: string;
}

const HeaderOne = ({ color, children }: Props) => {
  return (
    <Title
      style={{
        fontFamily: 'Black',
        fontSize: 36,
        color,
      }}
    >
      {children}
    </Title>
  );
};

export default HeaderOne;
