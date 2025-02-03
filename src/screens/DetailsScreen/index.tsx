import React, {Suspense} from 'react';
import {ActivityIndicator, StyleSheet} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {type RootStackParamList} from '../../utils/types';
import {AppCard} from '../../components/ui';
import {CharacterDetails} from './components/CharacterDetails';

type Props = {
  route: RouteProp<RootStackParamList, 'Details'>;
};

export function DetailsScreen({route}: Props) {
  return (
    <AppCard style={styles.container}>
      <Suspense fallback={<ActivityIndicator />}>
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
