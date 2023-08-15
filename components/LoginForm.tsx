import React, { useState, FormEvent } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useRouter } from 'next/router';

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

  const LoginForm: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter(); // Obtiene el objeto router
  
    const handleSubmit = async (e: FormEvent) => {
      e.preventDefault();
  
      try {
        const response = await axios.post('/login', { username, password });
        
        if (response.status === 200) {
          router.push('/play'); // Redirige a la página de juego (/play)
        } else {
          setError('Ocurrió un error al iniciar sesión');
        }
      } catch (error) {
        setError('Usuario o contraseña incorrectos');
      }
    };

  return (
    <FormContainer>
      <h2>Iniciar Sesión</h2>
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
        Iniciar Sesión
      </button>
    </FormContainer>
  );
};

export default LoginForm;
