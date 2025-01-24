import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen, DetailsScreen} from './src/screens';
import fonts from './src/config/fonts';
import {AppButton} from './src/components/AppButton';
import {RootStackParamList} from './src/types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export function RootStack() {
  const renderHeaderRight = () => <AppButton>Clear fans</AppButton>;
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
          headerRight: renderHeaderRight,
          title: 'Fans',
        }}
      />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
}
