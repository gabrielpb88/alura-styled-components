import React, { useState } from 'react';

import Cabecalho from './Components/Cabecalho';
import Container from './Components/Container';
import { GlobalStyles } from './Components/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './Components/Theme';
import ThemeSwitcher from './Components/ThemeSwitcher';
import { BtnTheme } from './Components/UI';

function App() {
  const [theme, setTheme] = useState(true);

  const toggleTheme = () => {
    setTheme(!theme);
  };

  return (
    <ThemeProvider theme={theme ? lightTheme : darkTheme}>
      <GlobalStyles />
      <BtnTheme onClick={toggleTheme}>
        <ThemeSwitcher tema={theme} />
      </BtnTheme>
      <Cabecalho />
      <Container />
    </ThemeProvider>
  );
}
export default App;
