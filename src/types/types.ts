export type Comment = {
  id?: number;
  profile_url: string;
  author: string;
  content: string;
  createdAt: string;
};

export type CommentUpdate = {
  content: string;
};

export type CommentsResp = Comment[];
