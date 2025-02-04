import React, {Suspense} from 'react';
import {StyleSheet} from 'react-native';
import {type RootStackParamList} from '@/utils/types';
import {AppCard} from '@/components/ui';
import {CharacterDetails} from './components/CharacterDetails';
import {CharacterDetailsSkeleton} from './components/CharacterDetailsSkeleton';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<RootStackParamList, 'Details'>;

export function DetailsScreen({route}: Props) {
  return (
    <AppCard style={styles.container}>
      <Suspense fallback={<CharacterDetailsSkeleton />}>
        <CharacterDetails characterUrl={route.params.characterUrl} />
      </Suspense>
    </AppCard>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 8,
  },
});
