import React, {useState} from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import {LikeButton} from './LikeButton';
import {AppText} from './AppText';
import {AppButton} from './AppButton';
import {useNavigation} from '@react-navigation/native';
import {type NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../types';

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
    <View style={styles.wrapper}>
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
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    gap: 12,
    padding: 24,
    backgroundColor: 'white',
    marginVertical: 8,
    borderRadius: Platform.OS === 'ios' ? 16 : 0,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  name: {
    fontSize: 16,
  },
});
