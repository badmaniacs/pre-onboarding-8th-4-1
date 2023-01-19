import { createSlice } from '@reduxjs/toolkit';

const INIT_STATE = {
  payload: {
    id: -1,
    profile_url: 'https://picsum.photos/id/1/50/50',
    author: '',
    content: '',
    createdAt: '2023-01-17',
  },
};

const formSlice = createSlice({
  name: 'form',
  initialState: INIT_STATE,
  reducers: {
    setFormData: (state, action) => {
      return { ...state, ...action };
    },
    resetForm: () => INIT_STATE,
  },
});

export const { setFormData, resetForm } = formSlice.actions;

export default formSlice.reducer;
