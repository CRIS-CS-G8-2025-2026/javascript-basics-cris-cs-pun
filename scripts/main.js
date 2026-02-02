
let firstName = "Winston";
let lastName = "Snugglesworth";
let fullName = firstName + " " + lastName;

document.querySelector('h1').textContent = fullName;

let myAge = 23; 
let ageParagraph = document.querySelector('#age');

ageParagraph.textContent = "Age: " + myAge;

let futureAge = myAge + 20;

let futureParagraph = document.createElement('p');
futureParagraph.textContent = "In twenty years, your age will be " + futureAge + " years old.";

ageParagraph.parentElement.appendChild(futureParagraph);

