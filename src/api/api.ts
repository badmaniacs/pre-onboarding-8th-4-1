/* Libraries */
import { AxiosResponse } from "axios";
import { CommentItem, CommentListParams } from "../@types/comment";
import configAxios from "./configAxios";

export default {
    getCommentList(params: CommentListParams): Promise<AxiosResponse> {
        return configAxios({
            url: "comments",
            method: "GET",
            params
        });
    },

    postCommentItem(data: CommentItem): Promise<AxiosResponse> {
        return configAxios({
            url: "comments",
            method: "POST",
            data
        })
    }
};
