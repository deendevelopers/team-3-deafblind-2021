import React from 'react';
import { View, Text } from 'react-native';
import { Title } from 'react-native-paper';

interface Props {
  color?: string;
}

const HeaderTwo = ({ color, children }: Props) => {
  return (
    <Title
      style={{
        fontFamily: 'Bold',
        fontSize: 24,
        color,
      }}
    >
      {children}
    </Title>
  );
};

export default HeaderTwo;
