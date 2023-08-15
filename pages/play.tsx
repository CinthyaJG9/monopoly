import React from 'react';
import styled from 'styled-components';
import Board from '../components/Board';
import PropertyCard from '../components/PropertyCard';
import PropertyCell from '../components/PropertyCell';

const Container = styled.div`
  background-color: #f9f9f9;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 32px;
  color: #333;
  margin-bottom: 20px;
`;

const GameContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 80%;
  margin-top: 20px;
`;

const PropertiesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const PlayPage = () => {
  return (
    <Container>
      <Title>Disney Monopoly Game</Title>
      <GameContainer>
        <Board />
        <PropertiesContainer>
          {/* Coloca aquí tus casillas */}
          <PropertyCell isOwned={false}>
            {/* Contenido de la casilla */}
          </PropertyCell>
          {/* ... más casillas */}
          
          {/* Coloca aquí tus tarjetas */}
          <PropertyCard name={'Propiedad 1'} price={200} owner={null}>
            {/* Contenido de la tarjeta */}
          </PropertyCard>
          {/* ... más tarjetas */}
        </PropertiesContainer>
      </GameContainer>
    </Container>
  );
};

export default PlayPage;
