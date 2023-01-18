import { createSlice } from '@reduxjs/toolkit';
import { CommentsState } from '../types/types';
import { addComment, deleteComment, getComment, getCommentByPage, updateComment } from './commentActions';

const initialState: CommentsState = {
  comments: [],
  pageComments : [],
  lastId: 0,
  length: 0,
};

const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addComment.fulfilled, (state, action) => {
        state.comments.push(action.payload);
        state.lastId += 1;
      })
      .addCase(getComment.fulfilled, (state, action) => {
        state.comments = action.payload;
        state.lastId = state.comments[state.comments.length - 1].id;
        state.length = state.comments.length;
      })
      .addCase(deleteComment.fulfilled, (state, action) => {
        state.comments = state.comments.filter((comment) => comment.id !== action.payload);
      })
      .addCase(updateComment.fulfilled, (state, action) => {
        state.comments = state.comments.map((comment) => {
          if (comment.id === action.payload.id) {
            return action.payload;
          }
          return comment;
        });
        state.pageComments = state.pageComments.map((comment) => {
            if (comment.id === action.payload.id) {
              return action.payload;
            }
            return comment;
          })
      })
      .addCase(getCommentByPage.fulfilled, (state, action) => {
        state.pageComments = action.payload;
      } );
  },
});

export const commentActions = commentsSlice.actions;

export default commentsSlice;
