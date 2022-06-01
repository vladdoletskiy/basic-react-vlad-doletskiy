import React from 'react';
import createAuth0Client from '@auth0/auth0-spa-js';

// в документации это должно быть в асинхронной функции... надо ли это в реакте?
export const auth0 = await createAuth0Client({
  domain: 'dev-lp34u8l1.us.auth0.com',
  client_id: 'vGjXuGbZBGTfOGmJJqRjYdhL7pJzZ0u6',
  redirect_uri: window.location.origin,
});

export const isAuthenticated = auth0.isAuthenticated();
