import React from 'react';
import {useDispatch} from 'react-redux';
import {AppButton} from './AppButton';
import {reset} from '../../store/fansSlice';

export function ClearButton() {
  const dispatch = useDispatch();
  const handleClearPress = () => {
    dispatch(reset());
  };
  return <AppButton onPress={handleClearPress}>Clear fans</AppButton>;
}
