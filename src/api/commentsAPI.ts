import { Comment, CommentUpdate } from '../types/types';
import { httpClient } from '../utils/httpClient';

export const commentsAPI = {
  get: (url: string) => {
    return httpClient.get(url).then((res) => res.data);
  },
  post: (url: string, comment: Comment) => {
    return httpClient.post(url, comment).then((res) => res.data);
  },
  update: (url: string, comment: CommentUpdate) => {
    return httpClient.patch(url, comment).then((res) => res.data);
  },
  delete: (url: string) => {
    return httpClient.delete(url).then((res) => res.data);
  },
};
