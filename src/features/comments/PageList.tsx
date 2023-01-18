import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../../app/store';
import { usePagination } from '../../hooks/usePagination';

const PageList = () => {
  const totalCount = useSelector((state: RootState) => state.comments.totalCounts);
  const totalPageNum = Math.floor(totalCount / 4);

  const { handlePagination } = usePagination();

  const pageArray = [];

  for (let i = 0; i < totalPageNum; i++) {
    pageArray.push(
      <Page key={i} onClick={() => handlePagination(i + 1)}>
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
  cursor: pointer;

  margin-right: 3px;

  :hover {
    background-color: #bcbcbc;
    transition: all linear 0.1s;
  }
`;
