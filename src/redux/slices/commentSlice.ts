import { createSlice } from "@reduxjs/toolkit";
import { CommentState } from "../../@types/comment";
import CommentService from "../../services/CommentService";

const initialState: CommentState = {
    commentList: [],
    count: 0
};

/**
 * slice 생성 시 액션 타입은 name이 앞에 붙은 형태로 생성됩 ex) comment/setComment
 */
const commentSlice = createSlice({
    name: 'comment',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
        .addCase(CommentService.getCommentList.fulfilled, (state, action) => {
            // after getCommentList.fulfilled
            state.commentList = [...action.payload];
            state.count = action.payload.length;
        })
        .addCase(CommentService.addCommentItem.fulfilled, (state, action) => {
            // after addCommentItem fulfilled 
            state.commentList.push(action.payload);
            state.count += 1;
        })
    },
});

export const commentActions = commentSlice.actions;
export default commentSlice.reducer;