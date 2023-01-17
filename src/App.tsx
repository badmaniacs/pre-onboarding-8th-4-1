import React from 'react';
import styled from 'styled-components';
import CardContainer from './components/card/CardContainer';
import FormContainer from './components/form/FormContainer';
import Pagination from './components/pagination/Pagination';

const Wrapper = styled.div`
  min-width: 720px;
  height: 100vh;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;

const MainWrap = styled.div`
  width: 720px;
  height: auto;
  border: 3px dotted #189bfa;
  border-radius: 15px;
  box-shadow: 1px 2px 1px 1px rgba(0, 0, 0, 0.5);
  padding: 20px 10px;
`;

const App = () => {
  return (
    <Wrapper>
      <MainWrap>
        <CardContainer />
        <Pagination />
        <FormContainer />
      </MainWrap>
    </Wrapper>
  )
};

export default App;
