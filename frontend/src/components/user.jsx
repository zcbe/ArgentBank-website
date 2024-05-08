// Composant qui permet à l'utilisateur de consulter et de modifier ses informations de profil en utilisant Redux pour la gestion de l'état global et des hooks React pour la gestion des états locaux 

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux"; // Importe la fonction useSelector de Redux pour accéder à l'état global
import '../sass/components/_UserProfile.scss';

function User() { // Définit le composant fonctionnel User
    const token = useSelector((state) => state.auth.token);
    // Utilise useSelector pour extraire le prénom de l'utilisateur à partir de l'état global
    const firstname = useSelector((state) => state.auth.user.firstname);
    // Utilise useSelector pour extraire le nom de famille de l'utilisateur à partir de l'état global
    const lastname = useSelector((state) => state.auth.user.lastname);
    const username = useSelector((state) => state.auth.user.username);
    const [display, setDisplay] = useState(true); // État local pour contrôler l'affichage du profil ou du formulaire d'édition
    const [userName, setUserName] = useState('');  // État local pour stocker la valeur en cours d'édition du nom d'utilisateur
    const dispatch = useDispatch(); // Crée une fonction dispatch pour envoyer des actions à Redux

    const handleSubmitUsername = async (event) => { // Fonction pour gérer la soumission du nom d'utilisateur modifié
        event.preventDefault();  // Empêche le comportement par défaut du formulaire de recharge de la page
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
                console.log(data); // Affiche les données dans la console
                dispatch({ // Dispatch une action Redux pour mettre à jour le nom d'utilisateur dans le store global
                    type: 'EDIT_USERNAME',
                    payload: {username: data.body.userName}, // Payload contenant le nouveau nom d'utilisateur
                });
            } else {
                console.log("Invalid Fields") // Affiche un message d'erreur si les champs sont invalides
            }
        } catch (error) {
            console.error(error); // Gère les erreurs potentielles lors de l'exécution de la requête
        }
    }


    return (
        <div className="header">
         { display ? // Rendu conditionnel en fonction de la valeur de display
                <div>
                    <h2>Welcome back 
                        <br />
                        {firstname} {lastname} !
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
                                defaultValue={username} 
                                onChange={(event) => setUserName(event.target.value)} // Met à jour l'état local userName lorsqu'il y a un changement dans le champ de saisie
                            />
                        </div>
                        <div className="edit-input">
                            <label htmlFor="firstname">First name:</label>
                            <input
                                type="text"
                                id="firstname" 
                                defaultValue={firstname}
                                disabled={true} 
                            />
                        </div>
                        <div className="edit-input">
                            <label htmlFor="lastname">Last name:</label>
                            <input
                                type="text"
                                id="lastname" 
                                defaultValue={lastname}
                                disabled={true} 
                            />
                        </div>
                        <div className="buttons">
                            <button className="edit-username-button">Save</button>
                            <button className="edit-username-button" onClick={handleSubmitUsername}>Save</button>
                        </div>
                    </form>
                </div>
            }
        </div>
    )
}

export default User

