// components/PropertyCard.tsx
import React from 'react';
import styled from 'styled-components';

interface PropertyCardProps {
  name: string;
  price: number;
  owner: string | null;
  children?: React.ReactNode;
}

const CardContainer = styled.div`
  border: 2px solid #333;
  padding: 16px;
  background-color: #fff;
  width: 240px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PropertyCard: React.FC<PropertyCardProps> = ({ name, price, owner, children }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>Price: {price}</p>
      <p>Owner: {owner}</p>
      {children}
    </div>
  );
};

export default PropertyCard;





