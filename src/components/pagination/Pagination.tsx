import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 50px;
  margin: 0 0 20px 0;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
`;

const PageButton = styled.button`
  width: 30px;
  height: 70%;
  margin: 0 10px;
`

const MoveButton = styled.button`
  width: 30px;
  height: 60%;
  font-size: 10px;
`;

const Pagination = () => {
  return (
    <Wrapper>
      <MoveButton>-</MoveButton>
      <PageButton>1</PageButton>
      <MoveButton>+</MoveButton>
    </Wrapper>
  )
}

export default Pagination;