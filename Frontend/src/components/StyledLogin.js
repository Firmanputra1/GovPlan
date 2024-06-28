// src/components/StyledLogin.js
import styled from 'styled-components';

export const LoginWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
`;

export const LoginForm = styled.form`
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 300px;
  text-align: center;
`;

export const FormGroup = styled.div`
  margin-bottom: 15px;
  text-align: left;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  color: #333;
`;

export const Input = styled.input`
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #d97d0d;
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  font-size: 1em;

  &:hover {
    background-color: #b56508;
  }
`;

export const Title = styled.h2`
  margin-bottom: 20px;
  color: #d97d0d;
`;
