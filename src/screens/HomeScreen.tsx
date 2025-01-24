import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Platform,
  StyleSheet,
  View,
} from 'react-native';
import {FanCountCard} from '../components/FanCountCard';
import {fetchCharacters} from '../api/characters-api';
import {AppText} from '../components/AppText';
import {SafeAreaView} from 'react-native-safe-area-context';
import {CharacterCard} from '../components/CharacterCard';

type Props = {};

const cards = [
  {
    title: 'Female Fans',
    count: 0,
  },
  {
    title: 'Male Fans',
    count: 0,
  },
  {
    title: 'Other Fans',
    count: 0,
  },
];

type Character = {
  name: string;
  birth_year: string;
  eye_color: string | 'unknown' | 'n/a';
  gender: 'Male' | 'Female' | 'unknown' | 'n/a';
  hair_color: string;
  height: string;
  mass: string;
  skin_color: string;
  homeworld: string;
  films: string[];
  species: string[];
  starships: string[];
  vehicles: string[];
  url: string;
  created: string;
  edited: string;
};

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
        {cards.map(({title, count}) => (
          <FanCountCard key={title} title={title} count={count} />
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
          renderItem={({item}) => (
            <CharacterCard key={item.url} name={item.name} uri={item.url} />
          )}
          onEndReached={handleEndReached}
          onEndReachedThreshold={0.5}
          keyExtractor={item => item.name}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 16,
    paddingVertical: 16,
    paddingHorizontal: 24,
  },
  flatList: {
    flex: 1, // This makes sure FlatList fills available space and scrolls
  },
  flatListContent: {
    paddingTop: 24,
    paddingHorizontal: 24,
  },
  listItem: {
    padding: 24,
    backgroundColor: 'white',
    marginVertical: 8,
  },
  roundedBorder: {
    borderRadius: 16,
  },
});
