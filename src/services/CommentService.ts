import { createAsyncThunk } from "@reduxjs/toolkit";
import { CommentItem, CommentListParams } from "../@types/comment";
import api from "../api/api";

export default {
    getCommentList: createAsyncThunk(
        "comment/getCommentList",
        async (params: CommentListParams, thunkApi) => {
            try {
                const { data } = await api.getCommentList(params);
                return data;
            } catch (e) {   
                return thunkApi.rejectWithValue({ errorMessage: e });
            }
        }
    ),
    addCommentItem: createAsyncThunk(
        "comment/addCommentItem",
        async (item: CommentItem, thunkApi) => {
            try {
                const { data } = await api.postCommentItem(item);
                return data;
            } catch (e) {
                return thunkApi.rejectWithValue({ errorMessage: e });
            }
        }
    ),
    updateCommentItem: createAsyncThunk(
        "comment/updateCommentList",
        async (params, thunkApi) => {

        }
    ),
    deleteCommentItem: createAsyncThunk(
        "comment/deleteCommentList",
        async (params, thunkApi) => {

        }
    )
}