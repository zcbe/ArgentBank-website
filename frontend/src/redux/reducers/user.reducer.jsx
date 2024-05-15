import { GET_USERPROFILE, EDIT_USERNAME, LOGOUT } from "../actions/type.actions"; // Importe les types d'actions depuis le fichier type.actions

// État initial du reducer utilisateur
const initialState = {
    status: "VOID", // État de la requête (initialisé à "VOID" par défaut)
    userData: {} // Les données du profil utilisateur sont initialement vides
}

// Reducer pour gérer les actions liées à l'utilisateur
export const userReducer = (state = initialState, action ) => {
    switch (action.type) {
        case GET_USERPROFILE: // Action pour récupérer le profil utilisateur
            return {
                ...state,
                status: "SUCCEEDED", // Met à jour le statut de la requête à "SUCCEEDED"
                userData: action.payload // Met à jour les données du profil utilisateur avec les données reçues dans l'action payload
            }
        case EDIT_USERNAME: // Action pour éditer le nom d'utilisateur
            return {
                ...state,
                status: "MODIFIED", // Met à jour le statut de la requête à "MODIFIED"
                userData: {
                    ...state.userData,
                    username: action.payload // Met à jour le nom d'utilisateur avec la valeur reçue dans l'action payload
                }             }
        case LOGOUT: // Action pour déconnecter l'utilisateur
            return initialState; // Réinitialise l'état de l'utilisateur à l'état initial
        default:
            return state; // Retourne l'état actuel si aucune action correspondante n'est trouvée
    }
}
