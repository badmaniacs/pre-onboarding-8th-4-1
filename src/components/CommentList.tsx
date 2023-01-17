import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import CommentType from '../types/comment';
import { useAppDispatch, useAppSelector } from '../store/store';
import { getCommentsByPagination, deleteComment } from '../api/comment';
import { setPage } from '../store/slices/pageSlice';
import { commentDelete } from '../store/slices/commentsSlice';
import { setForm, patchForm } from '../store/slices/formSlice';

const CommentList = () => {
  const { comments } = useAppSelector((state) => state.comments);
  const [paginationComments, setPaginationComments] = useState<CommentType[]>([]);

  const dispatch = useAppDispatch();
  const { page } = useAppSelector((state) => state.page);

  const getCommentsByPaginationData = async () => {
    try {
      const res = await getCommentsByPagination(page);
      setPaginationComments(res.data);
    } catch (err) {
      alert('댓글 불러오기 실패');
    }
  };

  const handleOnDeleteComment = (id) => {
    try {
      deleteComment(id);
      dispatch(commentDelete(id));
      dispatch(setPage(1));
    } catch (err) {
      alert('댓글 삭제 실패');
    }
  };

  const handleOnPatch = (comment) => {
    dispatch(setForm(comment));
    dispatch(patchForm(true));
  };

  useEffect(() => {
    getCommentsByPaginationData();
  }, [page, comments]);
  return (
    <>
      {paginationComments.map((comment) => (
        <Comment key={comment.id}>
          <img src={comment.profile_url} alt="" />

          {comment.author}

          <CreatedAt>{comment.createdAt}</CreatedAt>

          <Content>{comment.content}</Content>

          <Button>
            <div onClick={() => handleOnPatch(comment)}>수정</div>
            <div onClick={() => handleOnDeleteComment(comment.id)}>삭제</div>
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
