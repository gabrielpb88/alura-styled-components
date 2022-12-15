import * as v from './UI/variaveis';

interface Theme {
  body: string;
  inside: string;
  text: string;
  filter: string;
}
export const lightTheme: Theme = {
  body: v.fundoClaro,
  inside: v.conteudoClaro,
  text: v.textoFundoClaro,
  filter: '',
};

export const darkTheme: Theme = {
  body: v.fundoEscuro,
  inside: v.conteudoEscuro,
  text: v.textoFundoEscuro,
  filter: 'invert(100%)',
};
