import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import CardContainer from './components/card/CardContainer';
import FormContainer from './components/form/FormContainer';
import Pagination from './components/pagination/Pagination';
import { useAppDispatch, useAppSelector } from './redux/store';
import CommentService from './services/CommentService';

const App = () => {
  const { commentList } = useAppSelector(state => state.comment);
  const dispatch = useAppDispatch();
  const [pagesPerpage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    dispatch(CommentService.getCommentList({_page: pageNumber, _limit: pagesPerpage, _sort: "id"}));
  }

  useEffect(() => {
    dispatch(CommentService.getCommentList({_page: currentPage, _limit: pagesPerpage, _sort: "id"}));
  }, []);

  return (
    <Wrapper>
      <MainWrap>
        <CardContainer commentList={commentList} />
        <Pagination 
          count={22} 
          pagesPerPage={pagesPerpage} 
          paginate={paginate} 
          currentPage={currentPage}  
        />
        <FormContainer />
      </MainWrap>
    </Wrapper>
  )
};

export default App;

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