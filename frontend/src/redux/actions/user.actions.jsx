// actions pour mettre à jour le profil utilisateur dans le store redux

import { GET_USERPROFILE, EDIT_USERNAME } from "./type.actions"; // Importe les types d'actions depuis le fichier type.actions

// Action creator pour mettre à jour le profil utilisateur dans le store Redux
export const userProfile = (firstname, lastname, username) => {
    return {
        type: GET_USERPROFILE, // Type d'action pour récupérer le profil utilisateur
        payload: {firstname, lastname, username}, // Données du profil utilisateur à envoyer au reducer
    
    }
}
// Action creator pour mettre à jour le nom d'utilisateur dans le store Redux
export const updateUsername = (username) => {
    return {
        type: EDIT_USERNAME, // Type d'action pour éditer le nom d'utilisateur
        payload: username, // Nouveau nom d'utilisateur à envoyer au reducer
    }
}