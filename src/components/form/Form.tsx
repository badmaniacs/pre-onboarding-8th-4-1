import React, { useState } from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import CommentService from '../../services/CommentService';

const FormContents = styled.form`
  height: 100%;  
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;

  & input {
    height: 15%;
  }

  & textarea {
    height: 60%;
  }
`;

const Button = styled.button`
  height: 15%;
`;

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

  const handleSubmit = (event: React.FormEvent) => {
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
      <input id='profile_url' onChange={handleChange} />
      <input id='author' onChange={handleChange} />
      <textarea id='content' onChange={handleChange} />
      <Button type='button' onClick={handleSubmit}>등록</Button>
    </FormContents>
  )
}

export default Form;