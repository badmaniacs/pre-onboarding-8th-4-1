import { Comment, CommentUpdate } from '../types/types';
import { httpClient } from '../utils/httpClient';

export const commentsAPI = {
  get: (url: string) => {
    return httpClient.get(url);
  },
  post: (url: string, comment: Comment) => {
    return httpClient.post(url, comment);
  },
  update: (url: string, comment: CommentUpdate) => {
    return httpClient.patch(url, comment);
  },
  delete: (url: string) => {
    return httpClient.delete(url);
  },
};
