import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen, ProfileScreen} from './src/screens';
import fonts from './src/config/fonts';
import {AppButton} from './src/components/AppButton';

const Stack = createNativeStackNavigator();

type Props = {};

export function RootStack({}: Props) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerRight: () => <AppButton>Clear fans</AppButton>,
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
          title: 'Fans',
        }}
      />
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
}
