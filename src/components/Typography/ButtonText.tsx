import React from 'react';
import { View, Text } from 'react-native';
import { Title } from 'react-native-paper';

interface Props {
  color?: string;
}

const ButtonText = ({ color, children }: Props) => {
  return (
    <Title
      style={{
        fontFamily: 'SemiBold',
        fontSize: 18,
        color,
      }}
    >
      {children}
    </Title>
  );
};

export default ButtonText;
