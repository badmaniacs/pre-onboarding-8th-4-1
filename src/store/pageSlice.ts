import { createSlice } from '@reduxjs/toolkit';
import { PageState } from '../types/types';

const initialState: PageState = {
  page: 1,
};

const pageSlice = createSlice({
    name : 'page',
    initialState,
    reducers : {
        replacePage(state,action) {
            state.page = action.payload
        }
    },
})

export const pageActions = pageSlice.actions;

export default pageSlice;