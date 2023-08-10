import React from 'react';
import styled, { css } from 'styled-components';

interface CellProps {
  isOwned: boolean;
  children: React.ReactNode; // Agrega children aquí
}

const CellContainer = styled.div<CellProps>`
  border: 1px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  ${(props: { isOwned: any; }) =>
    props.isOwned
      ? css`
          background-color: #e2ffe2;
        `
      : css`
          background-color: #fff;
        `}
`;

const PropertyCell: React.FC<CellProps> = ({ isOwned, children }) => {
  return <CellContainer isOwned={isOwned}>{children}</CellContainer>;
};

export default PropertyCell;
