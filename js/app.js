/**
 * Function qui génère un nombre aléatoire
 * @returns {number}
 */
const randomDice = function() {
    return Math.floor(Math.random() * 6 + 1);
}
//Je crée une function contenant les instructions pour lancer un dé
const throwDice = function(){
// Création d'une div
let nodeDice = document.createElement("div");

nodeDice.classList.add("dice");

let divPlayer = document.getElementById("player");
// Rajout de la div crée dans la page
divPlayer.appendChild(nodeDice);

// On stocke le nbre aléatoire 
const rand = randomDice();
//console.log(rand);

// On modifie la position du face background selon son numéro (-000px, -100px ...)
nodeDice.style.backgroundPositionX = `-${rand-1}00px`;

};

//Demander le nombre de dé ue l'utilisateur souhaite lancer
const numberDice = Number(prompt("Combien de dé souhaites-tu que je lance"));

//J'utilise une boucle pour éxecuter la function autant de fois que de dé demander
for (let i = 0; i < numberDice; i++) {
    throwDice();
    
}