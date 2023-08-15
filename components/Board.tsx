import React from 'react';
import styled from 'styled-components';
import PropertyCell from './PropertyCell';
import PropertyCard from './PropertyCard';
import BoardRow from './BoardRow';

const BoardContainer = styled.div`
width: 800px;
height: 800px;
background-color: #f4f4f4;
border: 2px solid #333;
display: grid;
grid-template-columns: repeat(10, 1fr); /* Aumentamos el número de columnas para incluir las casillas de los bordes */
grid-template-rows: repeat(10, 1fr); /* Aumentamos el número de filas para incluir las casillas de los bordes */
`;

const RotatablePropertyCard = styled(PropertyCard)`
  &[data-rotated='true'] {
    transform: rotate(90deg);
  }
`;

const Board = () => {
  // Simulando datos de propiedades
  const properties = [
    { name: 'Property 1', price: 200, owner: 'Player 1' },
    { name: 'Property 2', price: 300, owner: null },
    { name: 'Property 3', price: 250, owner: 'Player 2' },
    { name: 'Property 4', price: 400, owner: null },
    { name: 'Property 5', price: 500, owner: 'Player 3' },
    { name: 'Property 6', price: 600, owner: null },
    { name: 'Property 7', price: 700, owner: 'Player 4' },
    { name: 'Property 8', price: 800, owner: null },
    { name: 'Property 9', price: 900, owner: 'Player 5' },
    { name: 'Property 10', price: 1000, owner: null },
    { name: 'Property 11', price: 200, owner: 'Player 1' },
    { name: 'Property 12', price: 300, owner: null },
    { name: 'Property 13', price: 250, owner: 'Player 2' },
    { name: 'Property 14', price: 400, owner: null },
    { name: 'Property 15', price: 500, owner: 'Player 3' },
    { name: 'Property 16', price: 600, owner: null },
    { name: 'Property 17', price: 700, owner: 'Player 4' },
    { name: 'Property 18', price: 800, owner: null },
    { name: 'Property 19', price: 900, owner: 'Player 5' },
    { name: 'Property 20', price: 1000, owner: null },
    { name: 'Property 21', price: 200, owner: 'Player 1' },
    { name: 'Property 22', price: 300, owner: null },
    { name: 'Property 23', price: 250, owner: 'Player 2' },
    { name: 'Property 24', price: 400, owner: null },
    { name: 'Property 25', price: 500, owner: 'Player 3' },
    { name: 'Property 26', price: 600, owner: null },
    { name: 'Property 27', price: 700, owner: 'Player 4' },
    { name: 'Property 28', price: 800, owner: null },
    { name: 'Property 29', price: 900, owner: 'Player 5' },
    { name: 'Property 30', price: 1000, owner: null },
    { name: 'Property 31', price: 200, owner: 'Player 1' },
    { name: 'Property 32', price: 300, owner: null },
    { name: 'Property 33', price: 250, owner: 'Player 2' },
    { name: 'Property 34', price: 400, owner: null }, 
    { name: 'Property 35', price: 500, owner: 'Player 3' },
    { name: 'Property 36', price: 600, owner: null },
    { name: 'Property 37', price: 700, owner: 'Player 4' },
    { name: 'Property 38', price: 800, owner: null },
    { name: 'Property 39', price: 900, owner: 'Player 5' },
    { name: 'Property 40', price: 1000, owner: null },
    // ... y así sucesivamente
  ];

  return (
    <BoardContainer>
      {/* Esquina superior izquierda */}
      <PropertyCell isOwned={false}>
        <RotatablePropertyCard
          name={properties[0].name}
          price={properties[0].price}
          owner={properties[0].owner}
          data-rotated="true"
        />
      </PropertyCell>
      {/* Fila superior */}
      {properties.slice(1, 10).map((property, index) => (
        <PropertyCell key={index} isOwned={!!property.owner}>
          <RotatablePropertyCard
            name={property.name}
            price={property.price}
            owner={property.owner}
          />
        </PropertyCell>
      ))}
      {/* Esquina superior derecha */}
      <PropertyCell isOwned={false}>
        <PropertyCard name={properties[10].name} price={properties[10].price} owner={properties[10].owner} />
      </PropertyCell>
      {/* Columna derecha */}
      {properties.slice(11, 19).map((property, index) => (
        <PropertyCell key={index} isOwned={!!property.owner}>
          <PropertyCard name={property.name} price={property.price} owner={property.owner} />
        </PropertyCell>
      ))}
      {/* Esquina inferior derecha */}
      <PropertyCell isOwned={false}>
        <PropertyCard name={properties[19].name} price={properties[19].price} owner={properties[19].owner} />
      </PropertyCell>
      {/* Fila inferior */}
      {properties.slice(20, 29).reverse().map((property, index) => (
        <PropertyCell key={index} isOwned={!!property.owner}>
          <PropertyCard name={property.name} price={property.price} owner={property.owner} />
        </PropertyCell>
      ))}
      {/* Esquina inferior izquierda */}
      <PropertyCell isOwned={false}>
        <PropertyCard name={properties[29].name} price={properties[29].price} owner={properties[29].owner} />
      </PropertyCell>
      {/* Columna izquierda */}
      {properties.slice(30).reverse().map((property, index) => (
        <PropertyCell key={index} isOwned={!!property.owner}>
          <PropertyCard name={property.name} price={property.price} owner={property.owner} />
        </PropertyCell>
      ))}
    </BoardContainer>
  );
};

export default Board;

