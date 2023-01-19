export interface CommentItem {
  id: number;
  profile_url: string;
  author: string;
  content: string;
  createdAt: string;
}

export type CommentList = {
  commentList: Array<CommentItem>;
};
