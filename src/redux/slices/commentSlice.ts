import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CommentItem {
    id: number;
    profile_url: string;
    author: string;
    content: string;
    createAt: string;
};

export interface CommentState {
    commentList: CommentItem[]
}

const initialState: CommentState = {
    commentList: []
};

/**
 * slice 생성 시 액션 타입은 name이 앞에 붙은 형태로 생성됩 ex) comment/setComment
 */
export const commentSlice = createSlice({
    name: 'comment',
    initialState,
    reducers: {
        addComment(state, action: PayloadAction<CommentItem[]>) {
            state.commentList = action.payload;
        }
    }
});