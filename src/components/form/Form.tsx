import React, { useState } from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import CommentService from '../../services/CommentService';

const Form = () => {
  const count = useAppSelector(state => state.comment.count);
  const dispatch = useAppDispatch();
  const [comment, setComment] = useState({
    id: count + 1,
    profile_url: "",
    author: "",
    content: "",
    createdAt: ""
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(CommentService.addCommentItem(comment));
  }

  const handleChange = (event) => {
    switch(event.target.id) {
      case "author": 
        setComment({...comment, author: event.target.value});
        break;
      case "profile_url":
        setComment({...comment, profile_url: event.target.value});
        break;
      case "content": 
        setComment({...comment, content: event.target.value});
        break;
      default:
        break;
    }
  }

  return (
    <FormContents>
      <input id='profile_url' placeholder='이미지 경로' onChange={handleChange} />
      <input id='author' placeholder='작성자' onChange={handleChange} />
      <textarea id='content' placeholder='내용' onChange={handleChange} />
      <Button type='button' onClick={handleSubmit}>등록</Button>
    </FormContents>
  )
}

export default Form;

const FormContents = styled.form`
  height: 100%;  
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;

  & input {
    height: 15%;
    margin-bottom: 5px;
  }

  & textarea {
    height: 60%;
  }
`;

const Button = styled.button`
  height: 15%;
`;
