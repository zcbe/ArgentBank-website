import React from 'react';
import Header from '../../components/header.jsx';
import Banner from '../../components/banner.jsx';
import Item from '../../components/item.jsx';
import Footer from '../../components/footer.jsx';
import FeaturesItemData from '../../data/FeaturesItemData.json';
import iconChat from '../../assets/img/icon-chat.png';
import iconMoney from '../../assets/img/icon-money.png';
import iconSecurity from '../../assets/img/icon-security.png';
import '../../sass/pages/_home.scss';


function Home () {
    const imageData = {
        "icon-chat.png": iconChat,
        "icon-money.png": iconMoney,
        "icon-security.png": iconSecurity
    }
    return (
            <div className='homepage'>
            <Header />
            <main>
                <Banner />
                <section className="features">
                    <h2 className='sr-only'>Features</h2>
                    {FeaturesItemData.map((data) => (
                        < Item 
                            key={data.id}
                            image={imageData[data.image]}
                            descriptionImage={data.descriptionImage}
                            title={data.title}
                            description={data.description}
                        />
                    ))}
                </section>
            </main>
            < Footer />
        </div>
    )
}
export default Home