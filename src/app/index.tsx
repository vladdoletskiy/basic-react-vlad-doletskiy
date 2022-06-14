import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'shared';
import { theme, CssBaseline } from 'shared';
import { Header } from 'widgets/header';
import { Routing } from 'pages';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <Routing />
      </ThemeProvider>
    </BrowserRouter>
  );
};
