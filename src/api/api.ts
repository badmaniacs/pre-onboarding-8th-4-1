import axios from 'axios';

export const getCommentsApi = async (pageNumber?: number) => {
  if (pageNumber) {
    const commentData = await axios.get(
      `http://localhost:4000/comments?_page=${pageNumber}&_limit=4&_order=desc&_sort=id`
    );
    const result = await commentData.data;
    return result;
  }
  const commentData = await axios.get(`http://localhost:4000/comments`);
  const result = await commentData.data;
  return result;
};

export const getCommentApi = async (commentId?: number) => {
  if (commentId) {
    const commentData = await axios.get(`http://localhost:4000/comments/${commentId}`);
    const result = await commentData.data;
    return result;
  }
};

export const postCommentApi = (profileUrl: string, addAuthor: string, addContent: string, addCreatedAt: string) => {
  try {
    axios.post(`http://localhost:4000/comments`, {
      profile_url: profileUrl,
      author: addAuthor,
      content: addContent,
      createdAt: addCreatedAt,
    });
  } catch (error) {
    console.error(error);
  }
};

export const putCommentApi = (
  commentId: number,
  profileUrl: string,
  addAuthor: string,
  addContent: string,
  addCreatedAt: string
) => {
  try {
    axios.put(`http://localhost:4000/comments/${commentId}`, {
      profile_url: profileUrl,
      author: addAuthor,
      content: addContent,
      createdAt: addCreatedAt,
    });
  } catch (error) {
    console.error(error);
  }
};

export const deleteCommentApi = (commentId: number) => {
  try {
    axios.delete(`http://localhost:4000/comments/${commentId}`);
  } catch (error) {
    console.error(error);
  }
};
