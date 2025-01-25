import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen, DetailsScreen} from './src/screens';
import fonts from './src/config/fonts';
import type {RootStackParamList} from './src/types';
import {ClearButton} from './src/ui';

const Stack = createNativeStackNavigator<RootStackParamList>();

export function RootStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitle: 'Back',
        headerTitleStyle: {
          fontFamily: fonts.Inter.thin,
          fontSize: 32,
        },
        headerStyle: {
          backgroundColor: 'rgb(246, 245, 243)',
        },
        headerShadowVisible: false,
        contentStyle: {
          paddingHorizontal: 16,
          backgroundColor: 'rgb(246, 245, 243)',
        },
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
