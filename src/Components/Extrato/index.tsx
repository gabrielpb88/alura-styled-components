import React from 'react';
import styled from 'styled-components';
import { Botao, Box } from '../UI';
import { Item, ItemExtrato } from './Item';

const Lista = styled.ul`
  list-style-type: none;
`;

export interface ExtratoProps {
  items: ItemExtrato[];
}

export const Extrato = ({ items }: ExtratoProps) => {
  return (
    <Box>
      <Lista>
        {items.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </Lista>
      <Botao>Ver Mais</Botao>
    </Box>
  );
};
