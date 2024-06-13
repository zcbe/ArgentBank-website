// Composant qui  gère l'en-tête du site en affichant le logo de la banque et en fournissant des liens pour se connecter et se déconnecter, 
//en fonction de l'état d'authentification de l'utilisateur, tout en utilisant Redux pour la gestion de l'état global et React Router pour la navigation.

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/argentbanklogo.webp';
import { logout } from '../redux/slices/authSlice.js';
import '../sass/components/_header.scss';

function Header() {
    const isConnected = useSelector((state) => state.auth.token); // Utilise le hook useSelector pour extraire le jeton d'authentification du store Redux.
    const username = useSelector((state) => state.user.userData.username);  // Utilise le hook useSelector pour extraire le username de l'utilisateur du store Redux.


    const dispatch = useDispatch(); // Initialise useDispatch pour déclencher des actions Redux

    // Fonction pour gérer la déconnexion de l'utilisateur
    const logoutHandler = () => {
        dispatch(logout()); // Déclenche l'action de déconnexion
    };



    return (
        <header>
            <h1 className='sr-only'>Argent Bank</h1> 
            <nav>
                <Link to="/">
                    <img src={Logo} width="200" height="55" alt="Bank Logo" />
                </Link> 
                {isConnected ? ( 
                    <div className='connected'> {/* Condition : affichage différent selon l'état de connexion */}
                        <Link to='/profile'>
                            <i className='fa-solid fa-2x fa-circle-user' />
                            <p>{username}</p>
                        </Link>
                        <Link to='/' onClick={logoutHandler}> {/* Lien pour déclencher la déconnexion */}
                            <i className='fa-solid fa-arrow-right-from-bracket' />
                            <p> Sign out </p>
                        </Link>
                    </div>
                ) : (
                    <div className='not-connected'>
                        <Link to='/login' >
                            <i className="fa-solid fa-circle-user"></i>
                            <p>Sign In</p>
                        </Link>
                    </div>
                )}
            </nav>
        </header>
    ) 
}

export default Header