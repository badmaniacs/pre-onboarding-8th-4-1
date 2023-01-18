import React, { useEffect} from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { getCommentByPage } from '../store/commentActions';
import { pageActions } from '../store/pageSlice';

const PageList = () => {
  const dispatch = useAppDispatch();
  const page = useAppSelector((state)=>state.page.page)
  const comment = useAppSelector((state)=>state.comments.comments)
  const pageArray = [];
  const pageHandler = (i) => {
    dispatch(pageActions.replacePage(i))
  }
  const pages = Math.ceil(useAppSelector((state) => state.comments.length) / 10);
  for (let i = 1; i <= pages; i++) {
    pageArray.push(
      <Page key={i} onClick={() => pageHandler(i)} active={page === i}>
        {i}
      </Page>
    );
  }

  useEffect(()=>{
    dispatch(getCommentByPage(page))
  },[dispatch,page,comment])

  return <PageListStyle>{pageArray}</PageListStyle>;
};

const PageListStyle = styled.div`
  margin-bottom: 20px;
  text-align: center;
`;

const Page = styled.button`
  padding: 0.375rem 0.75rem;
  border-radius: 0.25rem;
  font-size: 1rem;
  line-height: 1.5;
  border: 1px solid lightgray;
  ${({ active }) =>
    active &&
    `
        background: gray;
        color: #fff;
  `}
  margin-right: 3px;
`;

export default PageList;
