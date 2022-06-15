import React from 'react';
// import ReactDOM from 'react-dom/client';
import { App } from 'app';
import ReactDOM from 'react-dom';

// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// );

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
