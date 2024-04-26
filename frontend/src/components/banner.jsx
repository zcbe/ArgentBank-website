import React from 'react';
import '../sass/components/_banner.scss';

function Banner () {
    return (
        <div className='banner'>
            <section className='introduction'>
                <h2 className='sr-only'>Promoted Content</h2>
                <p className='subtitle'>No fees.</p>
                <p className='subtitle'>No minimum deposit.</p>
                <p className='subtitle'>High interest rates.</p>
                <p className='text'>Open a savings account with Argent Bank today!</p>
            </section>
        </div>
    )
}

export default Banner