import React from 'react';
import {FlatList, StyleProp, StyleSheet, ViewStyle} from 'react-native';

import type {Gender} from '../../types';
import {useCharacters} from '../../api/characters';
import {AppText} from '../../ui';
import {CharacterCard} from './CharacterCard';

type Props = {
  style?: StyleProp<ViewStyle>;
};

export function CharactersList({style}: Props) {
  const {characters, isError, loadMore} = useCharacters();
  if (isError) {
    return <AppText>{'Error :('}</AppText>;
  }

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={characters}
      renderItem={({item}) => {
        const gender: Gender = ['n/a', 'unknown', 'none'].includes(item.gender)
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
      contentContainerStyle={[styles.contentContainer, style]}
      onEndReached={loadMore}
      onEndReachedThreshold={0.5}
      keyExtractor={item => item.name}
    />
  );
}

const styles = StyleSheet.create({
  // add this padding so last item is visible
  contentContainer: {paddingBottom: 170},
});
