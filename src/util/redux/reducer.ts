import { GET_COMMENT, ADD_COMMENT, EDIT_COMMENT, DELETE_COMMENT, PAGE_MOVE, EDIT_ACTIVE } from './action';

const initialState = {
  comments: null,
};

export const comments = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_COMMENT:
      return {
        ...state,
      };
    case ADD_COMMENT:
      if (state.comments === null) {
        return { ...state, comments: payload };
      }
      return {
        ...state,
        comments: state.comments.concat(payload[0]),
      };
    case PAGE_MOVE:
      return { ...state, comments: payload };
    case EDIT_COMMENT:
      return {
        ...state,
        comments: state.comments.map((content, index) =>
          content.id === payload.id
            ? {
                ...content,
                commentProfile: payload.commentProfile,
                commentAuthor: payload.commentAuthor,
                commentContent: payload.commentContent,
                commentCreatedAt: payload.commentCreatedAt,
              }
            : content
        ),
      };
    case DELETE_COMMENT:
      return {
        ...state,
        comments: state.comments.filter((comment) => comment.id !== payload),
      };
    default:
      return state;
  }
};

export const editComment = (state = { isActive: false, targetId: null }, { type, isActive, targetId }) => {
  switch (type) {
    case EDIT_ACTIVE:
      return { isActive, targetId };
    default:
      return state;
  }
};
