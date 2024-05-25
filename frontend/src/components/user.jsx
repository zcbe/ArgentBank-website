// Composant qui permet à l'utilisateur de consulter et de modifier ses informations de profil en utilisant Redux pour la gestion de l'état global et des hooks React pour la gestion des états locaux 

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux"; // Importe la fonction useSelector de Redux pour accéder à l'état global
import { updateUsername } from '../redux/slices/userSlice.js';
import { isValidName } from "../utils/regex.js";
import '../sass/components/_UserProfile.scss';

function User() { // Définit le composant fonctionnel User
    const token = useSelector((state) => state.auth.token);    // Utilise useSelector pour extraire le jeton d'authentification du store Redux
    const userData = useSelector((state) => state.user.userData);     // Utilise useSelector pour extraire les données utilisateur du store Redux

    const [display, setDisplay] = useState(true); // État local pour contrôler l'affichage du profil ou du formulaire d'édition
    const [userName, setUserName] = useState('');  // État local pour stocker la valeur en cours d'édition du nom d'utilisateur
    const [errorMessage, setErrorMessage] = useState('');
    const dispatch = useDispatch(); // Crée une fonction dispatch pour envoyer des actions à Redux

    

    const handleSubmitUsername = async (event) => { // Fonction pour gérer la soumission du nom d'utilisateur modifié
        event.preventDefault();  // Empêche le comportement par défaut du formulaire de recharge de la page
        console.log(JSON.stringify({userName})); // Vérifie le format de la requête

        if (!isValidName(userName)) {
            setErrorMessage("Invalid username"); // Définit un message d'erreur si le nom d'utilisateur n'est pas valide
            return; // Arrête l'exécution de la fonction
        } else {
            setErrorMessage(""); // Efface le message d'erreur s'il n'y a pas de problème de validation
        }
        try {
            const response = await fetch('http://localhost:3001/api/v1/user/profile', { // Effectue une requête HTTP PUT pour mettre à jour le profil utilisateur
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`, // Inclut le token d'authentification dans l'en-tête de la requête
                },
                body: JSON.stringify({userName}), // Corps de la requête contenant le nouveau nom d'utilisateur
            });
            if (response.ok) { // Vérifie si la réponse de la requête est réussie
                const data = await response.json(); // Récupère les données renvoyées par la requête
                console.log(data); // Vérifie la réponse de la requête
                const username = data.body.userName;
                console.log(data); // Affiche les données dans la console
                dispatch(updateUsername(username));  // Met à jour le nom d'utilisateur dans le store Redux et change l'affichage pour revenir au profil
                setDisplay(!display);
            } else {
                console.log("Invalid Fields") // Affiche un message d'erreur si les champs sont invalides
            }
        } catch (error) {
            console.error(error); // Gère les erreurs potentielles lors de l'exécution de la requête
        }
    }
        const handleSave = (event) => {
                event.preventDefault(); // Empêcher le comportement par défaut du formulaire
                handleSubmitUsername(event); // Enregistrer les modifications du nom d'utilisateur
                setDisplay(true); // Réinitialiser l'affichage pour revenir à l'affichage du profil
            }
        
            const handleCancel = () => {
                setDisplay(true); // Réinitialiser l'affichage pour revenir à l'affichage du profil
            }
        
        


    return (
        <div className="header">
         { display ? // Rendu conditionnel en fonction de la valeur de display
                <div>
                    <h2>Welcome back 
                        <br />
                        {userData.firstname} {userData.lastname} !
                    </h2>
                    <button className="edit-button" onClick={() => setDisplay(!display)}>Edit Name</button>
                </div>
                :
                <div>
                    <h2>Edit user info</h2>
                    <form>
                        <div className="edit-input">
                            <label htmlFor="username">User name:</label>
                            <input
                                type="text"
                                id="username"
                                defaultValue={userData.username}
                                onChange={(event) => setUserName(event.target.value)} // Met à jour l'état local userName lorsqu'il y a un changement dans le champ de saisie
                            />
                        </div>
                        <div className="edit-input">
                            <label htmlFor="firstname">First name:</label>
                            <input
                                type="text"
                                id="firstname" 
                                defaultValue={userData.firstname}
                                disabled={true} 
                            />
                        </div>
                        <div className="edit-input">
                            <label htmlFor="lastname">Last name:</label>
                            <input
                                type="text"
                                id="lastname" 
                                defaultValue={userData.lastname}
                                disabled={true} 
                            />
                        </div>
                        <div className="buttons">
                            <button className="edit-username-button" onClick={(event) => handleSave(event)}>Save</button>
                            <button className="edit-username-button" onClick={handleCancel}>Cancel</button>
                        </div>
                        {errorMessage && <p className="error-message">{errorMessage}</p>}
                    </form>
                    </div>
                    }
                    </div>

    )
}

export default User
