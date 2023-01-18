import { configureStore } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import { TypedUseSelectorHook , useSelector , useDispatch } from 'react-redux';
import commentSlice from "../slices/commentSlice";

const logger = createLogger();


// default로 redux-thunk 와 DevTools 제공.
export const store = configureStore({
    reducer: {
        comment: commentSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    devTools: process.env.NODE_ENV !== "production"
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;