import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CommonState {
  page: number;
}

const initialState: CommonState = {
  page: 1,
};

export const pageSlice = createSlice({
  name: 'page',
  initialState,
  reducers: {
    setPage(state, action: PayloadAction<number>) {
      state.page = action.payload;
    },
  },
});

export const { setPage } = pageSlice.actions;

export default pageSlice;
