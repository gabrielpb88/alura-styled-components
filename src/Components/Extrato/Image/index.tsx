import React from 'react';
import alimentacao from '../../../assets/images/alimentacao.svg';
import outros from '../../../assets/images/outros.svg';
import saude from '../../../assets/images/saude.svg';
import transporte from '../../../assets/images/transporte.svg';
import utilidades from '../../../assets/images/utilidades.svg';
import { IconeTema as Icone } from '../../UI';

interface Props {
  type: string;
}
const Image = ({ type }: Props) => {
  // Using Record<string, any> to be possible to use string as index
  const Images: Record<string, any> = {
    Restaurante: <Icone src={alimentacao} alt="Restaurante" />,
    Saude: <Icone src={saude} alt="Saude" />,
    Transporte: <Icone src={transporte} alt="Transporte" />,
    Utilidades: <Icone src={utilidades} alt="Utilidades" />,
    default: <Icone src={outros} alt="Outro" />,
  };
  return Images[type] || Images.default;
};

export default Image;
