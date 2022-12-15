import React from 'react';
import styled from 'styled-components';

import Titulo from '../Titulo';
import Conta from '../Conta';
import { Extrato } from '../Extrato';

import { extratoLista } from '../../info';

const ContainerWrapper = styled.div`
  background-color: ${({ theme }) => theme.body};
  min-height: 90vh;
  padding: 0 15vw;
`;

const Conteudo = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: ${({ theme }) => theme.text};

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const Container = () => {
  return (
    <ContainerWrapper>
      <Titulo>Olá Fulano!</Titulo>
      <Conteudo>
        <Conta />
        <Extrato items={extratoLista.updates} />
      </Conteudo>
    </ContainerWrapper>
  );
};

export default Container;
