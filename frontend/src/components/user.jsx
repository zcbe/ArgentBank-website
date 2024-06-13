import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUsername } from '../redux/slices/userSlice.js';
import { isValidName } from "../utils/regex.js";
import '../sass/components/_UserProfile.scss'; 

function User() {
    // Utilisation des hooks useSelector et useDispatch pour accéder au state et dispatcher des actions Redux
    const token = useSelector((state) => state.auth.token); // Récupération du token d'authentification
    const userData = useSelector((state) => state.user.userData); // Récupération des données utilisateur

    // Utilisation de useState pour gérer l'état de l'affichage et du nom d'utilisateur
    const [display, setDisplay] = useState(true); // État de l'affichage du formulaire de modification
    const [userName, setUserName] = useState(''); // État du nom d'utilisateur

    // Utilisation de useState pour gérer le message d'erreur
    const [errorMessage, setErrorMessage] = useState(''); // État du message d'erreur

    const dispatch = useDispatch(); // Récupération de la fonction dispatch pour envoyer des actions Redux

    // Utilisation de useEffect pour mettre à jour le nom d'utilisateur à partir du stockage local lors du chargement initial
    useEffect(() => {
        const storedUsername = localStorage.getItem(`username_${userData.id}`);
        if (storedUsername) {
            setUserName(storedUsername);
        } else {
            setUserName(userData.username || '');
        }
    }, [userData]);

    // Utilisation de useEffect pour valider le nom d'utilisateur à chaque changement
    useEffect(() => {
        if (!isValidName(userName)) {
            setErrorMessage("Invalid username");
        } else {
            setErrorMessage("");
        }
    }, [userName]);

    // Fonction pour gérer la soumission du formulaire de modification du nom d'utilisateur
    const handleSubmitUsername = async (event) => {
        event.preventDefault();
        if (errorMessage) return;

        try {
            const response = await fetch('http://localhost:3001/api/v1/user/profile', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify({ userName }),
            });
            if (response.ok) {
                const data = await response.json();
                const username = data.body.userName;
                dispatch(updateUsername(username)); // Dispatch de l'action updateUsername avec le nouveau nom d'utilisateur
                localStorage.setItem(`username_${userData.id}`, username); // Enregistre le nom d'utilisateur dans le stockage local avec une clé unique
                setDisplay(true); // Réinitialisation de l'affichage à true
            } else {
                console.log("Invalid Fields");
            }
        } catch (error) {
            console.error(error);
        }
    }

    // Fonction pour gérer l'enregistrement des modifications du nom d'utilisateur
    const handleSave = (event) => {
        event.preventDefault();
        handleSubmitUsername(event);
    }

    // Fonction pour annuler la modification du nom d'utilisateur et réinitialiser l'affichage
    const handleCancel = () => {
        setDisplay(true);
    }

    // Rendu du composant User
    return (
        <div className="header">
            { display ?
                <div>
                    <h2>Welcome back 
                        <br />
                        {userData.firstname} {userData.lastname} !
                    </h2>
                    <button className="edit-button" onClick={() => setDisplay(false)}>Edit Name</button>
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
                                value={userName}
                                onChange={(event) => setUserName(event.target.value)}
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

export default User;
