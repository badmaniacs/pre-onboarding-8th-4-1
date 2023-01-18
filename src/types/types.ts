export interface Comment {
    id: number;
    content: string;
    author: string;
    createdAt: string;
    profile_url: string;
 }

 export interface CommentsState {
    comments: Comment[];
    pageComments : Comment[];
    lastId : number;
    length : number;
  }

  export interface CommentItemProps {
    id: number;
    createdAt : string;
    author: string;
    profile_url: string;
    content: string;
}

export interface PageState {
    page : number;
}