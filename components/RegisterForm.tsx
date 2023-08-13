import React, { useState, FormEvent } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import querystring from 'querystring'; // Convierte los datos a formato x-www-form-urlencoded

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border: 1px solid #ddd;
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);

  h2 {
    font-size: 1.5rem;
    margin-bottom: 20px;
  }

  p {
    color: red;
    margin-top: 5px;
  }

  input {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
  }

  button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #0056b3;
    }
  }
`;

const RegisterForm: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
  
    try {
      const data = querystring.stringify({ username, password });
      const response = await axios.post('/register', data, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });
  
      // Verifica si la respuesta es exitosa y redirige a la página de inicio de sesión
      if (response.status === 200) {
        window.location.href = '/login'; // Redirige a la página de inicio de sesión
      } else {
        setError('Ocurrió un error al registrar el usuario');
      }
    } catch (error) {
      setError('Ocurrió un error al registrar el usuario');
    }
  };
  

  return (
    <FormContainer>
      <h2>Registro de Usuario</h2>
      {error && <p>{error}</p>}
      <input
        type="text"
        placeholder="Usuario"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit" onClick={handleSubmit}>
        Registrar
      </button>
    </FormContainer>
  );
};

export default RegisterForm;
