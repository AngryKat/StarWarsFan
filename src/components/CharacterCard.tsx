import React from 'react';
import {StyleSheet, View} from 'react-native';
import type {Gender} from '../types';
import {LikeButton} from './LikeButton';
import {AppText} from './AppText';
import {AppButton} from './AppButton';
import {AppCard} from './AppCard';
import {useTypedNavigation} from '../hooks';

type Props = {
  name: string;
  url: string;
  gender: Gender;
};

export function CharacterCard({name, gender, url}: Props) {
  const navigation = useTypedNavigation<'Details'>();
  return (
    <AppCard>
      <View style={styles.container}>
        <View>
          <AppText style={styles.title}>{name}</AppText>
          <AppText style={styles.subtitle}>{gender}</AppText>
        </View>
        <LikeButton
          accessibilityLabel={`Add ${name} to favorites`}
          gender={gender}
          characterUrl={url}
        />
      </View>
      <AppButton
        accessibilityLabel={`View full information for ${name}`}
        onPress={() =>
          navigation.navigate('Details', {
            characterUrl: url,
          })
        }>
        View
      </AppButton>
    </AppCard>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 18,
  },
  subtitle: {
    fontSize: 16,
    color: '#989898',
  },
});
