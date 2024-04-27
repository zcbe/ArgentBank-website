import React from 'react';
import Header from '../../components/header.jsx';
import User from '../../components/user.jsx';
import Account from '../../components/account.jsx';
import Footer from '../../components/footer.jsx';
import '../../sass/pages/_profile.scss';

function UserProfile () {
    return (
        <div className='profile-page'>
            < Header />
            <main className='bg-dark'>
                < User firstname="Tony" lastname="Jarvis" />
                < Account title="Argent Bank Checking (x8349)" amount="$2,082.79" description="Available Balance" />
                < Account title="Argent Bank Savings (x6712)" amount="$10,928.42" description="Available Balance" />
                < Account title="Argent Bank Credit Card (x8349)" amount="$184.30" description="Current Balance" />
            </main>
            < Footer />
        </div>
    )
}

export default UserProfile