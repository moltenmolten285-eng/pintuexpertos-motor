import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Esto conecta tu código con el <div id="root"></div> de tu public/index.html
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
