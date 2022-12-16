import React from 'react';
import styled from 'styled-components';
import Image from '../Image';

const ItemWrapper = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-around;

  border-radius: 10px;
  margin: 2px 0;
  padding: 10px;
  font-size: 12px;

  box-shadow: 4px 4px 20px 0 rgba(0, 0, 0, 0.1);
`;

const ItemDescription = styled.div`
  display: flex;
  flex-direction: column;

  .text {
    font-weight: bold;
  }
`;

export interface ItemExtrato {
  id?: string;
  type: string;
  value: string;
  date: string;
  from: string;
}

export const Item = ({ type, value, date, from }: ItemExtrato) => {
  return (
    <ItemWrapper>
      <Image type={type} />
      <ItemDescription>
        <span className="text">{type}</span>
        <span>{from}</span>
        <span>{value}</span>
      </ItemDescription>
      <span>{date}</span>
    </ItemWrapper>
  );
};
