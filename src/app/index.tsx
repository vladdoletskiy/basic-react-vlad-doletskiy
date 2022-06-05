import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routing } from 'pages';
import { Header } from 'widgets/header';
import { ThemeProvider } from 'shared';
import { theme } from 'shared/ui/theme/theme-config';

export const App: React.FunctionComponent = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Header />
        <Routing />
      </ThemeProvider>
    </BrowserRouter>
  );
};
