import axios from 'axios';
import CommentType from '../types/comment';

const url = process.env.REACT_APP_SERVER_URL;

export const getComments = () => axios.get(`${url}/comments`);

export const getCommentsByPagination = (page: number, limit = 4) =>
  axios.get(`${url}/comments?_page=${page}&_limit=${limit}&_order=desc`);

export const getComment = (id: number) => axios.get(`${url}/comments/${id}`);

export const postComment = (comment: CommentType) => axios.post(`${url}/comments`, comment);

export const patchComment = (comment: CommentType) => axios.put(`${url}/comments/${comment.id}`, comment);

export const deleteComment = (id: number) => axios.delete(`${url}/comments/${id}`);
