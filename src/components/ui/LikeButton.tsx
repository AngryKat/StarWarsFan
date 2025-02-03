import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch, useSelector} from 'react-redux';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import {Pressable} from 'react-native';

import {
  decrementLikes,
  incrementLikes,
  selectIsCharacterLiked,
} from '@/store/fansSlice';
import {type Gender} from '@/utils/types';

type Props = {
  accessibilityLabel: string;
  gender: Gender;
  characterUrl: string;
};

export function LikeButton({accessibilityLabel, characterUrl, gender}: Props) {
  const scale = useSharedValue(1);
  const isLiked = useSelector(selectIsCharacterLiked(gender, characterUrl));
  const dispatch = useDispatch();
  const handleLikePress = () => {
    if (isLiked) {
      dispatch(decrementLikes({gender, characterUrl}));
    } else {
      dispatch(incrementLikes({gender, characterUrl}));
    }
  };

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{scale: scale.value}],
  }));

  return (
    <Pressable
      accessibilityLabel={accessibilityLabel}
      accessibilityRole="button"
      onPress={handleLikePress}
      style={animatedStyle}
      onPressIn={() => {
        scale.value = withSpring(1.2);
      }}
      onPressOut={() => {
        scale.value = withSpring(1);
      }}>
      <Animated.View style={animatedStyle}>
        <Icon
          name={isLiked ? 'heart' : 'heart-outline'}
          size={30}
          color="rgba(255, 42, 36, 0.78)"
        />
      </Animated.View>
    </Pressable>
  );
}
