import styled from 'styled-components';
import { useLayoutEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { pageMove } from '../util/redux/action';
import { getCommentsApi } from '../api/api';

const PageList = () => {
  const [itemLength, setItemLength] = useState(0);
  const dispatch = useDispatch();

  const pageArray = [];
  const pageItem = 4;
  const pageNumber = Math.ceil(itemLength / pageItem);

  const handlePageMove = (event) => {
    const targetPage = parseInt(event.target.dataset.key, 10);
    const handleGetComment = async () => {
      const getComments = await getCommentsApi(targetPage);
      dispatch(pageMove(getComments));
    };
    handleGetComment();
  };

  useLayoutEffect(() => {
    const handleGetComment = async () => {
      const getComments = await getCommentsApi();
      setItemLength(parseInt(getComments.length, 10));
    };
    handleGetComment();
  }, []);

  for (let i = 0; i < pageNumber; i++) {
    pageArray.push(
      <Page onClick={handlePageMove} data-key={i + 1} key={i + 1}>
        {i + 1}
      </Page>
    );
  }

  return <PageListStyle>{pageArray}</PageListStyle>;
};

export default PageList;

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
  cursor: pointer;
`;
