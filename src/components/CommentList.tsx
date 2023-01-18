import React from 'react';
import { useAppSelector } from '../hooks/hooks';
import CommentListItem from './CommentListItem';

const CommentList = () => {
  const comments = useAppSelector((state) => state.comments.pageComments);

  return (
    <>
      {comments.map((comment) => (
        <CommentListItem
          key={comment.id}
          id={comment.id}
          createdAt={comment.createdAt}
          author={comment.author}
          profile_url={comment.profile_url}
          content={comment.content}
        />
      ))}
    </>
  );
};

export default CommentList;
