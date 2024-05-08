// Ces acions sont utilisées pour déclencher des changements dans le store Redux

// Importe les types d'actions 
import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from "./type.actions";

// Définit une action loginSuccess, qui est une fonction qui crée et retourne un objet d'action pour signaler une connexion réussie
export const loginSuccess = (token) => {
    return {
        type: LOGIN_SUCCESS, // Indique le type de l'action comme étant LOGIN_SUCCESS
        payload: token, // Contient les données associées à l'action, dans ce cas le token de l'utilisateur
    };
};

// Définit une action loginFailed, qui est une fonction qui crée et retourne un objet d'action pour signaler une tentative de connexion échouée
export const loginFailed = (error) => {
    return {
        type: LOGIN_FAIL, // Indique le type de l'action comme étant LOGIN_FAIL
        payload: error, // Contient les données associées à l'action, dans ce cas l'erreur survenue lors de la tentative de connexion
    };
};

// Définit une action logout, qui est une fonction qui crée et retourne un objet d'action pour signaler une déconnexion
export const logout = () => {
    return {
        type: LOGOUT, // Indique le type de l'action comme étant LOGOUT
    };
};
