import React, {ReactNode} from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';

type Props = {
  children: ReactNode;
};

export function AppButton({children}: Props) {
  return (
    <Pressable style={styles.container}>
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: 'rgba(255, 42, 36, 0.78)',
  },
  text: {
    textTransform: 'uppercase',
    color: 'rgba(255, 42, 36, 0.78)',
  },
});
