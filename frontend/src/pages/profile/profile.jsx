import React from 'react';
import Header from '../../components/header.jsx';
import User from '../../components/user.jsx';
import Account from '../../components/account.jsx';
import Footer from '../../components/footer.jsx';
import AccountCardData from '../../data/AccountCardData.json';
import '../../sass/pages/_profile.scss';

function UserProfile () {
    return (
        <div className='profile-page'>
            < Header />
            <main className='bg-dark'>
                < User firstname="Tony" lastname="Jarvis" />
                {AccountCardData.map((data) => (
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