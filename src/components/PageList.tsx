import React from 'react';
import styled from 'styled-components';

const PageList = () => {
  const pageArray = [<Page key="1">1</Page>,<Page key="2">2</Page>,<Page key="3">3</Page>];


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
