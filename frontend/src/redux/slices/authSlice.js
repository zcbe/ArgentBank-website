import { createSlice } from '@reduxjs/toolkit';

// Définir l'état initial pour le slice d'authentification.
const initialState = {
  status: 'VOID', // État de connexion initial ("VOID" par défaut)
  isConnected: false, // État de connexion initial (déconnecté par défaut)
  token: null, // Jeton d'authentification initial (null par défaut)
  error: null, // Erreur de connexion initiale (null par défaut)
};

// Créer un slice d'authentification avec le nom 'auth' et l'état initial.
const authSlice = createSlice({
  name: 'auth', // Nom du slice d'authentification
  initialState, // État initial du slice
  reducers: {
    // Réducteur pour gérer une connexion réussie.
    loginSuccess: (state, action) => {
      state.status = 'SUCCEEDED'; // Mettre à jour l'état de connexion à 'SUCCEEDED'
      state.isConnected = true; // Mettre à jour l'état de connexion à connecté
      state.token = action.payload; // Mettre à jour le jeton d'authentification avec celui fourni dans l'action
      state.error = null; // Réinitialiser l'erreur à null
    },
    // Réducteur pour gérer une tentative de connexion échouée.
    loginFailed: (state, action) => {
      state.status = 'FAILED'; // Mettre à jour l'état de connexion à 'FAILED'
      state.isConnected = false; // Mettre à jour l'état de connexion à déconnecté
      state.error = action.payload; // Mettre à jour l'erreur avec celle fournie dans l'action
    },
    // Réducteur pour gérer la déconnexion de l'utilisateur.
    logout: () => initialState, // Retourner l'état initial du slice lors de la déconnexion
  },
});

// Extraire les actions (loginSuccess, loginFailed, logout) du slice d'authentification.
export const { loginSuccess, loginFailed, logout } = authSlice.actions;

// Exporter le réducteur du slice d'authentification.
export default authSlice.reducer;
