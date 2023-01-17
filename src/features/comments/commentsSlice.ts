import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { commentsAPI } from '../../api/commentsAPI';
import { Comment } from '../../types/types';

export const getComments = createAsyncThunk('GET_COMMENTS', async () => {
  const response = await commentsAPI.get('/comments');
  return response;
});

export const postComment = createAsyncThunk('POST_COMMENT', async (payload: Comment) => {
  const response = await commentsAPI.post('/comments', payload);
  return response;
});

const commentsSlice = createSlice({
  name: 'comments',
  initialState: {
    value: [],
    status: 'welcome',
  },
  reducers: {},
  extraReducers(builder) {
    // getComments
    builder.addCase(getComments.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(getComments.fulfilled, (state, action) => {
      state.value = action.payload;
      state.status = 'complete';
    });
    builder.addCase(getComments.rejected, (state) => {
      state.status = 'fail';
    });

    // postComments
    builder.addCase(postComment.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(postComment.fulfilled, (state, action) => {
      state.value = [...state.value, action.payload];
      state.status = 'complete';
    });
    builder.addCase(postComment.rejected, (state) => {
      state.status = 'fail';
    });
  },
});

export default commentsSlice.reducer;
