// src/pages/Login.js
import React, { useState } from 'react';
import {
  LoginWrapper,
  LoginForm,
  FormGroup,
  Label,
  Input,
  SubmitButton,
  Title,
} from '../components/StyledLogin';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logika untuk proses login
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <LoginWrapper>
      <LoginForm onSubmit={handleSubmit}>
        <Title>Login</Title>
        <FormGroup>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </FormGroup>
        <SubmitButton type="submit">Login</SubmitButton>
      </LoginForm>
    </LoginWrapper>
  );
};

export default Login;
