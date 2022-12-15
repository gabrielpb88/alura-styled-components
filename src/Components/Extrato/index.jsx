import React from 'react';
import styled from 'styled-components';
import { Botao, Box } from '../UI';
import { Item } from './Item';

const Lista = styled.ul`
  list-style-type: none;
`;
export const Extrato = ({ items }) => {
  return (
    <Box>
      <Lista>
        {items.updates.map((item) => (
          <Item key={item.id}>{item}</Item>
        ))}
      </Lista>
      <Botao>Ver Mais</Botao>
    </Box>
  );
};
