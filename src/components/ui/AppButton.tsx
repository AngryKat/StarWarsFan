import React, {ReactNode} from 'react';
import {Platform, Pressable, PressableProps, StyleSheet} from 'react-native';
import {AppText} from './AppText';

type Props = {
  children: ReactNode;
} & PressableProps;

export function AppButton({children, ...pressableProps}: Props) {
  return (
    <Pressable
      {...pressableProps}
      style={styles.container}
      accessibilityRole="button">
      <AppText style={styles.text}>{children}</AppText>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderRadius: 4,
    borderColor:
      Platform.OS === 'ios' ? 'transparent' : 'rgba(255, 42, 36, 0.78)',
  },
  text: {
    textTransform: 'uppercase',
    color: 'rgba(255, 42, 36, 0.78)',
    textAlign: 'center',
  },
});
