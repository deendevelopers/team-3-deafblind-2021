import React from 'react';
import { View, Text } from 'react-native';
import { Title } from 'react-native-paper';

interface Props {
  color?: string;
}

const Text = ({ color, children }: Props) => {
  return (
    <Title
      style={{
        fontFamily: 'Regular',
        fontSize: 16,
        color,
      }}
    >
      {children}
    </Title>
  );
};

export default Text;
