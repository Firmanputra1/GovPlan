import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  LoginWrapper,
  LoginForm,
  FormGroup,
  Label,
  Input,
  SubmitButton,
  Title,
} from "../components/StyledLogin";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      console.log("Sending request to server with:", { username, password });

      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Error response from server:", errorData);
        throw new Error(errorData.message || "Login failed");
      }

      const data = await response.json();
      console.log("Login successful:", data);
      // Simpan token atau lakukan tindakan lain setelah login berhasil
      // Contoh: localStorage.setItem('token', data.token);

      // Navigate to home page after successful login
      navigate("/home");
    } catch (error) {
      setError(
        error.message ||
          "Login failed. Please check your username and password."
      );
      console.error("Login error:", error);
    }
  };

  return (
    <LoginWrapper>
      <LoginForm onSubmit={handleSubmit}>
        <Title>Login</Title>
        {error && <p style={{ color: "red" }}>{error}</p>}
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
