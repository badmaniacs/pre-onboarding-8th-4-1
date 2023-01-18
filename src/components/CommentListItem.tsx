import React, { useState } from 'react';
import styled from 'styled-components';
import { useAppDispatch } from '../hooks/hooks';
import { deleteComment, updateComment } from '../store/commentActions';
import { CommentItemProps } from '../types/types';
import { pageActions } from '../store/pageSlice';


const CommentListItem = ({ id, profile_url, author, content, createdAt }: CommentItemProps) => {
  const dispatch = useAppDispatch();
  const [updateMode, setIsUpdateMode] = useState(false);
  const [input, setInput] = useState(content);

  const handleDelete = () => {
    dispatch(deleteComment(id));
    dispatch(pageActions.replacePage(1));
  };

  const updateModeHandler = () => {
    setIsUpdateMode(!updateMode);
  };

  const updateHandler = () => {
    const comment = {
      id,
      profile_url,
      author,
      createdAt,
      content: input,
    };
    dispatch(updateComment(comment));
    setIsUpdateMode(!updateMode);
  };

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <CommentWrap>
      <img src={profile_url} alt="" />
      {author}
      <CreatedAt>{createdAt}</CreatedAt>
      {!updateMode && <Content>{content}</Content>}
      {updateMode && <Textarea name="content" value={input} required onChange={onChangeHandler} />}
      <Button>
        {!updateMode && <i onClick={updateModeHandler}>수정</i>}
        {!updateMode && <i onClick={handleDelete}>삭제</i>}
        {updateMode && <i onClick={updateModeHandler}>취소</i>}
        {updateMode && <i onClick={updateHandler}>제출</i>}
      </Button>
      <hr />
    </CommentWrap>
  );
};

const CommentWrap = styled.div`
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

const Textarea = styled.input`
  position: relative;
  margin: 10px 0;
  width: 70%;
  height: auto;
  top: 50px;
  right: 100px;
`;

const Button = styled.div`
  text-align: right;
  margin: 10px 0;
  & > i {
    margin-right: 10px;
    padding: 0.375rem 0.75rem;
    border-radius: 0.25rem;
    border: 1px solid lightgray;
    cursor: pointer;
  }
`;

export default CommentListItem;
