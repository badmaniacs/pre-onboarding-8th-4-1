import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CommonState {
  patch: boolean;
}

const initialState: CommonState = {
  patch: false,
};

export const patchSlice = createSlice({
  name: 'patch',
  initialState,
  reducers: {
    setPatch(state, action: PayloadAction<boolean>) {
      state.patch = action.payload;
    },
  },
});

export const { setPatch } = patchSlice.actions;

export default patchSlice;
