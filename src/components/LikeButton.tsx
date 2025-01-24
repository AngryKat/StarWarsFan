import React from 'react';
import {Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

type Props = {
  accessibilityLabel: string;
  isLiked: boolean;
  onPress: () => void;
};

export function LikeButton({accessibilityLabel, isLiked, onPress}: Props) {
  return (
    <Pressable
      accessibilityLabel={accessibilityLabel}
      accessibilityRole="button"
      onPress={onPress}>
      <Icon
        name={isLiked ? 'heart' : 'heart-outline'}
        size={30}
        color="rgba(255, 42, 36, 0.78)"
      />
    </Pressable>
  );
}
