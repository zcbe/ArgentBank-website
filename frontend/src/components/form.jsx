import React, { useState } from 'react'; // Importer le hook useState de React pour gérer l'état local dans un composant fonctionnel.
import { useDispatch } from 'react-redux'; // Importer le hook useDispatch de Redux pour envoyer des actions au store Redux.
import { useNavigate } from 'react-router-dom'; // Importer le hook useNavigate de React Router pour la navigation programmée.
import { loginFailed, loginSuccess } from '../redux/slices/authSlice.js'; // Importer les actions Redux pour la gestion de l'authentification.
import { isValidEmail, isValidPassword } from '../utils/regex.js';  // Importer les fonctions de validation des emails et mots de passe.
import '../sass/components/_form.scss';

function Form() {
   // Définit les états locaux pour le formulaire.
   const [email, setEmail] = useState(''); // État pour l'email.
   const [password, setPassword] = useState(''); // État pour le mot de passe.
   const [rememberMe, setRememberMe] = useState(false); // État pour la case à cocher "se souvenir de moi".
   const [errorMessage, setErrorMessage] = useState(''); // État pour les erreurs de formulaire.
   const navigate = useNavigate(); // Fonction de navigation de React Router.
   const dispatch = useDispatch(); // Fonction pour envoyer des actions Redux.

   // Fonction appelée lors de la soumission du formulaire.
   const handleSubmit = async (event) => {
       event.preventDefault(); // Empêche le rechargement de la page par défaut lors de la soumission du formulaire.

       // Validation de l'email.
       if (!isValidEmail(email)) {
           setErrorMessage("Invalid email address");
           console.log("Error message updated:", "Invalid email address");
           return;
       }

       // Validation du mot de passe.
       if (!isValidPassword(password)) {
           setErrorMessage("Invalid password");
           console.log("Error message updated:", "Invalid password");
           return;
       }

       try {
           // Envoi de la requête de connexion au serveur.
           const response = await fetch("http://localhost:3001/api/v1/user/login", {
               method: "POST",
               headers: {
                   "Content-Type": "application/json",
               },
               body: JSON.stringify({ email, password }),
           });

           // Traitement de la réponse du serveur.
           if (response.ok) { // Si la réponse est réussie (statut 200).
               const data = await response.json(); // Extraction des données JSON de la réponse.
               console.log(data);
               const token = data.body.token; // Récupération du jeton d'authentification.
               dispatch(loginSuccess(token)); // Envoie d'une action Redux pour signaler une connexion réussie.
               sessionStorage.setItem("token", token);
               if (rememberMe) {
                   localStorage.setItem("token", token);
               }
               navigate('/profile'); // Redirection vers la page de profil.
           } else { // Si la réponse est un échec.
               const error = "Incorrect email or password";
               setErrorMessage(error); // Met à jour le message d'erreur.
               dispatch(loginFailed(error)); // Envoie d'une action Redux pour signaler une erreur de connexion.
           }
       } catch (error) {
           console.error(error); // Affiche les erreurs dans la console en cas d'erreur lors de la requête.
           setErrorMessage("An error occurred. Please try again later."); // Met à jour le message d'erreur en cas d'erreur inattendue.
       }
   };

   // Rendu de l'interface utilisateur.
   return (
       <section className='sign-in-content'>
           <i className="fa-solid fa-circle-user"></i>
           <h2>Sign In</h2>
           <form onSubmit={handleSubmit}>
               <div className='input-wrapper'>
                   <label htmlFor='username'>Username</label>
                   <input
                       id='username'
                       type='text'
                       value={email}
                       onChange={(event) => setEmail(event.target.value)}
                   />
               </div>
               <div className='input-wrapper'>
                   <label htmlFor='password'>Password</label>
                   <input
                       id='password'
                       type='password'
                       value={password}
                       onChange={(event) => setPassword(event.target.value)}
                   />
               </div>
               <div className='input-remember'>
                   <input
                       id='remember-me'
                       type='checkbox'
                       checked={rememberMe}
                       onChange={(event) => {
                        console.log("Remember me checked:", event.target.checked);
                        setRememberMe(event.target.checked);
                    }}
                   />
                   <label htmlFor='remember-me'>Remember me</label>
               </div>
               <button className="sign-in-button">
                   Sign In
               </button>
               {errorMessage && <p className='error-message'>{errorMessage}</p>}
           </form>
       </section>
   );
}

export default Form;
