import axios, {AxiosInstance, AxiosResponse} from 'axios';
import { Comment } from '../types/types';

class CommentApi {
  private client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: 'http://localhost:4000',
    });
  }

  getAllComments(): Promise<AxiosResponse<Comment[]>> {
    return this.client.get<Comment[]>('/comments');
  }

  getComment(commentId: number): Promise<AxiosResponse<Comment>> {
    return this.client.get<Comment>(`/comments/${commentId}`);
  }

  addComment(data: Comment): Promise<AxiosResponse<Comment>> {
    return this.client.post<Comment>('/comments', data);
  }

  updateComment(commentId: number, data: Comment): Promise<AxiosResponse<Comment>> {
    return this.client.put<Comment>(`/comments/${commentId}`, data);
  }

  deleteComment(commentId: number): Promise<AxiosResponse<void>> {
    return this.client.delete<void>(`/comments/${commentId}`);
  }
}
const commentApi = new CommentApi();

export default commentApi;
