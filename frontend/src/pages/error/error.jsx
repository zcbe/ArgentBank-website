import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Error from '../../assets/images/404-error.webp';
import '../../sass/pages/_error.scss';

function error () {
    return (
        <div className="error-page">
            <Header />
            <main>
                <section className="error">
                    <h2 className="sr-only">Error 404</h2>
                    <img src={Error} alt="error 404" className="green-error"/>
                    <p className="text-error">The requested page doesn't exist...</p>
                    <p className="text-error">Please return to homepage</p>
                    < Link to="/">
                        <button className="button-404">Back to the homepage</button>
                    </Link>
                </section>
            </main>
            <Footer />
        </div>
    )
}

export default error