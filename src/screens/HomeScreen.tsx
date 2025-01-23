import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView, View} from 'react-native';
import {FanCountCard} from '../components/FanCountCard';
import {fetchCharacters} from '../api/characters-api';
import {AppText} from '../components/AppText';

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

export function HomeScreen({}: Props) {
  const [characters, setCharacters] = useState();

  useEffect(() => {
    const getCharacters = async () => {
      const {results} = await fetchCharacters();

      setCharacters(results);
    };
    getCharacters();
  }, []);
  return (
    <SafeAreaView>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          gap: 16,
        }}>
        {cards.map(({title, count}) => (
          <FanCountCard key={title} title={title} count={count} />
        ))}
      </View>
      <View
        style={{
          flex: 1,
        }}>
        <FlatList
          contentContainerStyle={{
            paddingTop: 24,
            paddingHorizontal: 24,
          }}
          data={characters}
          renderItem={({item}) => {
            return (
              <View
                style={{
                  padding: 24,
                }}>
                <AppText>{item.name}</AppText>
              </View>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
}
