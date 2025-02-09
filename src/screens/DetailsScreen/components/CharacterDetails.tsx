import React from 'react';
import {StyleSheet, View} from 'react-native';
import {AppText, LikeButton} from '@/components/ui';
import {ApiGender, Character, Gender, isDefinedGender} from '@/utils/types';
import {useCharacter} from '@/api/characters';
import {getGenderLabel} from '@/helpers';

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
  'gender',
];

const getDataItemKeyLabel = (key: string) => {
  return key.split('_').join(' ');
};

type Props = {
  characterUrl: string;
};

export function CharacterDetails({characterUrl}: Props) {
  const {character, isError} = useCharacter(characterUrl);
  const gender: Gender = getGenderLabel(character!.gender);

  if (isError) {
    return <AppText>{'Error :('}</AppText>;
  }
  return (
    <>
      <View style={styles.headerContainer}>
        <AppText style={styles.headerTitle}>{character!.name}</AppText>
        <LikeButton
          accessibilityLabel={`Add to favorites ${character!.name}`}
          gender={gender}
          characterUrl={character!.url}
        />
      </View>
      {Object.entries(character!).map(([key, value]) => {
        if (skipFields.includes(key as keyof Character)) {
          return null;
        }
        return (
          <View style={styles.dataItem} key={key}>
            <AppText style={[styles.dataItemKeyText, styles.dataItemText]}>
              {getDataItemKeyLabel(key) + ':'}
            </AppText>
            <AppText style={styles.dataItemText}>{value}</AppText>
          </View>
        );
      })}
      <View style={styles.dataItem} key={'gender'}>
        <AppText style={[styles.dataItemKeyText, styles.dataItemText]}>
          Gender:
        </AppText>
        <AppText style={styles.dataItemText}>{gender}</AppText>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
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
