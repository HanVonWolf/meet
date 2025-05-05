import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import * as atatus from 'atatus-spa';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';



// atatus.config('25b5b32ecf1464992262f36fc023eb4').install();


ReactDOM.createRoot(document.getElementById('root')).render(
 <React.StrictMode>
   <App />
 </React.StrictMode>,
);
serviceWorkerRegistration.register();

