import React, {Suspense} from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import type {Gender} from '../../types';
import {FanCountCard} from './FanCountCard';
import {CharactersList} from './CharactersList';

type CardItem = {
  title: string;
  count: number;
  gender: Gender;
};

const cards: CardItem[] = [
  {
    title: 'Female Fans',
    gender: 'female',
    count: 0,
  },
  {
    title: 'Male Fans',
    gender: 'male',
    count: 0,
  },
  {
    title: 'Other Fans',
    gender: 'other',
    count: 0,
  },
];

export function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.cardRow}>
        {cards.map(({title, gender}, index) => (
          <FanCountCard key={index} title={title} gender={gender} />
        ))}
      </View>
      <View>
        <Suspense fallback={<ActivityIndicator />}>
          <CharactersList style={styles.listContainer} />
        </Suspense>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: -24,
  },
  cardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 16,
    paddingVertical: 16,
    paddingHorizontal: 24,
  },
  listContainer: {
    paddingHorizontal: 24,
  },
});
