// components/Board.tsx
import React from 'react';
import styled from 'styled-components';
import PropertyCell from './PropertyCell';
import PropertyCard from './PropertyCard';

const BoardContainer = styled.div`
  width: 600px;
  height: 600px;
  background-color: #f4f4f4;
  border: 2px solid #333;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(10, 1fr);
`;

const Board = () => {
  // Simulando datos de propiedades
  const properties = [
    { name: 'Property 1', price: 200, owner: 'Player 1' },
    { name: 'Property 2', price: 300, owner: null },
    // ... añade más propiedades aquí
  ];

  return (
    <BoardContainer>
      {properties.map((property, index) => (
        <PropertyCell key={index} isOwned={!!property.owner}>
          <PropertyCard name={property.name} price={property.price} owner={property.owner} />
        </PropertyCell>
      ))}
    </BoardContainer>
  );
};

export default Board;
