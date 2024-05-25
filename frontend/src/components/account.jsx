import React from 'react'
import '../sass/components/_account.scss';

// Composant qui représente un compte avec un titre, un montant, et une description 
function Account ({ title, amount, description}) {
    return (
        <section className='account'>
            <h2 className='sr-only'>{title}</h2> {/* Providing the title as content */}
            <div className='account-content-wrapper'>
                <h3 className='account-title'>{title}</h3>
                <p className='account-amount'>{amount}</p>
                <p className='account-amount-description'>{description}</p>
            </div>
            <div className='account-content- wrapper cta'>
                <button className='transaction-button'>View transactions</button>
            </div>

        </section> 
    )
}

export default Account