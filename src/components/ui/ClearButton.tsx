import React from 'react';
import {useDispatch} from 'react-redux';
import {reset} from '@/store/fansSlice';
import {AppButton} from './AppButton';

export function ClearButton() {
  const dispatch = useDispatch();
  const handleClearPress = () => {
    dispatch(reset());
  };
  return <AppButton onPress={handleClearPress}>Clear fans</AppButton>;
}
