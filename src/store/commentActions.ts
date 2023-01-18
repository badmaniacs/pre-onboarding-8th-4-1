import {createAsyncThunk} from '@reduxjs/toolkit'
import commentApi from '../util/useHttp';
import { Comment } from '../types/types';


export const getComment = createAsyncThunk("GET_COMMENT", async () => {
    const response = await commentApi.getAllComments();
    return response.data;
})

export const getCommentByPage = createAsyncThunk("GET_COMMNET_PAGE", async (page:number) => {
    const respose = await commentApi.getComments(page);
    return respose.data
})

export const addComment = createAsyncThunk("ADD_COMMENT", async (comment: Comment) => {
    const response = await commentApi.addComment(comment);
    return response.data
})

export const deleteComment = createAsyncThunk("DEL_COMMENT", async (id: number) => {
    await commentApi.deleteComment(id);
    return id
})

export const updateComment = createAsyncThunk("UPDATE_COMMENT", async (comment: Comment) => {
    const response = await commentApi.updateComment(comment.id, comment);
    return response.data
})