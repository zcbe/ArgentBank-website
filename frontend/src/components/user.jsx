import React from "react";
import '../sass/components/_UserProfile.scss';

function User ({ firstname, lastname }) {
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