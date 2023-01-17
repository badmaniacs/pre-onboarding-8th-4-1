import React, { useCallback } from 'react';
import styled from 'styled-components';

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

  const handleSubmit = useCallback((event: React.FormEvent) => {
    event.preventDefault();


  }, []);

  return (
    <FormContents onSubmit={handleSubmit}>
      <input />
      <textarea />
      <Button type='submit'>등록</Button>
    </FormContents>
  )
}

export default Form;