import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 100px;
  margin-bottom: 20px;
  padding: 12px;
  display: flex;
  flex-flow: row nowrap;
  border-radius: 20px;
  box-shadow: 1px 2px 1px 1px rgba(0, 0, 0, 0.5);

  & p {
    width: 60%;
    margin-right: 20px;
  }
`;

const Images = styled.div`
  width: 18%;
  margin-right: 20px;
  display:flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;

  & img {
    border-radius: 100%;
    margin-bottom: 8px;
  }

  & p {
    font-size: 13px;
    text-align: center;
  }
`;

const Button = styled.button`
  width: 45px;
  height: 25px;
  margin-right: 10px;
`;

const Card = () => {
  return (
    <Wrapper>
      <Images>
        <img src="https://picsum.photos/id/1/50/50" alt="기본" />
        <p>작성자</p>
      </Images>

      <p>코멘트</p>

      <Button>수정</Button>
      <Button>삭제</Button>
    </Wrapper>
  )
}

export default Card;