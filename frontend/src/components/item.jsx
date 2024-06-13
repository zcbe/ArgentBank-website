// Composant permettant d'afficher différents élements une image,un titre, une descitpion 

import React from "react";
import '../sass/components/_item.scss';

function Item ({ image, descriptionImage, title, description }) {
    return (
            <div className="feature-item">
                <img src={image} alt={descriptionImage} className="feature-item-icon"/>
                <h3 className="feature-item-title">{title}</h3>
                <p>{description}</p>
            </div>
    )
}

export default Item