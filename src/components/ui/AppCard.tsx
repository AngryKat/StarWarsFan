import React, {ReactNode} from 'react';
import {Platform, StyleProp, StyleSheet, View, ViewStyle} from 'react-native';

type Props = {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
};

export function AppCard({children, style}: Props) {
  return <View style={[styles.container, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    gap: 12,
    padding: 24,
    backgroundColor: 'white',
    marginVertical: 8,
    borderRadius: Platform.OS === 'ios' ? 16 : 0,
    // Shadow for iOS
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowColor: 'black',

    // Elevation for Android
    elevation: 1,
  },
});
