import { createSlice } from '@reduxjs/toolkit';

const formSlice = createSlice({
  name: 'form',
  initialState: {
    payload: {
      id: -1,
      profile_url: 'https://picsum.photos/id/1/50/50',
      author: '',
      content: '',
      createdAt: '2023-01-17',
    },
  },
  reducers: {
    setFormData: (state, action) => {
      return { ...state, ...action };
    },
  },
});

export const { setFormData } = formSlice.actions;

export default formSlice.reducer;
