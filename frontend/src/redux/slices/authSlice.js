import { createSlice } from '@reduxjs/toolkit';

// Fonction utilitaire pour récupérer l'état initial de l'authentification à partir du stockage local
const getInitialAuthState = () => {
  const isConnected = localStorage.getItem('isConnected') === 'true';
  const token = localStorage.getItem('token');
  return {
    status: isConnected ? 'SUCCEEDED' : 'VOID', // Mettre l'état de connexion à 'SUCCEEDED' si isConnected est true, sinon 'VOID'
    isConnected, // Utiliser l'état de connexion récupéré du stockage local
    token: isConnected ? token : null, // Utiliser le jeton récupéré du stockage local si isConnected est true
    error: null,
  };
};

// Créer un slice d'authentification avec le nom 'auth' et l'état initial.
const authSlice = createSlice({
  name: 'auth', // Nom du slice d'authentification
  initialState: getInitialAuthState(), // Utiliser la fonction getInitialAuthState pour obtenir l'état initial
  reducers: {
    // Réducteur pour gérer une connexion réussie.
    loginSuccess: (state, action) => {
      state.status = 'SUCCEEDED'; // Mettre à jour l'état de connexion à 'SUCCEEDED'
      state.isConnected = true; // Mettre à jour l'état de connexion à connecté
      state.token = action.payload; // Mettre à jour le jeton d'authentification avec celui fourni dans l'action
      state.error = null; // Réinitialiser l'erreur à null

      // Mettre à jour le stockage local avec les nouvelles données de connexion
      localStorage.setItem('isConnected', true);
      localStorage.setItem('token', action.payload);
    },
    // Réducteur pour gérer une tentative de connexion échouée.
    loginFailed: (state, action) => {
      state.status = 'FAILED'; // Mettre à jour l'état de connexion à 'FAILED'
      state.isConnected = false; // Mettre à jour l'état de connexion à déconnecté
      state.error = action.payload; // Mettre à jour l'erreur avec celle fournie dans l'action

      // Supprimer les données de connexion du stockage local en cas d'échec de connexion
      localStorage.removeItem('isConnected');
      localStorage.removeItem('token');
    },
    // Réducteur pour gérer la déconnexion de l'utilisateur.
    logout: () => {
      // Nettoyer l'état et le stockage local lors de la déconnexion
      localStorage.removeItem('isConnected');
      localStorage.removeItem('token');
      return getInitialAuthState(); // Retourner l'état initial du slice
    },
  },
});

// Extraire les actions (loginSuccess, loginFailed, logout) du slice d'authentification.
export const { loginSuccess, loginFailed, logout } = authSlice.actions;

// Exporter le réducteur du slice d'authentification.
export default authSlice.reducer;
