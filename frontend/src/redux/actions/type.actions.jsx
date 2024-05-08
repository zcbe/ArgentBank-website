//Ces constantes sont utilisées dans les actions Redux pour identifier le type d'action à effectuer et sont également utilisées dans les reducers pour déterminer 
//comment mettre à jour l'état global en conséquence. En utilisant ces constantes, il est plus facile de maintenir un code cohérent et de prévenir les erreurs de typage 
//lors de l'utilisation des actions dans différentes parties de l'application.


/* SIGN IN */
// Constantes définissant les types d'actions pour l'authentification
export const LOGIN_SUCCESS = "LOGIN_SUCCESS"; // Action déclenchée en cas de connexion réussie
export const LOGIN_FAIL = "LOGIN_FAIL"; // Action déclenchée en cas d'échec de connexion
export const LOGOUT = "LOGOUT"; // Action déclenchée lors de la déconnexion
export const TOKEN_KEY = "TOKEN_KEY";

/* USER PROFILE */

export const GET_USERPROFILE = "GET_USERPROFILE"
export const EDIT_USERNAME = "EDIT_USERNAME"