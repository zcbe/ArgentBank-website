import React from 'react';
import Header from '../../components/header.jsx';
import Banner from '../../components/banner.jsx';
import Item from '../../components/item.jsx';
import Footer from '../../components/footer.jsx';
import iconChat from '../../assets/img/icon-chat.png';
import iconMoney from '../../assets/img/icon-money.png';
import iconSecurity from '../../assets/img/icon-security.png';
import '../../sass/pages/_home.scss';


function Home () {
    return (
            <div className='homepage'>
            <Header />
            <main>
                <Banner />
                <section className="features">
                    <h2 className='sr-only'>Features</h2>
                    <Item 
                        image={iconChat}
                        descriptionImage="Chat Icon"
                        title="You are our #1 priority"
                        description="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes. "
                    />
                    <Item 
                        image={iconMoney}
                        descriptionImage="Money Icon"
                        title="More savings means higher rates"
                        description="The more you save with us, the higher your interest rate will be! "  
                    />                
                    <Item 
                        image={iconSecurity}
                        descriptionImage="Security Icon"
                        title="Security you can trust"
                        description="We use top of the line encryption to make sure your data and money is always safe. "
                    />
                </section>
            </main>
            < Footer />
        </div>
    )
}
export default Home