import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CommentItem, CommentState } from "../../@types/comment";
import CommentService from "../../services/CommentService";

const initialState: CommentState = {
    commentList: [],
    loading: false,
    count: -1
};

/**
 * slice 생성 시 액션 타입은 name이 앞에 붙은 형태로 생성됩 ex) comment/setComment
 */
const commentSlice = createSlice({
    name: 'comment',
    initialState,
    reducers: {
        addComment(state, action: PayloadAction<CommentItem>) {
            state.count += 1;
            state.loading = false;
            state.commentList.push(action.payload);
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(CommentService.getCommentList.pending, (state) => {
            state.loading = true;
        })
        .addCase(CommentService.getCommentList.fulfilled, (state, action) => {
            state.commentList = [...action.payload];
            state.count = action.payload.length;
            state.loading = false;
        })
        .addCase(CommentService.getCommentList.rejected, (state) => {
            state.loading = false;
        })
        .addCase(CommentService.addCommentItem.pending, (state) => {
            state.loading = true;
        })
        .addCase(CommentService.addCommentItem.fulfilled, (state, action) => {
            state.loading = false;
            state.commentList.push(action.payload);
            state.count += 1;
        })
        .addCase(CommentService.addCommentItem.rejected, (state) => {
            state.loading = false;
        })
    },
});

export const commentActions = commentSlice.actions;
export default commentSlice.reducer;