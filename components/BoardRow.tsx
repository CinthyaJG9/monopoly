import React from 'react';
import styled from 'styled-components';
import PropertyCard from './PropertyCard';
import { Property } from '../interfaces/property';

const RowContainer = styled.div`
  display: flex;
`;

interface BoardRowProps {
  properties: Property[];
}

const BoardRow: React.FC<BoardRowProps> = ({ properties }) => {
  return (
    <RowContainer>
      {properties.map((property, index) => (
        <PropertyCard
          key={index}
          name={property.name}
          price={property.price}
          owner={property.owner}
        />
      ))}
    </RowContainer>
  );
};

export default BoardRow;
