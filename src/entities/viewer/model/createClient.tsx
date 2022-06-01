import React, { useEffect } from 'react';
import createAuth0Client from '@auth0/auth0-spa-js';

// в документации это должно быть в асинхронной функции...
// надо ли это в реакте? await ведь не может быть без асинка?
// но если таки оберну - то как мне правильно експортировать myAuth?

export const auth0 = await createAuth0Client({
  domain: 'dev-lp34u8l1.us.auth0.com',
  client_id: 'vGjXuGbZBGTfOGmJJqRjYdhL7pJzZ0u6',
  redirect_uri: window.location.origin,
});

// создал клиент. Логин.логаут работают.
// Идет редирект на главную стр.
// Слудующий этап - получить данные о пользователе.
