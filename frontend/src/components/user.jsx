import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUsername } from '../redux/slices/userSlice.js';
import { isValidName } from "../utils/regex.js";
import '../sass/components/_UserProfile.scss'; 

function User() {
    const token = useSelector((state) => state.auth.token);
    const userData = useSelector((state) => state.user.userData);

    const [display, setDisplay] = useState(true);
    const [userName, setUserName] = useState('');
    const [initialUserName, setInitialUserName] = useState(''); // Nouvel état pour le nom d'utilisateur initial
    const [errorMessage, setErrorMessage] = useState('');

    const dispatch = useDispatch();

    useEffect(() => {
        const storedUsername = localStorage.getItem(`username_${userData.id}`);
        if (storedUsername) {
            setUserName(storedUsername);
            setInitialUserName(storedUsername); // Initialisez également initialUserName
        } else {
            setUserName(userData.username || '');
            setInitialUserName(userData.username || ''); // Initialisez également initialUserName
        }
    }, [userData]);

    useEffect(() => {
        if (!isValidName(userName)) {
            setErrorMessage("Invalid username");
        } else {
            setErrorMessage("");
        }
    }, [userName]);

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
                dispatch(updateUsername(username));
                localStorage.setItem(`username_${userData.id}`, username);
                setInitialUserName(username); // Mettez à jour initialUserName
                setDisplay(true);
            } else {
                console.log("Invalid Fields");
            }
        } catch (error) {
            console.error(error);
        }
    }

    const handleSave = (event) => {
        event.preventDefault();
        handleSubmitUsername(event);
    }

    const handleCancel = () => {
        setUserName(initialUserName); // Réinitialisez userName à initialUserName
        setDisplay(true);
    }

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
