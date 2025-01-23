import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

type Props = {};

export function ProfileScreen({}: Props) {
  return (
    <View style={styles.container}>
      <Text>Hello, ProfileScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rebeccapurple',
  },
});
