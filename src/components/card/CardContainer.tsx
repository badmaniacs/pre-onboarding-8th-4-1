import styled from 'styled-components';
import Card from './Card';

const Wrapper = styled.div`
    height: 600px;
    display: flex;
    flex-flow: column nowrap;
    overflow: auto;
`;

const CardContainer = ({
  commentList
}) => {

  return (
    <Wrapper>
      {
        commentList.map((comment) => (
          <Card 
            key={comment.id} 
            profile_url={comment.profile_url} 
            author={comment.author} 
            content={comment.content} 
          />
        ))
      }
    </Wrapper>
  );
}

export default CardContainer;