import React, {useEffect, useState} from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {Character, Gender, RootStackParamList} from '../types';
import {fetchCharacter} from '../api/characters-api';
import {AppText} from '../components/AppText';
import {AppCard} from '../components/AppCard';
import {LikeButton} from '../components/LikeButton';

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
  const [character, setCharacter] = useState<Character>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const {characterUrl} = route.params;
  const gender: Gender = ['n/a', 'unknown', 'none'].includes(
    character?.gender ?? 'unknown',
  )
    ? 'other'
    : (character?.gender.toLocaleLowerCase() as Gender);

  useEffect(() => {
    const abortController = new AbortController();
    const loadCharacter = async () => {
      setIsLoading(true);
      setError(false);
      try {
        const fetchedCharacter = await fetchCharacter(
          characterUrl,
          abortController,
        );
        setCharacter(fetchedCharacter);
      } catch (e) {
        console.error(e);
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    loadCharacter();
  }, [characterUrl]);
  return (
    <AppCard style={styles.container}>
      {character && (
        <View style={styles.headerContainer}>
          <AppText style={styles.headerTitle}>{character.name}</AppText>
          <LikeButton
            accessibilityLabel={`Add to favorites ${character?.name}`}
            gender={gender}
            characterUrl={character.url}
          />
        </View>
      )}
      {error && <AppText>{'Error :('}</AppText>}
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        Object.entries(character ?? {}).map(([key, value]) => {
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
        })
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
