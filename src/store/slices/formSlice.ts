import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import CommentType from '../../types/comment';

const INITIAL_FORM = { profile_url: '', author: '', content: '', createdAt: '' };

interface CommonState {
  form: CommentType;
}

const initialState: CommonState = {
  form: INITIAL_FORM,
};

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setForm(state, action: PayloadAction<CommentType>) {
      state.form = action.payload;
    },
    resetForm(state) {
      state.form = INITIAL_FORM;
    },
  },
});

export const { setForm, resetForm } = formSlice.actions;

export default formSlice;
