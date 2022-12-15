import React from 'react';
import styled from 'styled-components';
import { Botao, Box } from '../UI';
import { Item } from './Item';

const Lista = styled.ul`
  list-style-type: none;
`;

export interface ItemExtratoProps {
  id?: string;
  type: string;
  value: string;
  date: string;
  from: string;
}

export const Extrato = (items: ItemExtratoProps[]) => {
  return (
    <Box>
      <Lista>
        {items.map(({ id, value, date, from, type }) => (
          <Item key={id} value={value} date={date} from={from} type={type} />
        ))}
      </Lista>
      <Botao>Ver Mais</Botao>
    </Box>
  );
};
