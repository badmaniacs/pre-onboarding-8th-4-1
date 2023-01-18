export interface CommentItem {
    id: number;
    profile_url: string;
    author: string;
    content: string;
    createdAt: string;
}

export interface CommentState {
    commentList: CommentItem[];
    count: number;
}

export interface CommentListParams {
    _page?: number;
    _limit?: number;
    _sort?: "id" | "author" | "createdAt";
}