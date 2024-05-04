// Fonction pour vérifier la validité d'un nom
export const isValidName = (name) => {
    // Expression régulière pour valider un nom
    //^ : Début de la chaîne
    //[a-zA-Z]+ : Correspond à une ou plusieurs lettres (majuscules ou minuscules) - 
    //(?:[-']?[a-zA-Z]+)* : Cela permet de correspondre à des noms qui peuvent contenir des tirets (-) ou des apostrophes (') mais pas au début ou à la fin, et permet de capturer plusieurs occurrences de ce modèle.
    //$ : Fin de la chaîne.
    const regex = /^[a-zA-Z]+(?:[-']?[a-zA-Z]+)*$/;
    // Vérifie si le nom correspond à l'expression régulière
    return regex.test(name);
};

// Fonction pour vérifier la validité d'un email
export const isValidEmail = (email) => {
    // Expression régulière pour valider un email
    //\S+ : Correspond à une ou plusieurs caractères non blancs.
    //\. : Point (.) littéral (échappé car le point a une signification spéciale en regex).
    const regex = /^\S+@\S+\.\S+$/;
    // Vérifie si l'email correspond à l'expression régulière
    return regex.test(email);
};

// Fonction pour vérifier la validité d'un mot de passe
export const isValidPassword = (password) => {
    // Expression régulière pour valider un mot de passe
    //(?=.*[A-Za-z]) : C'est un "positive lookahead" qui vérifie s'il y a au moins une lettre (majuscule ou minuscule) dans le mot de passe.
    //(?=.*\d) : C'est un "positive lookahead" qui vérifie s'il y a au moins un chiffre dans le mot de passe.
    //[A-Za-z\d]{3,} : Correspond à une chaîne d'au moins 3 caractères composée de lettres (majuscules ou minuscules) et/ou de chiffres.
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{3,}$/; 
    // Vérifie si le mot de passe correspond à l'expression régulière
    return regex.test(password);
};
