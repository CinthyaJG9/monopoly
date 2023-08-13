import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f5f5f5;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
`;

const Button = styled.a`
  display: inline-block;
  padding: 10px 20px;
  border: 2px solid #333;
  border-radius: 4px;
  font-size: 16px;
  color: #333;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #333;
    color: #fff;
  }
`;

const HomePage = () => {
  return (
    <Container>
      <Title>Welcome to My Monopoly App</Title>
      <ButtonContainer>
        <Link href="/register">
          <Button>Regístrate</Button>
        </Link>
        <Link href="/login">
          <Button>Iniciar Sesión</Button>
        </Link>
      </ButtonContainer>
    </Container>
  );
};

export default HomePage;
