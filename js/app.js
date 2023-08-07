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
if(id === "dealer"){
    nodeDice.classList.add("background-tint");
}

let divPlayer = document.getElementById(id);
// Rajout de la div crée dans la page
divPlayer.appendChild(nodeDice);

// On stocke le nbre aléatoire 
const diceValue = randomDice();
//console.log(diceValue);

// On modifie la position du face background selon son numéro (-000px, -100px ...)
nodeDice.style.backgroundPositionX = `-${diceValue-1}00px`;

// Je retourne la valeur du dé pour l'ajouter à la somme
return diceValue;
};

// Définition de notre jeu
const game = {
    div: "app",
    numberDice: 6,
    boards: ["player", "dealer"],
    active: true,
    sumPlayer: 0,
    sumDealer: 0,
    launchGame(){
        // Je récupère la div de l'application
        const divApp = document.getElementById(game.div);
        // Je supprme le contenu
        divApp.textContent = "";
        game.sumPlayer = 0;  // maj des sommes
        game.sumDealer = 0; 
    
        for(let i = 0; i < game.boards.length; i++){
             // Creation du plateau dealer
            const div = document.createElement("div");
            //Je lui ajoute une class et un id
            div.classList.add("board");
            div.id = game.boards[i];
            // J'ajoute la div dans sur le dom
            divApp.appendChild(div);
        }
    },

 /**
     * Lance les dés
     */
 throwDices(){
    if(game.active){ // Check si on peut relancer les dés
        game.active = false; // Empêche de relancer les dés
        // On supprime tout avant de relancer les dés
        game.launchGame(); // <- immédiat
        game.sumPlayer = 0;
        game.sumDealer = 0;

        // Code asynchrone -> il sera executé quand l'utilisateur clique sur le bouton
        for(let i = 0; i < game.numberDice; i++){
            game.sumPlayer += throwDice("player");
            // Décale l'exécution du lancé pour le dealer une seconde plus tard
            
            setTimeout(function(){
                // On mets tout dans une fonction pour l'executer plus tard
                game.sumDealer += throwDice("dealer");
            }, 1000);  // <- décalé
        }
        setTimeout(function(){
            game.active = true;
            // Affichage sur la page
           document.getElementById('player-score').textContent = `Score du joueur : ${game.sumPlayer}`;
           document.getElementById('dealer-score').textContent = `Score du dealer : ${game.sumDealer}`;
        }, 2000);
    }
}
};

// Initialise le plateau de jeu
game.launchGame();

/* On n'exécuste qu'une seul fois la méthode addEventListener
Car sinon on va multiplier les listener */
const playButton = document.getElementById("play-button");
playButton.addEventListener("click", game.throwDices);

window.addEventListener("keydown", function(event){
// On récupère l'evenement
// On test si c'est la touche espace qui a été appuyée
if(event.code === "Space"){
    // Si oui, on exécute notre fonction
    game.throwDices();
}
});

const slider = document.getElementById("numberDices");
// Affichage initial de la valeur
const label = document.getElementById("labelNumberDices");
label.textContent = slider.valueAsNumber;
game.numberDice = slider.valueAsNumber;
// Affichage lors de la modification
slider.addEventListener("input", function(event){
// event.target contient mon élément de type input
const input = event.target;
const label = document.getElementById("labelNumberDices");
label.textContent = input.valueAsNumber;
game.numberDice = input.valueAsNumber;
});