import React from 'react';
import Logo from '../assets/img/argentBankLogo.png';
import { Link } from 'react-router-dom';
import '../sass/components/_header.scss';

function Header () {
    return (
        <header>
            <h1 className='sr-only'>Argent Bank</h1>
            <nav>
                <Link to="/">
                    <img src={Logo} alt="Bank Logo" />
                </Link> 
                <Link to='/login' className='not-connected'>
                    <i className="fa-solid fa-circle-user"></i>
                    <p>Sign In</p>
                </Link>
                <div className='connected'>
                    <Link to='/Profile'>
                        <i className='fa-solid fa-2x fa-circle-user' />
                        { /* A changer lors de la récupération des comptes via API*/}
                        <p> Tony  </p>
                    </Link>
                    <Link to='/'>
                        <i className='fa-solid fa-arrow-right-from-bracket' />
                        <p> Sign out </p>
                    </Link>
                </div>
            </nav>
        </header>
    ) 
}

export default Header