//initialise l'application React, configure le store Redux, active le router de React Router et rend le composant racine 'App" dans le DOM en utilisant le mode strit de React.

import React from 'react'; 
import ReactDOM from 'react-dom/client'; // Importation de la méthode ReactDOM.createRoot()
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'; // Importation du composant Provider de Redux pour fournir le store Redux
import store from './redux/store.jsx'; // Importation du store Redux configuré
import './sass/_Main.scss'; 
import App from './app.js'

const root = ReactDOM.createRoot(document.getElementById('root')); // Création du point de rendu React

root.render( // Rendu de l'application React
  <React.StrictMode> {/* Active le mode strict de React */}
    <Provider store={store}>
      <BrowserRouter>
          <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
