// Importe la fonction createSlice de Redux Toolkit
import { createSlice } from '@reduxjs/toolkit';

// Définit l'état initial du slice utilisateur
const initialState = {
  status: 'VOID', // État de la requête (initialisé à "VOID" par défaut)
  userData: {}, // Les données du profil utilisateur sont initialement vides
};

// Crée un slice utilisateur avec le nom 'user' et l'état initial
const userSlice = createSlice({
  name: 'user', // Nom du slice utilisateur
  initialState, // État initial du slice
  reducers: {
    // Reducer pour mettre à jour le profil utilisateur
    userProfile: (state, action) => {
      state.status = 'SUCCEEDED'; // Met à jour le statut de la requête à "SUCCEEDED"
      state.userData = action.payload; // Met à jour les données du profil utilisateur avec les données reçues dans l'action payload
    },
    // Reducer pour mettre à jour le nom d'utilisateur
    updateUsername: (state, action) => {
      state.status = 'MODIFIED'; // Met à jour le statut de la requête à "MODIFIED"
      state.userData.username = action.payload; // Met à jour le nom d'utilisateur avec la valeur reçue dans l'action payload
    },
    // Reducer pour gérer la déconnexion de l'utilisateur
    logout: (state) => {
      return initialState; // Réinitialise l'état de l'utilisateur à l'état initial lors de la déconnexion sans supprimer le nom d'utilisateur du stockage local
    },
  },
});

// Extrait les actions (userProfile, updateUsername, logout) du slice utilisateur
export const { userProfile, updateUsername, logout } = userSlice.actions;

// Exporte le réducteur du slice utilisateur
export default userSlice.reducer;
