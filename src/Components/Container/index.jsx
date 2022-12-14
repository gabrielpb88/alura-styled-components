import React from 'react';
import styled from 'styled-components';

import Titulo from '../Titulo';
import Conta from '../Conta';
import { fundoClaro } from '../UI/variaveis';

const Container = styled.div`
  background-color: ${fundoClaro};
  min-height: 90vh;
  padding: 0 15vw;
`;

const Conteudo = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export default () => {
  return (
    <Container>
      <Titulo>Olá Fulano!</Titulo>
      <Conteudo>
        <Conta />
      </Conteudo>
    </Container>
  );
};
