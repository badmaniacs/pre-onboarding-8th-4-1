import { Comment } from '../types/types';
import { httpClient } from '../utils/httpClient';

export const commentsAPI = {
  get: (url: string) => {
    return httpClient.get(url).then((res) => res.data);
  },
  post: (url: string, comment: Comment) => {
    return httpClient.post(url, comment).then((res) => res.data);
  },
};
