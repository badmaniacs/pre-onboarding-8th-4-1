import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getComments } from '../api/comment';
import { useAppDispatch, useAppSelector } from '../store/store';
import { setPage } from '../store/slices/pageSlice';
import { setComments } from '../store/slices/commentsSlice';

const PageList = () => {
  const [pages, setPages] = useState<number[]>([1]);
  const { comments } = useAppSelector((state) => state.comments);
  const { page } = useAppSelector((state) => state.page);
  const dispatch = useAppDispatch();

  const getCommentsData = async () => {
    try {
      const res = await getComments();
      dispatch(setComments(res.data));
    } catch (err) {
      alert('전체 댓글 불러오기 실패');
    }
  };

  const pagination = () => {
    const pageLength = Math.ceil(comments.length / 4);
    const pageArray = Array(pageLength)
      .fill(0)
      .map((_, idx) => idx + 1);
    setPages(pageArray);
  };

  const handleChangePage = (p: number) => dispatch(setPage(p));

  useEffect(() => {
    if (!comments.length) getCommentsData();
    pagination();
  }, [comments]);

  return (
    <PageListStyle>
      {pages.map((pageNumber) => (
        <Page key={pageNumber} onClick={() => handleChangePage(pageNumber)} active={pageNumber === page}>
          {pageNumber}
        </Page>
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
