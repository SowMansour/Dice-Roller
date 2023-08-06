/**
 * Function qui génère un nombre aléatoire
 * @returns {number}
 */
const randomDice = function() {
    return Math.floor(Math.random() * 6 + 1);
}

/**
 * Function affichant un dé alétoire dans le html
 * @param {string} id l'argument de l'appel de la function doit etre un string
 */

const throwDice = function(id){
// Création de la div (Player)
let nodeDice = document.createElement("div");

nodeDice.classList.add("dice");

let divPlayer = document.getElementById(id);
// Rajout de la div crée dans la page
divPlayer.appendChild(nodeDice);

// On stocke le nbre aléatoire 
const rand = randomDice();
//console.log(rand);

// On modifie la position du face background selon son numéro (-000px, -100px ...)
nodeDice.style.backgroundPositionX = `-${rand-1}00px`;

};

// Creation du plateau dealer
const divDealer = document.createElement("div");
//Je lui ajoute une class et un id
divDealer.classList.add("board");
divDealer.id = "dealer";

//Je récupère et stocke l'id app
const divApp = document.getElementById("app");
// J'ajoute la div dans sur le dom
divApp.appendChild(divDealer);

//Demander le nombre de dé ue l'utilisateur souhaite lancer
const numberDice = Number(prompt("Combien de dé souhaites-tu que je lance"));

//J'utilise une boucle pour éxecuter la function autant de fois que de dé demander
for (let i = 0; i < numberDice; i++) {
    throwDice("player");
   // throwDice("dealer");
    
}