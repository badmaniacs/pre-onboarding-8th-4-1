import React from 'react'
import styled from 'styled-components';
import { useAppSelector } from '../../redux/store';
import Card from './Card';

const Wrapper = styled.div`
    height: 600px;
    display: flex;
    flex-flow: column nowrap;
    overflow: auto;
`;

const CardContainer = () => {
  const { commentList } = useAppSelector(state => state.comment);

  return (
    <Wrapper>
      {
        commentList.map((comment) => (
          <Card key={comment.id} />
        ))
      }
    </Wrapper>
  );
}

export default CardContainer;