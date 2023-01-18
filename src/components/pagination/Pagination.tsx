import styled from 'styled-components';

const Pagination = ({
  count,
  paginate,
  pagesPerPage,
  currentPage
}) => {
  const pageCount = Math.ceil(count / pagesPerPage);
  
  const handlePaginate = (i) => {
    paginate(i);
  }

  return (
    <Wrapper>
      {
        [...new Array(pageCount)].map((_, i) => (
          <PageButton
            // eslint-disable-next-line react/no-array-index-key
            key={i}
            onClick={() => {handlePaginate(i + 1)}}
            color={i + 1 === currentPage ? '#189bfa' : '#fff'}
          >
            {i + 1}
          </PageButton>
        )) 
      }
    </Wrapper>
  )
}

export default Pagination;

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
  background-color: ${props => props.color || '#fff'}
`