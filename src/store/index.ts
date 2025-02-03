import { configureStore } from '@reduxjs/toolkit';
import fansReducer from './fansSlice';

export const store = configureStore({
  reducer: {
    fans: fansReducer,
  },
});
