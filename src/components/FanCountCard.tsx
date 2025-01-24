import React from 'react';
import {StyleSheet} from 'react-native';
import {AppText} from './AppText';
import {AppCard} from './AppCard';

type Props = {
  count: number;
  title: string;
};

export function FanCountCard({count, title}: Props) {
  return (
    <AppCard style={styles.container}>
      <AppText style={styles.count}>{count}</AppText>
      <AppText style={styles.title}>{title}</AppText>
    </AppCard>
  );
}

const styles = StyleSheet.create({
  container: {
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
  roundedBorder: {
    borderRadius: 12,
  },
});
