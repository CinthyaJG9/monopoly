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
  const properties = [
    { name: 'Main Street', price: 200, owner: null },
    { name: 'Adventureland', price: 300, owner: null },
    { name: 'Fantasyland', price: 400, owner: null },
    // ... más propiedades
  ];

  return (
    <Container>
      <Title>Disney Monopoly Game</Title>
      <GameContainer>
        <Board />
        <PropertiesContainer>
          <PropertyCell isOwned={false}>
            {/* Contenido de la casilla */}
          </PropertyCell>
          <PropertyCell isOwned={false}>
            {/* Contenido de la casilla */}   
          </PropertyCell>
          <PropertyCell isOwned={false}>
            {/* Contenido de la casilla */}
            </PropertyCell>
          <PropertyCell isOwned={false}>
            {/* Contenido de la casilla */}
            </PropertyCell>
          {/* ... más casillas */}
          
        </PropertiesContainer>
        <PropertiesContainer>
          {properties.map((property, index) => (
            <PropertyCard
              key={index}
              name={property.name}
              price={property.price}
              owner={property.owner}
            >
              {/* Contenido de la tarjeta */}
            </PropertyCard>
          ))}
        </PropertiesContainer>
      </GameContainer>
    </Container>
  );
};

export default PlayPage;
