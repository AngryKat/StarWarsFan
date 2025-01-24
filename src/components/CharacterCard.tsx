import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {type NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../types';
import {LikeButton} from './LikeButton';
import {AppText} from './AppText';
import {AppButton} from './AppButton';
import {AppCard} from './AppCard';

type Props = {
  name: string;
  uri: string;
};
type ProfileScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Details'
>;

export function CharacterCard({name, uri}: Props) {
  const navigation = useNavigation<ProfileScreenNavigationProp>();

  const [isLiked, setIsLiked] = useState(false);
  return (
    <AppCard>
      <View style={styles.container}>
        <AppText style={styles.name}>{name}</AppText>
        <LikeButton
          onPress={() => setIsLiked(liked => !liked)}
          isLiked={isLiked}
          accessibilityLabel={`Add ${name} to favorites`}
        />
      </View>
      <AppButton
        accessibilityLabel={`View full information for ${name}`}
        onPress={() =>
          navigation.navigate('Details', {
            characterUrl: uri,
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
  name: {
    fontSize: 16,
  },
});
