//Reducers est utilisé dans le store Redux de l'application pour gérer les mises à jour de l'état d'authentification en réponse aux actions dispatch.

import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from "../actions/type.actions";

const initialState = {
  status: "VOID",
  isConnected: false,
  token: null,
  error: null,
}

// Définit un réducteur (authReducer) responsable de gérer l'état lié à l'authentification
export const authReducer = (state = initialState, action) => {
  // Utilise une instruction switch pour examiner le type d'action
  switch (action.type) {
    // Si le type d'action correspond à LOGIN_SUCCESS, le code suivant est exécuté
    case LOGIN_SUCCESS:
      // Retourne un nouvel objet d'état avec les propriétés mises à jour en fonction de l'action LOGIN_SUCCESS
      return {
        ...state,
        status: "SUCCEEDED",
        isConnected: true,
        token: action.payload,
        error: null,
      }
      
    case LOGIN_FAIL: {
      // Retourne un nouvel objet d'état avec les propriétés mises à jour en fonction de l'action LOGIN_FAIL
      return {
        ...state,
        status: "FAILED",
        isConnected: false,
        error: action.payload,
      };
    }

    // Si le type d'action correspond à LOGOUT, le code suivant est exécuté
    case LOGOUT: {
      // Retourne l'état initial de l'application, réinitialisant ainsi complètement l'état de l'authentification
      return initialState;
    }

    // Si le type d'action ne correspond à aucun des cas précédents, retourne simplement l'état sans effectuer de modification
    default:
      return state;
  }
};
