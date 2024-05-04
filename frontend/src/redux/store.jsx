import { configureStore } from '@reduxjs/toolkit'; // Importe la fonction configureStore de Redux Toolkit pour configurer le magasin Redux
import { combineReducers } from '@reduxjs/toolkit';// Importe la fonction combineReducers de Redux Toolkit pour combiner plusieurs réducteurs en un seul
import { authReducer } from './reducers/auth.reducer.jsx';

// Définition d'un objet initialState représentant l'état initial de l'application, pour le système d'autentification
export const initialState = {
    status: "VOID",
    isConnected: false,
    user: {
        id: "",
        firstname: "",
        lastname: "",
        username: "",
    },
    token: "",
    error: null
}

// Combine les réducteurs en un seul réducteur racine
const rootReducer = combineReducers({
   auth: authReducer,
   // user: userReducer, // Si nécessaire, décommentez et ajoutez le réducteur userReducer ici
})

// Configure le magasin Redux avec le réducteur racine et les outils de développement activés
const store = configureStore({
    reducer: rootReducer,
    devTools: true 
})

// Exporte le magasin configuré par défaut pour être utilisé dans d'autres parties de l'application
export default store
