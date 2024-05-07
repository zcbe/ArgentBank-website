// Importe l'état initial de l'application depuis le fichier store
import { initialState } from "../store";

// Importe les types d'actions depuis un fichier qui contient les définitions des types d'actions utilisés dans l'application
import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  GET_USERPROFILE,
  EDIT_USERNAME,
} from "../actions/type.actions";

// Définit un réducteur (authReducer) responsable de gérer l'état lié à l'authentification
export const authReducer = (state = initialState, action) => {
  // Utilise une instruction switch pour examiner le type d'action
  switch (action.type) {
    // Si le type d'action correspond à LOGIN_SUCCESS, le code suivant est exécuté
    case LOGIN_SUCCESS:
      // Retourne un nouvel objet d'état avec les propriétés mises à jour en fonction de l'action LOGIN_SUCCESS
      return {
        ...state,
        status: "CONNECTED",
        isConnected: true,
        token: action.payload,
        error: null,
      };

    // Si le type d'action correspond à LOGIN_FAIL, le code suivant est exécuté
    case GET_USERPROFILE: {
      // Retourne un nouvel objet d'état avec les informations du profil utilisateur mises à jour
      return {
        ...state,
        status: "SUCCEEDED",
        user: {
          ...state.user,
          firstname: action.payload.firstname,
          lastname: action.payload.lastname,
          username: action.payload.username,
        },
      };
    }

    case EDIT_USERNAME: // Action type EDIT_USERNAME, généralement déclenchée lorsqu'un utilisateur modifie son nom d'utilisateur
      return {
        // Retourne un nouvel état global
        ...state, // Déstructure l'état actuel pour garantir l'immutabilité
        status: "MODIFIED", // Met à jour le statut pour indiquer que le nom d'utilisateur a été modifié
        user: {
          // Met à jour les informations de l'utilisateur
          ...state.user, // Déstructure les informations utilisateur actuelles
          username: action.payload.username, // Met à jour le nom d'utilisateur avec la nouvelle valeur provenant de l'action payload
        },
      };

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
