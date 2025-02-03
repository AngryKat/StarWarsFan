import React from 'react';
import {StyleSheet, Text, TextProps} from 'react-native';
import fonts from '../../config/fonts';

type Props = TextProps;

export function AppText({children, style, ...textProps}: Props) {
  return (
    <Text {...textProps} style={[styles.text, style]}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: fonts.Inter.normal,
  },
});
