import React from 'react';
import {
  FlatList,
  ListRenderItemInfo,
  StyleProp,
  StyleSheet,
  ViewStyle,
} from 'react-native';

import {
  ApiGender,
  Character,
  isDefinedGender,
  type Gender,
} from '@/utils/types';
import {useCharacters} from '@/api/characters';
import {AppText} from '@/components/ui';
import {CharacterCard} from './CharacterCard';
import {getGenderLabel} from '@/helpers';

const renderItem = ({item}: ListRenderItemInfo<Character>) => {
  const gender: Gender = getGenderLabel(item.gender);
  return (
    <CharacterCard
      key={item.url}
      name={item.name}
      url={item.url}
      gender={gender}
    />
  );
};

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
      contentContainerStyle={[styles.contentContainer, style]}
      data={characters}
      keyExtractor={item => item.name}
      onEndReached={loadMore}
      onEndReachedThreshold={0.5}
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}
    />
  );
}

const styles = StyleSheet.create({
  // add this padding so last item is visible
  contentContainer: {paddingBottom: 170},
});
