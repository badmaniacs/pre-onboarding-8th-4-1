import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { commentsAPI } from '../../api/commentsAPI';
import { Comment, CommentUpdate } from '../../types/types';

export const getComments = createAsyncThunk('GET_COMMENTS', async ({ url }: { url: string }) => {
  const response = await commentsAPI.get(url);
  return { comments: response.data, totalCount: response.headers['x-total-count'] };
});

export const postComment = createAsyncThunk('POST_COMMENT', async ({ comment }: { comment: Comment }) => {
  const response = await commentsAPI.post('/comments', comment);
  return response.data;
});

export const updateComment = createAsyncThunk(
  'UPDATE_COMMENT',
  async ({ id, comment }: { id: number; comment: CommentUpdate }) => {
    const response = await commentsAPI.update(`/comments/${id}`, comment);
    return response.data;
  }
);

export const deleteComment = createAsyncThunk('DELETE_COMMENT', async ({ id }: { id: number }) => {
  const response = await commentsAPI.delete(`/comments/${id}`);
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

    // postComments
    builder.addCase(postComment.fulfilled, (state, action) => {
      state.value.push(action.payload);
      state.status = 'complete';
    });

    // updateComments
    builder.addCase(updateComment.fulfilled, (state, action) => {
      state.value = state.value.map((comment) => {
        return comment.id === action.payload.id ? { ...comment, content: action.payload.content } : comment;
      });
      state.status = 'complete';
    });

    // deleteComments
    builder.addCase(deleteComment.fulfilled, (state, action) => {
      const deletedId = action.meta.arg.id;
      state.value = state.value.filter((comment) => comment.id !== deletedId);
      state.status = 'complete';
    });
  },
});

export default commentsSlice.reducer;
