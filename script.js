// Sélection des éléments HTML
const form = document.querySelector('#quote-form');
const submitButton = document.querySelector('.submit-btn');
const quoteList = document.querySelector('#quote-list');
const count = document.querySelector('#count');
let quoteCount = 0;

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
    const newAuthor = document.createElement("p");
    const newDiv = document.createElement("div"); 

    newText.className = "text";
    newText.innerText = inputText;
    // autre possibilité testée à la place de .innerText (marche aussi) : 
        // const textNode = document.createTextNode(inputText);
        // newText.appendChild(textNode);
    
    
    newAuthor.className = "author";
    newAuthor.innerText = inputAuthor;
   
    newDiv.className = "quote";
    newDiv.appendChild(newText);
    newDiv.appendChild(newAuthor);

    quoteList.appendChild(newDiv);

    quoteCount += 1;
    count.innerText = formatCount(quoteCount);    

    console.log(quoteCount);
}

// fonction pour adapter la réponse en fonction du nombre de citations ajoutées
function formatCount(count) {
    let formattedCount 
    if (count < 2) {
      formattedCount = `${count} citation ajoutée`;
    } else {
      formattedCount = `${count} citations ajoutées`;
    }
    return formattedCount;
  }
