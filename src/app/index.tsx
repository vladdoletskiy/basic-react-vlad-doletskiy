import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routing } from 'pages';
import { Header } from 'widgets/header';
import './index.scss';

export const App: React.FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routing />
    </BrowserRouter>
  );
};
