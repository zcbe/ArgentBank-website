import React from "react";
import { useSelector } from "react-redux"; // Importe la fonction useSelector de Redux pour accéder à l'état global
import '../sass/components/_UserProfile.scss';

function User() { // Définit le composant fonctionnel User
    // Utilise useSelector pour extraire le prénom de l'utilisateur à partir de l'état global
    const firstname = useSelector((state) => state.auth.user.firstname);
    // Utilise useSelector pour extraire le nom de famille de l'utilisateur à partir de l'état global
    const lastname = useSelector((state) => state.auth.user.lastname);
    return (
        <div className="header">
            <h2>Welcome back 
                <br />
                {firstname} {lastname} !
            </h2>
            <button className="edit-button">Edit Name</button>
        </div>
    )
}

export default User
