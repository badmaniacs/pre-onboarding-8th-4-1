import React from 'react'
import styled from 'styled-components'
import Form from './Form';

const Wrapper = styled.div`
  width: 100%;
  height: 200px;
  border: 1px solid #189bfa;
  padding: 20px 15px;
`;

const FormContainer = () => {
  return (
    <Wrapper> 
      <Form /> 
    </Wrapper>
  )
}

export default FormContainer