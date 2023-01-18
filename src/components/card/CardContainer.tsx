import React, { useEffect } from 'react'
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import CommentService from '../../services/CommentService';
import Card from './Card';

const Wrapper = styled.div`
    height: 600px;
    display: flex;
    flex-flow: column nowrap;
    overflow: auto;
`;

const CardContainer = () => {
  const { commentList } = useAppSelector(state => state.comment);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(CommentService.getCommentList({_sort: "id"}));
  }, []);

  return (
    <Wrapper>
      {
        commentList.map((comment) => (
          <Card 
            key={comment.id} 
            profile_url={comment.profile_url} 
            author={comment.author} 
            content={comment.content} 
          />
        ))
      }
    </Wrapper>
  );
}

export default CardContainer;