// Importe la fonction configureStore de Redux Toolkit pour configurer le store Redux
import { configureStore } from '@reduxjs/toolkit';

// Importe les réducteurs (reducers) du slice d'authentification et du slice utilisateur
import authReducer from './slices/authSlice';
import userReducer from './slices/userSlice';

// Configure le store Redux avec les réducteurs d'authentification et d'utilisateur
const store = configureStore({
  reducer: {
    auth: authReducer, // Utilise le réducteur d'authentification pour gérer l'état d'authentification dans le store sous la clé 'auth'
    user: userReducer, // Utilise le réducteur utilisateur pour gérer l'état utilisateur dans le store sous la clé 'user'
  },
});

// Exporte le store configuré
export default store;
