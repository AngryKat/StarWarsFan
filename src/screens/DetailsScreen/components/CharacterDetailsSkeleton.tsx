import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

export function CharacterDetailsSkeleton() {
  const loaderWidth = useSharedValue(0); // For title animation
  const titleLoaderWidth = useSharedValue(0); // For title animation

  const loaderStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: loaderWidth.value}],
    };
  });
  const titleLoaderStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: titleLoaderWidth.value}],
    };
  });

  useEffect(() => {
    loaderWidth.value = withRepeat(withTiming(200, {duration: 1000}), -1);
    titleLoaderWidth.value = withRepeat(
      withTiming(100, {
        duration: 1000,
        easing: Easing.bezier(0.25, -0.5, 0.25, 1),
      }),
      -1,
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <View style={styles.headerContainer}>
        <View style={styles.headerTitle}>
          <Animated.View style={[loaderStyle, styles.loader]} />
        </View>
        <Icon
          name={'heart-outline'}
          size={30}
          color="rgba(255, 42, 36, 0.78)"
        />
      </View>
      {[...new Array(7).keys()].map(index => {
        return (
          <View style={styles.dataItem} key={index}>
            <Animated.View style={[loaderStyle, styles.loader]} />
          </View>
        );
      })}
    </>
  );
}

const styles = StyleSheet.create({
  dataItem: {
    backgroundColor: '#f0f0f0',
    height: 14,
    width: 200,
    overflow: 'hidden',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    position: 'relative',
    backgroundColor: '#f0f0f0',
    height: 18,
    width: 100,
    overflow: 'hidden',
  },
  loader: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    width: 64,
    backgroundColor: '#ffffff50',
  },
});
