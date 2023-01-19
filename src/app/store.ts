import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import commentsReducer from '../features/comments/commentsSlice';
import formReducer from '../features/form/formSlice';

const logger = createLogger();

export const store = configureStore({
  reducer: {
    comments: commentsReducer,
    form: formReducer,
  },
  devTools: process.env.REACT_APP_ENV !== 'production',
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
