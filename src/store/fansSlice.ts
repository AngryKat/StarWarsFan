import { createSlice } from '@reduxjs/toolkit';
import { type PayloadAction } from '@reduxjs/toolkit';
import { type Gender, type FansState, type RootState } from '@/utils/types';

const initialState: FansState = {
  female: { count: 0, characterUrls: {} },
  male: { count: 0, characterUrls: {} },
  other: { count: 0, characterUrls: {} },
};

export const fansSlice = createSlice({
  name: 'fans',
  initialState,
  reducers: {
    incrementLikes: (
      state,
      action: PayloadAction<{ gender: Gender; characterUrl: string }>,
    ) => {
      const { gender, characterUrl } = action.payload;
      state[gender].count += 1;
      state[gender].characterUrls[characterUrl] = characterUrl;
    },
    decrementLikes: (
      state,
      action: PayloadAction<{ gender: Gender; characterUrl: string }>,
    ) => {
      const { gender, characterUrl } = action.payload;
      state[gender].count -= 1;
      delete state[gender].characterUrls[characterUrl];
    },
    reset: () => initialState,
  },
});

export const { reset, decrementLikes, incrementLikes } = fansSlice.actions;

export const selectFansCount = (gender: Gender) => (state: RootState) =>
  state.fans[gender].count;
export const selectIsCharacterLiked =
  (gender: Gender, characterUrl: string) => (state: RootState) =>
    !!state.fans[gender]?.characterUrls[characterUrl];

export default fansSlice.reducer;
