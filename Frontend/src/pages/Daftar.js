// src/pages/Daftar.js
import React, { useState } from 'react';
import {
  DaftarWrapper,
  DaftarForm,
  FormGroup,
  SubmitButton,
  Title,
} from '../components/StyledDaftar';

const Daftar = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Tambahkan logika untuk submit form di sini
    console.log(formData);
  };

  return (
    <DaftarWrapper>
      <DaftarForm onSubmit={handleSubmit}>
        <Title>Daftar</Title>
        <FormGroup>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <SubmitButton type="submit">Daftar</SubmitButton>
      </DaftarForm>
    </DaftarWrapper>
  );
};

export default Daftar;
