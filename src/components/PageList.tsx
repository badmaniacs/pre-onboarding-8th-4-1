import React from 'react';
import styled from 'styled-components';

const PageList = () => {
  const pageArray = [1];
  return (
    <PageListStyle>
      {pageArray.map((pageNumber) => (
        <Page key={pageNumber}>{pageNumber}</Page>
      ))}
    </PageListStyle>
  );
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
