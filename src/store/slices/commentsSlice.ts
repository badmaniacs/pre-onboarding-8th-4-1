import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import CommentType from '../../types/comment';

interface CommonState {
  comments: CommentType[];
}

const initialState: CommonState = {
  comments: [],
};

export const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    setComments(state, action: PayloadAction<CommentType[]>) {
      state.comments = action.payload;
    },
    commentAdd(state, action: PayloadAction<CommentType>) {
      const newComments: CommentType[] = [...state.comments, action.payload];
      state.comments = newComments;
    },
    commentDelete(state, action: PayloadAction<number>) {
      const newComments: CommentType[] = [...state.comments].filter((comment) => comment.id !== action.payload);
      state.comments = newComments;
    },
    commentPatch(state, action: PayloadAction<CommentType>) {
      const newComments: CommentType[] = [...state.comments].map((comment) => {
        if (comment.id === action.payload.id) return action.payload;
        return comment;
      });
      state.comments = newComments;
    },
  },
});

export const { setComments, commentAdd, commentDelete, commentPatch } = commentsSlice.actions;

export default commentsSlice;
