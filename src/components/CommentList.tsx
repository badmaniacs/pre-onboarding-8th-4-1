import styled from 'styled-components';
import { useLayoutEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCommentsApi, deleteCommentApi } from '../api/api';
import { getComment, addComment, editComment, deleteComment, editActive } from '../util/redux/action';

const CommentList = () => {
  const dispatch = useDispatch();
  const selectorComment = useSelector((state: any) => state.comments);
  const selectorEdit = useSelector((state: any) => state.editComment);

  useLayoutEffect(() => {
    const handleGetComment = async () => {
      const getComments = await getCommentsApi(1);
      dispatch(addComment(getComments));
    };

    if (selectorComment.comments === null) {
      handleGetComment();
    }
  }, []);

  const handleDelete = async (event) => {
    const targetId = parseInt(event.target.parentNode.parentNode.dataset.key, 10);
    await deleteCommentApi(targetId);
    dispatch(deleteComment(targetId));
  };

  const handleEdit = (event) => {
    const targetId = parseInt(event.target.parentNode.parentNode.dataset.key, 10);
    dispatch(editActive(true, targetId));
    console.log(selectorEdit);
  };

  return (
    <>
      {selectorComment.comments &&
        selectorComment.comments.map((comment) => (
          <Comment className="comment" data-key={comment.id} key={comment.id}>
            <img src={comment.profile_url} alt="" />
            {comment.author}
            <CreatedAt>{comment.createdAt}</CreatedAt>
            <Content>{comment.content}</Content>
            <Button>
              <button type="button" onClick={handleEdit}>
                수정
              </button>
              <button type="button" onClick={handleDelete}>
                삭제
              </button>
            </Button>
            <hr />
          </Comment>
        ))}
    </>
  );
};

export default CommentList;

const Comment = styled.div`
  padding: 7px 10px;
  text-align: left;

  & > img {
    vertical-align: middle;
    margin-right: 10px;
    border-radius: 50%;
    width: 50px;
    height: 50px;
  }
`;

const CreatedAt = styled.div`
  float: right;
  vertical-align: middle;
`;

const Content = styled.div`
  margin: 10px 0;
`;

const Button = styled.div`
  text-align: right;
  margin: 10px 0;
  & > a {
    margin-right: 10px;
    padding: 0.375rem 0.75rem;
    border-radius: 0.25rem;
    border: 1px solid lightgray;
    cursor: pointer;
  }
`;
