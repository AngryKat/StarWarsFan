import React, {ComponentProps} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen, DetailsScreen} from '@/screens';
import fonts from '@/config/fonts';
import type {RootStackParamList} from '@/utils/types';
import {ClearButton} from '@/components/ui';
import {StyleSheet} from 'react-native';

const Stack = createNativeStackNavigator<RootStackParamList>();

export function RootStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        contentStyle: styles.contentStyle,
        headerBackTitle: 'Back',
        headerShadowVisible: false,
        headerStyle: styles.headerStyle,
        headerTitleStyle: styles.headerTitleStyle,
      }}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerRight: ClearButton,
          title: 'Fans',
        }}
      />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  contentStyle: {
    paddingHorizontal: 16,
    backgroundColor: 'rgb(246, 245, 243)',
  },
  headerStyle: {
    backgroundColor: 'rgb(246, 245, 243)',
  },
  headerTitleStyle: {
    fontFamily: fonts.Inter.thin,
    fontSize: 32,
  },
});
