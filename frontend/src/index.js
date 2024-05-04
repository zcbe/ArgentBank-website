import React from 'react'; 
import ReactDOM from 'react-dom/client'; // Importation de la méthode ReactDOM.createRoot()
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importation des composants de routage de React Router
import { Provider } from 'react-redux'; // Importation du composant Provider de Redux pour fournir le store Redux
import store from './redux/store.jsx'; // Importation du store Redux configuré
import Header from './components/header.jsx'; 
import Home from './pages/home/home.jsx'; 
import Login from './pages/login/login.jsx'; 
import Profile from './pages/profile/profile.jsx';
import Error from './pages/errorPage/errorPage.jsx'; 
import './sass/_Main.scss'; 

const root = ReactDOM.createRoot(document.getElementById('root')); // Création du point de rendu React

root.render( // Rendu de l'application React
  <React.StrictMode> {/* Active le mode strict de React */}
    <Provider store={store}> {/* Fournit le store Redux à l'ensemble de l'application */}
      <Router> {/* Définit le composant Router de React Router pour gérer la navigation */}
        <Header /> {/* Affiche le composant Header */}
        <Routes> {/* Définit un groupe de routes */}
          <Route path='/' element={<Home />} />
          <Route path='login' element={<Login />} /> 
          <Route path='profile' element={<Profile />} /> 
          <Route path='*' element={<Error />} /> 
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
);
