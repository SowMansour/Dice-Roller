// Création d'une div
let nodeDice = document.createElement("div");

nodeDice.classList.add("dice");

let divPlayer = document.getElementById("player");
// Rajout de la div crée dans la page
divPlayer.appendChild(nodeDice);

/**
 * Function qui génère un nombre aléatoire
 * @returns {number}
 */
const randomDice = function() {
    return Math.floor(Math.random() * 6 + 1);
}

// On stocke le nbre aléatoire 
const rand = randomDice();
console.log(rand);

// On modifie la position du face background selon son numéro (-000px, -100px ...)
nodeDice.style.backgroundPositionX = `-${rand-1}00px`;