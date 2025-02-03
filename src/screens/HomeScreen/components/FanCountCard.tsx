import React from 'react';
import {Platform, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';

import {selectFansCount} from '@/store/fansSlice';
import type {Gender} from '@/utils/types';
import {AppText, AppCard} from '@/components/ui';

type Props = {
  gender: Gender;
  title: string;
};

export function FanCountCard({title, gender}: Props) {
  const count = useSelector(selectFansCount(gender));
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
    borderRadius: Platform.OS === 'ios' ? 8 : 4,
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
