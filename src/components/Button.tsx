/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface Props {
  text: string;
  backgroundColor?: string;
  full?: boolean;
}

const Button = ({ text, backgroundColor = '#2D2D2D', full = false }: Props) => {
  return (
    <TouchableOpacity>
      <View
        style={{
          ...styles.button,
          backgroundColor,
          width: full ? 180 : 80,
        }}>
        <Text
          style={{
            ...styles.textButton,
            color: backgroundColor === '#9B9B9B' ? 'black' : 'white',
          }}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 80,
    width: 80,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  textButton: {
    color: 'white',
    fontSize: 30,
    padding: 10,
  },
});

export default Button;
