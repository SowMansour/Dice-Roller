// Création d'une div
let nodeDice = document.createElement("div");

nodeDice.classList.add("dice");

let divPlayer = document.getElementById("player");
// Rajout de la div crée dans la page
divPlayer.appendChild(nodeDice);