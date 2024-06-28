// src/components/StyledDaftar.js
import styled from 'styled-components';

export const DaftarWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f2f2f2;
`;

export const DaftarForm = styled.form`
  background-color: white;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 400px;
`;

export const Title = styled.h1`
  margin-bottom: 20px;
  text-align: center;
  color: #d97d0d;
`;

export const FormGroup = styled.div`
  margin-bottom: 20px;

  label {
    display: block;
    margin-bottom: 5px;
    color: #333;
  }

  input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #d97d0d;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #b5640a;
  }
`;
