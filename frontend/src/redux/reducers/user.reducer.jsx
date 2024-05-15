import { GET_USERPROFILE, EDIT_USERNAME, LOGOUT } from "../actions/type.actions"; // Importe les types d'actions depuis le fichier type.actions

// État initial du reducer utilisateur
const initialState = {
    status: "VOID", // État de la requête (initialisé à "VOID" par défaut)
    firstname: null, // Prénom de l'utilisateur (null par défaut)
    lastname: null, // Nom de famille de l'utilisateur (null par défaut)
    username: null // Nom d'utilisateur (null par défaut)
}

// Reducer pour gérer les actions liées à l'utilisateur
export const userReducer = (state = initialState, action ) => {
    switch (action.type) {
        case GET_USERPROFILE: // Action pour récupérer le profil utilisateur
            return {
                ...state,
                status: "SUCCEEDED", // Met à jour le statut de la requête à "SUCCEEDED"
                firstname: action.payload.firstname, // Met à jour le prénom de l'utilisateur avec les données du payload
                lastname: action.payload.lastname, // Met à jour le nom de famille de l'utilisateur avec les données du payload
                username: action.payload.username // Met à jour le nom d'utilisateur avec les données du payload
            }
        case EDIT_USERNAME: // Action pour éditer le nom d'utilisateur
            return {
                ...state,
                status: "MODIFIED", // Met à jour le statut de la requête à "MODIFIED"
                username: action.payload // Met à jour le nom d'utilisateur avec les données du payload
            }
        case LOGOUT: // Action pour déconnecter l'utilisateur
            return initialState; // Réinitialise l'état de l'utilisateur à l'état initial
        default:
            return state; // Retourne l'état actuel si aucune action correspondante n'est trouvée
    }
}
