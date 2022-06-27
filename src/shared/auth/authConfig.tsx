export const authConfig = {
  domain: import.meta.env.VITE_APP_AUTH0_DOMAIN,
  client_id: import.meta.env.VITE_APP_AUTH0_CLIENT_ID,
  client_secrete: import.meta.env.VITE_APP_AUTH0_CLIENT_SECRETE,
  redirect_uri: window.location.origin,
  audience: import.meta.env.VITE_APP_AUTH0_AUDIENCE,
  connection: 'Username-Password-Authentication',
};

export const apiConfig = {
  client_id: import.meta.env.VITE_APP_AUTH0_API_MENAGE_CLIENT_ID,
  client_secret: import.meta.env.VITE_APP_AUTH0_API_MENAGE_CLIENT_SECRETE,
  audience: import.meta.env.VITE_APP_AUTH0_AUDIENCE,
  grant_type: 'client_credentials',
};
