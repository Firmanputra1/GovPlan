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
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null); // State untuk menyimpan pesan kesalahan

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); // Reset pesan kesalahan sebelum membuat request

    try {
      const response = await fetch('https://your-api-endpoint.com/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      const data = await response.json();
      console.log('Login successful:', data);
      // Simpan token atau lakukan tindakan lain setelah login berhasil

    } catch (error) {
      setError('Login failed. Please check your username and password.');
      console.error('Login error:', error);
    }
  };

  return (
    <LoginWrapper>
      <LoginForm onSubmit={handleSubmit}>
        <Title>Login</Title>
        {error && <p style={{ color: 'red' }}>{error}</p>} {/* Menampilkan pesan kesalahan */}
        <FormGroup>
          <Label htmlFor="username">Username</Label>
          <Input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
