import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { commentsAPI } from '../../api/commentsAPI';

export const getComments = createAsyncThunk('GET_COMMENTS', async ({ url }: { url: string }) => {
  const response = await commentsAPI.get(url);
  return { comments: response.data, totalCount: response.headers['x-total-count'] };
});

export const updateComment = createAsyncThunk('UPDATE_COMMENT', async <T>({ id, comment }) => {
  const response = await commentsAPI.update(`/comments/${id}`, comment);
  return response.data;
});

const commentsSlice = createSlice({
  name: 'comments',
  initialState: {
    value: [],
    status: 'welcome',
    totalCounts: 0,
  },
  reducers: {},
  extraReducers(builder) {
    // getComments
    builder.addCase(getComments.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(getComments.fulfilled, (state, action) => {
      state.value = action.payload.comments;
      state.totalCounts = +action.payload.totalCount;
      state.status = 'complete';
    });
    builder.addCase(getComments.rejected, (state) => {
      state.status = 'fail';
    });

    // updateComments
    builder.addCase(updateComment.fulfilled, (state, action) => {
      state.value = state.value.map((comment) => {
        return comment.id === action.payload.id ? { ...comment, content: action.payload.content } : comment;
      });
      state.status = 'complete';
    });
  },
});

export default commentsSlice.reducer;
