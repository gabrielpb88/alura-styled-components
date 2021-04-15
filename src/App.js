import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import {temaClaro, temaEscuro } from "./Components/UI/temas";

import { GlobalStyle } from "./Components/GlobalStyle";
import Cabecalho from "./Components/Cabecalho";
import Container from "./Components/Container";
import { BtnTema } from "./Components/UI";
import SwitcherTema from './Components/SwitchTema'

function App() {
  const [tema, setTema] = useState(true)

  const toggleTema = () => {
    setTema((tema) => setTema(!tema))
  }

  return (
    <>
      <ThemeProvider theme={ tema ? temaClaro : temaEscuro }>
        <GlobalStyle/>
        <BtnTema onClick={toggleTema}>
          <SwitcherTema/>
        </BtnTema>
        <Cabecalho />
        <Container />
      </ThemeProvider>
    </>
  );
}

export default App;
