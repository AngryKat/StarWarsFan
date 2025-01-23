import React from 'react';
import {StyleSheet, View} from 'react-native';
import {AppText} from './AppText';

type Props = {
  count: number;
  title: string;
};

export function FanCountCard({count, title}: Props) {
  return (
    <View style={styles.container}>
      <AppText style={styles.count}>{count}</AppText>
      <AppText style={styles.title}>{title}</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flexBasis: 0,
    flexShrink: 1,
    flexGrow: 1,
    padding: 15,
    borderRadius: 4,
  },
  count: {
    fontSize: 32,
  },
  title: {
    fontSize: 12,
  },
});
