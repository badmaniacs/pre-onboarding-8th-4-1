export const GET_COMMENT = 'comment/GET_COMMENT';
export const ADD_COMMENT = 'comment/ADD_COMMENT';
export const EDIT_COMMENT = 'comment/EDIT_COMMENT';
export const DELETE_COMMENT = 'comment/DELETE_COMMENT';
export const PAGE_MOVE = 'comment/PAGE_MOVE';
export const EDIT_ACTIVE = 'editComment/EDIT_ACTIVE';

export const editActive = (isActive: boolean, targetId: number) => ({
  type: EDIT_ACTIVE,
  isActive,
  targetId,
});

export const getComment = () => ({
  type: GET_COMMENT,
});

export const addComment = (data) => ({
  type: ADD_COMMENT,
  payload: data,
});

export const pageMove = (pageNumber) => ({
  type: PAGE_MOVE,
  payload: pageNumber,
});

export const editComment = (data) => ({
  type: EDIT_COMMENT,
  payload: data,
});

export const deleteComment = (commentId: number) => ({
  type: DELETE_COMMENT,
  payload: commentId,
});
