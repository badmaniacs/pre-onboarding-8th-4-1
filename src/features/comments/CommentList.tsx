import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { AppDispatch, RootState } from '../../app/store';
import { deleteComment, getComments, updateComment } from './commentsSlice';

const CommentList = () => {
  const comments = useSelector((state: RootState) => state.comments.value);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getComments());
  }, []);

  const [isEdit, setIsEdit] = useState({ id: -1, mode: false });
  const commentContentRef = useRef(null);

  const handleEdit = (id: number) => {
    dispatch(
      updateComment({
        id,
        comment: { content: commentContentRef.current.value },
      })
    );

    setIsEdit({ id: -1, mode: false });
  };

  const handleDelete = (id: number) => {
    dispatch(deleteComment({ id }));
  };

  return (
    <>
      {comments.map((comment) => (
        <Comment key={comment.id}>
          <img src={comment.profile_url} alt="" />

          {comment.author}

          <CreatedAt>{comment.createdAt}</CreatedAt>
          {isEdit.mode && isEdit.id === comment.id ? (
            <textarea defaultValue={comment.content} ref={commentContentRef} />
          ) : (
            <Content>{comment.content}</Content>
          )}

          <ButtonWrapper>
            {isEdit.mode && isEdit.id === comment.id ? (
              <Button onClick={() => handleEdit(comment.id)}>저장</Button>
            ) : (
              <Button onClick={() => setIsEdit({ id: comment.id, mode: true })}>수정</Button>
            )}

            <Button onClick={() => handleDelete(comment.id)}>삭제</Button>
          </ButtonWrapper>

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

  > textarea {
    width: 100%;
    height: 50px;
    margin-top: 10px;
    padding: 5px;
  }
`;

const CreatedAt = styled.div`
  float: right;
  vertical-align: middle;
`;

const Content = styled.div`
  margin: 10px 0;
`;

const ButtonWrapper = styled.div`
  text-align: right;
  margin: 10px 0;
`;

const Button = styled.button`
  margin-right: 10px;
  padding: 0.375rem 0.75rem;
  border-radius: 0.25rem;
  border: 1px solid lightgray;
  cursor: pointer;
  :hover {
    background-color: #bcbcbc;
    transition: all linear 0.1s;
  }
`;
