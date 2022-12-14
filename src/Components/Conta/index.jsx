import React, { useState } from 'react';
import styled from 'styled-components';

import privado from '../../assets/images/privado.svg';
import olho_icone from '../../assets/images/olho.svg';
import dinheiro from '../../assets/images/dinheiro.svg';
import { Botao, Box, Detalhe, Icone, Saldo } from '../UI';

const IconeMargin = styled(Icone)`
  margin-top: 2px;
`;

const ContaWrapper = styled.div`
  font-size: 26px;
  padding: 20px 0;
`;

const Conta = () => {
  const [toggleState, untoggle] = useState(true);

  const toggleHandler = () => {
    untoggle((toggleState) => !toggleState);
  };

  return (
    <Box>
      <h2>Conta</h2>
      <ContaWrapper>
        Saldo disponível{' '}
        <span>
          <Icone src={dinheiro} alt="Ícone Saldo" />
        </span>
        {toggleState && (
          <Saldo>
            <Detalhe>R$</Detalhe> 0,00{' '}
          </Saldo>
        )}
      </ContaWrapper>

      <Botao onClick={toggleHandler}>
        <IconeMargin
          src={toggleState ? privado : olho_icone}
          alt="Privacidade do Saldo"
        />
      </Botao>
    </Box>
  );
};

export default Conta;
