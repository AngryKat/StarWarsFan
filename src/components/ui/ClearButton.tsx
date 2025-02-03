import React from 'react';
import {AppButton} from './AppButton';
import {useDispatch} from 'react-redux';
import {reset} from '../store/fansSlice';

export function ClearButton() {
  const dispatch = useDispatch();
  const handleClearPress = () => {
    dispatch(reset());
  };
  return <AppButton onPress={handleClearPress}>Clear fans</AppButton>;
}
