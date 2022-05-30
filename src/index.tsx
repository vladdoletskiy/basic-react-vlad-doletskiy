import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Auth0Provider
    domain="dev-lp34u8l1.us.auth0.com"
    clientId="h4v4QAuE0ag6woRZCasDkQnMTJzwmfkK"
    redirectUri={window.location.origin}
  >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Auth0Provider>,
);
