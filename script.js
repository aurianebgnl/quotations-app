// Sélection des éléments HTML
const form = document.querySelector('#quote-form');
const submitButton = document.querySelector('.submit-btn');
const quoteList = document.querySelector('#quote-list');

submitButton.addEventListener('click', (event) => {
    const inputText = document.querySelector('#quote').value;
    const inputAuthor = document.querySelector('#author').value;
    
    event.preventDefault(); //pour permettre la soumission du formulaire avec JavaScript sans recharger la page
    
    console.log('Valeur du champ text:', inputText);
    console.log('Valeur du champ auteur:', inputAuthor);
    addQuote(inputText, inputAuthor);
    
});

function addQuote(inputText, inputAuthor) {
    
    const newText = document.createElement("p");
    newText.className = "text";
    newText.innerText = inputText;
    // autre possibilité testée à la place de .innerText (marche aussi) : 
        // const textNode = document.createTextNode(inputText);
        // newText.appendChild(textNode);
    
    const newAuthor = document.createElement("p");
    newAuthor.className = "author";
    newAuthor.innerText = inputAuthor;

    const newDiv = document.createElement("div"); 
    newDiv.className = "quote";
    newDiv.appendChild(newText);
    newDiv.appendChild(newAuthor);

    quoteList.appendChild(newDiv);
}