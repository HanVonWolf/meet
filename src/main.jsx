import React from 'react';
import * as atatus from 'atatus-spa';
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

atatus.config('625b5b32ecf1464992262f36fc023eb4').install();


