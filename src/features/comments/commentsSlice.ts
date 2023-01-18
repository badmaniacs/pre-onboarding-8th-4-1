import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { commentsAPI } from '../../api/commentsAPI';
import { Comment, CommentUpdate } from '../../types/types';

export const getComments = createAsyncThunk('GET_COMMENTS', async () => {
  const response = await commentsAPI.get('/comments');
  return response;
});

export const postComment = createAsyncThunk('POST_COMMENT', async ({ comment }: { comment: Comment }) => {
  const response = await commentsAPI.post('/comments', comment);
  return response;
});

export const updateComment = createAsyncThunk(
  'UPDATE_COMMENT',
  async ({ id, comment }: { id: number; comment: CommentUpdate }) => {
    const response = await commentsAPI.update(`/comments/${id}`, comment);
    return response;
  }
);

export const deleteComment = createAsyncThunk('DELETE_COMMENT', async ({ id }: { id: number }) => {
  const response = await commentsAPI.delete(`/comments/${id}`);
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
      state.value.push(action.payload);
      state.status = 'complete';
    });
    builder.addCase(postComment.rejected, (state) => {
      state.status = 'fail';
    });

    // updateComments
    builder.addCase(updateComment.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(updateComment.fulfilled, (state, action) => {
      state.value = state.value.map((comment) => {
        return comment.id === action.payload.id ? { ...comment, content: action.payload.content } : comment;
      });
      state.status = 'complete';
    });
    builder.addCase(updateComment.rejected, (state) => {
      state.status = 'fail';
    });

    // deleteComments
    builder.addCase(deleteComment.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(deleteComment.fulfilled, (state, action) => {
      const deletedId = action.meta.arg.id;
      state.value = state.value.filter((comment) => comment.id !== deletedId);
      state.status = 'complete';
    });
    builder.addCase(deleteComment.rejected, (state) => {
      state.status = 'fail';
    });
  },
});

export default commentsSlice.reducer;
