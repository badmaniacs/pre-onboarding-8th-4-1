import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import commentsReducer from './commentSlice'
import pageReducer from './pageSlice'

const store = configureStore({
    reducer: { comments : commentsReducer.reducer, page : pageReducer.reducer}
    ,middleware: (getDefaultMiddleWare) => getDefaultMiddleWare().concat(logger)
    ,devTools: process.env.REACT_APP_ENV !== 'production',
});

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

export default store;