//Composant repsente la page de connexion de l'application avec un formulaire de connexion 

import React from 'react';
import Form from '../../components/form.jsx';
import Footer from '../../components/footer.jsx';
import '../../sass/pages/_signin.scss';

function Login () {
    return (

        <div className='signin-page'>
            <main id='bg-dark'>
                < Form />
            </main>
            < Footer />
        </div>

    )
}
export default Login
