import styled from 'styled-components';
import CommentList from '../features/comments/CommentList';
import PageList from '../features/comments/PageList';
import Form from '../features/form/Form';

const Main = () => {
  return (
    <Wrapper>
      <CommentList />
      <PageList />
      <Form />
    </Wrapper>
  );
};

export default Main;

const Wrapper = styled.div`
  width: 500px;
  height: 100vh;
`;
