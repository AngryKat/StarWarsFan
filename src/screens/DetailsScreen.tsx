import React, {Suspense} from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import type {Character, Gender, RootStackParamList} from '../types';
import {useCharacter} from '../api/characters-api-hooks';
import {AppCard, AppText, LikeButton} from '../ui';

type Props = {
  route: RouteProp<RootStackParamList, 'Details'>;
};

const skipFields: Array<keyof Character> = [
  'name',
  'edited',
  'url',
  'homeworld',
  'starships',
  'vehicles',
  'species',
  'films',
  'created',
];

export function DetailsScreen({route}: Props) {
  const {character, isError} = useCharacter(route.params.characterUrl);
  const gender: Gender = ['n/a', 'unknown', 'none'].includes(
    character?.gender ?? 'unknown',
  )
    ? 'other'
    : (character?.gender.toLocaleLowerCase() as Gender);
  return (
    <AppCard style={styles.container}>
      {isError ? (
        <AppText>{'Error :('}</AppText>
      ) : (
        <Suspense fallback={<ActivityIndicator />}>
          <View style={styles.headerContainer}>
            <AppText style={styles.headerTitle}>{character?.name}</AppText>
            <LikeButton
              accessibilityLabel={`Add to favorites ${character?.name}`}
              gender={gender}
              characterUrl={character?.url ?? ''}
            />
          </View>
          {Object.entries(character ?? {}).map(([key, value]) => {
            if (skipFields.includes(key as keyof Character)) {
              return null;
            }
            return (
              <View style={styles.dataItem} key={key}>
                <AppText style={[styles.dataItemKeyText, styles.dataItemText]}>
                  {key.split('_').join(' ') + ':'}
                </AppText>
                <AppText style={styles.dataItemText}>{value}</AppText>
              </View>
            );
          })}
        </Suspense>
      )}
    </AppCard>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 8,
  },
  dataItem: {
    flexDirection: 'row',
  },
  dataItemKeyText: {
    textTransform: 'capitalize',
    fontWeight: '600',
    paddingRight: 8,
  },
  dataItemText: {
    textTransform: 'capitalize',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 18,
  },
});
