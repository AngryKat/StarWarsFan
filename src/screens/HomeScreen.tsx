import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, StyleSheet, View} from 'react-native';
import {FanCountCard} from '../components/FanCountCard';
import {fetchCharacters} from '../api/characters-api';
import {AppText} from '../components/AppText';
import {SafeAreaView} from 'react-native-safe-area-context';
import {CharacterCard} from '../components/CharacterCard';
import {Character, Gender} from '../types';

type Props = {};

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

const itemHeight = 130;
const itemMargin = 8;

export function HomeScreen({}: Props) {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false); // Loading state
  const [error, setError] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1); // For pagination
  useEffect(() => {
    const abortController = new AbortController();
    const loadCharacters = async () => {
      setIsLoading(true);
      setError(false);
      try {
        const fetchedCharacters = await fetchCharacters(1, abortController);
        setCharacters(fetchedCharacters.results);
      } catch (e) {
        console.error(e);
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    loadCharacters();
    return () => {
      abortController.abort();
    };
  }, []);

  const handleEndReached = async () => {
    setError(false);

    try {
      const fetchedCharacters = await fetchCharacters(page + 1);
      setCharacters(prev => [...prev, ...fetchedCharacters.results]);
      setPage(prev => prev + 1);
    } catch (e) {
      console.error('Failed fetching ', e);
      console.error(e);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.cardRow}>
        {cards.map(({title, gender}) => (
          <FanCountCard key={title} title={title} gender={gender} />
        ))}
      </View>
      {error && <AppText>{'Error :('}</AppText>}
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          showsVerticalScrollIndicator={false}
          style={styles.flatList}
          data={characters}
          renderItem={({item}) => {
            const gender: Gender = ['n/a', 'unknown', 'none'].includes(
              item.gender,
            )
              ? 'other'
              : (item.gender.toLocaleLowerCase() as Gender);
            return (
              <CharacterCard
                key={item.url}
                name={item.name}
                url={item.url}
                gender={gender}
              />
            );
          }}
          onEndReached={handleEndReached}
          onEndReachedThreshold={0.5}
          keyExtractor={item => item.name}
          snapToInterval={itemHeight + itemMargin * 2}
          snapToAlignment="start"
          decelerationRate="fast"
        />
      )}
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
  flatList: {
    paddingHorizontal: 24,
    flex: 1, // This makes sure FlatList fills available space and scrolls
  },
  flatListContent: {
    paddingTop: 24,
    paddingHorizontal: 24,
  },
  listItem: {
    padding: 24,
    backgroundColor: 'white',
    marginVertical: itemMargin,
  },
  roundedBorder: {
    borderRadius: 16,
  },
});
