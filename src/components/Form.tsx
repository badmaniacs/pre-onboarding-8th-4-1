import React, { useState } from 'react';
import styled from 'styled-components';
import { useAppSelector, useAppDispatch } from '../hooks/hooks';
import { addComment } from '../store/commentActions';
import { pageActions } from '../store/pageSlice';


const Form = () => {
  const id = useAppSelector((state) => state.comments.lastId);
  const dispatch = useAppDispatch();

  const [inputs, setInputs] = useState({
    url: '',
    author: '',
    content: '',
    createdAt: '',
  });

  const { url, author, content, createdAt } = inputs;

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onReset = () => {
    setInputs({
      url: '',
      author: '',
      content: '',
      createdAt: '',
    });
  };

  const sumbitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const comment = {
      id: id + 1,
      content,
      author,
      createdAt,
      profile_url: url,
    };
    dispatch(addComment(comment));
    dispatch(pageActions.replacePage(1));
    onReset();
  };

  return (
    <FormStyle>
      <form onSubmit={sumbitHandler}>
        <input
          type="text"
          name="url"
          value={url}
          placeholder="https://picsum.photos/id/1/50/50"
          onChange={onChangeHandler}
          required
        />
        <br />
        <input type="text" name="author" value={author} placeholder="작성자" onChange={onChangeHandler} />
        <br />
        <textarea name="content" placeholder="내용" value={content} required onChange={onChangeHandler} />
        <br />
        <input
          type="date"
          name="createdAt"
          placeholder="2020-05-30"
          value={createdAt}
          required
          onChange={onChangeHandler}
        />
        <br />
        <button type="submit">등록</button>
      </form>
    </FormStyle>
  );
};

const FormStyle = styled.div`
  & > form {
    padding: 0 10px;
    margin-bottom: 50px;
  }
  & > form > textarea {
    padding: 5px 1%;
    width: 98%;
    height: 50px;
  }
  & > form > input[type='text'] {
    padding: 5px 1%;
    width: 98%;
    margin-bottom: 10px;
  }
  & > form > button {
    padding: 0.375rem 0.75rem;
    border-radius: 0.25rem;
    border: 1px solid lightgray;
    cursor: pointer;
  }
`;

export default Form;
