import { configureStore } from '@reduxjs/toolkit';
import commentsReducer from '../features/comments/commentsSlice';

export const store = configureStore({
  reducer: {
    comments: commentsReducer,
  },
  devTools: process.env.REACT_APP_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
