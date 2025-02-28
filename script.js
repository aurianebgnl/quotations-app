// Sélection des éléments HTML
const form = document.querySelector('#quote-form');
const submitButton = document.querySelector('.submit-btn');

submitButton.addEventListener('click', (event) => {
    const inputText = document.querySelector('#quote').value;
    const inputAuthor = document.querySelector('#author').value;
    
    event.preventDefault(); //pour permettre la soumission du formulaire avec JavaScript sans recharger la page
    
    console.log('Valeur du champ text:', inputText);
    console.log('Valeur du champ auteur:', inputAuthor);
    
});

