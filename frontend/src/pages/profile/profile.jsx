// Composant qui represente la page de profil de l'utilisateur, avec des informations de profil affichées à l'aide du composant User,
// et des cartes d'utilisateur affichées à l'aide du compposant Account. 
//Les données du profil utilisateur sont récupérées à partir d'une API backend et stockées dans le store Redux pour une gestion centralisée de l'état.

import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userProfile } from '../../redux/slices/userSlice.js';
import User from '../../components/user.jsx';
import Account from '../../components/account.jsx';
import Footer from '../../components/footer.jsx';
import AccountCardData from '../../data/AccountCardData.json'; // Import des données des cartes d'utilisateur depuis un fichier JSON
import '../../sass/pages/_profile.scss';

function UserProfile () {
    const token = useSelector((state) => state.auth.token); // Récupération du token d'authentification depuis le store Redux
    const dispatch = useDispatch(); // Initialisation de la fonction dispatch pour envoyer des actions à Redux

    useEffect(() => { // Utilisation du hook useEffect pour effectuer des actions côté client lors du rendu du composant
        if (token) { // Vérification si l'utilisateur est connecté
            const userData = async () => { // Fonction asynchrone pour récupérer les données du profil utilisateur
                try {
                    const response = await fetch('http://localhost:3001/api/v1/user/profile', { // Requête POST pour récupérer les données du profil utilisateur
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${token}`, // Utilisation du token d'authentification dans l'en-tête de la requête
                        },
                    });
                    if (response.ok) { // Vérification si la requête s'est déroulée avec succès
                        const data = await response.json(); // Conversion de la réponse en JSON
                        console.log(data);
                        // Création d'un objet userData à partir des données reçues
                        const userData = {
                            createdAt: data.body.createdAt,
                            updatedAt: data.body.updatedAt,
                            id: data.body.id,
                            email: data.body.email,
                            firstname: data.body.firstName,
                            lastname: data.body.lastName,
                            username: data.body.userName
                        }
                        // Met à jour le profil utilisateur dans le store Redux
                        dispatch(userProfile(userData));
                    } else {
                        console.log("error while retrieving profile"); // Affichage d'un message d'erreur si la requête échoue
                    }
                } catch (error) {
                    console.error(error); // Gestion des erreurs
                };
            };
            userData(); // Appel de la fonction pour récupérer les données du profil utilisateur
        }
    }, [dispatch, token]); // Dépendances du hook useEffect pour s'assurer qu'il s'exécute uniquement lorsque ces valeurs changent

    return (
        <div className='profile-page'>
            <main className='flexible-content'>
                 < User /> {/* Affichage du composant User */}
                {AccountCardData.map((data) => (  // Boucle sur les données des cartes d'utilisateur pour afficher le composant Account
                    <Account 
                        key={data.id}
                        title={data.title}
                        amount={data.amount}
                        description={data.description}
                    />
                ))}
            </main>
            < Footer />
        </div>
    )
}

export default UserProfile