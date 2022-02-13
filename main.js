// HELLO FELLOW CODERS! WE WELCOME YOU TO THE WORLD OF JAVASCRIPT 

var firstNames = ["1337", "t0xic", "phantom", "ALPhA", "v1rus", "biTe", "krypt0", "cyb3r", "Bi0", "acid", "gh0st", "Lord", "r4dical"];
var secondNames = ["PWNER", "H4X0R", "buRn", "MuX", "d3st0y3r", "phreak", "Plague", "0verride", "Chaos"];

var hackerFirstName = firstNames[Math.floor(Math.random()*firstNames.length)];
var hackerSecondName = secondNames[Math.floor(Math.random()*secondNames.length)];
var hackerName =  hackerFirstName + " " + hackerSecondName;

// console.log(hackerName);
var playerName="";
let firstTime=true;
while(playerName==""){
  if(firstTime){
    firstTime=false;
    playerName = window.prompt("Enter your First Name: ");
  }
  else{
    playerName = window.prompt("Please enter a Valid First Name: ");
  }
}
if(playerName==null) playerName="You";
else playerName = playerName.toUpperCase()[0] + playerName.toLowerCase().substring(1,playerName.length); 
document.querySelector(".player-stats .name").innerHTML = playerName;

//----- We've curated this assignment for someone staring out in exploring the beauty of JavaScript and would urge you to go through the resources shared with you before you start with this. ----- // 

//Go through the CSS file as well to get a hold of all the attributes we've added. You're free to add some of your own and maybe delete some of ours xD

//The point is, we want you to have fun and use all the concepts while doing this task. In case of any doubts, feel free to reach out to us!

// Your main work would be here, in main.js and would advice you to also pay a visit to the scenario.js

// Life of the player and the hacker.
var playerLife = 5;
var hackerLife = 5;

// Message to be displayed when the game is over
var hackerWinnerMessage = hackerName + " has stole your data :(";
var playerWinnerMessage = "Bravo! you saved yourself from " + hackerName;

          // ---------------Game code starts here ---------------//

// declare a few handy variables like we've done :p

let index=0;
var cardSelected = false;
var playerStartLife = parseInt(playerLife);
var hackerStartLife = parseInt(hackerLife);

// we will declare the functions for you and you will complete those 
updateScores();

// you learnt DOM manipulation right? here's an example of the same. Go ahead and use manipulate the DOM!
document.querySelector(".game-board").classList.add("before-game");

var allCardElements = document.querySelectorAll(".card");

var hackerCard = document.querySelector(".hacker-card");

var nextTurnButton = document.querySelector(".next-turn");

var hackerPhotu = document.querySelector(".hacker-stats .thumbnail");
var playerPhotu = document.querySelector(".player-stats .thumbnail");

var allPlayerCardElements = document.querySelectorAll(".player-card");
for(let i=0;i<allPlayerCardElements.length;++i){
  allPlayerCardElements[i].addEventListener("click", (e)=>{
    // console.log("Player card clicked");
    cardClicked(allPlayerCardElements[i]);
  });
}

// Adds click handler to all player card elements so that your cards are actionable


// An example of a function that controls what would happen when a card is clicked

function cardClicked(cardEl) {

  if(cardSelected) { return; }
  cardSelected = true;

  cardEl.classList.add("played-card");

  document.querySelector(".game-board").classList.add("card-selected");

  // Yes JS is cool and this would allow you to wait 500ms before revealing the hacker power
  setTimeout(function(){
    revealHackerPower();
  },500)

  setTimeout(function(){
    revealPlayerPower(cardEl);
  },800)
  
  setTimeout(function(){
    compareCards(cardEl);
  }, 1400);
}

// Write a function that shows the power level on the hacker card
function revealHackerPower(){
  hackerCard.classList.add("reveal-power");
}

// Now write a function that shows the power level on the player card
function revealPlayerPower(cardEl){
  cardEl.classList.add("reveal-power");
}

// Write a function to compare the cards. Here is where all your skills would come in handy! 
// P.S: We've added the 'disabled' attribute in the CSS file for the button and you should use it in case you want a certain element to just go away or 'vanish' at a certain  time. For eg: You'd definitely want the 'Next' button to go away after a player chooses a card right?

function compareCards(cardEl){
  var playerCard=cardEl;
  var playerPower = playerCard.querySelector(".power").innerHTML;
  var hackerPower = hackerCard.querySelector(".power").innerHTML;
  
  // console.log(playerPower, hackerPower);
  if(playerPower>hackerPower){
    playerCard.classList.add("better-card");
    hackerCard.classList.add("worse-card");
    hackerPhotu.classList.add("ouch");
    hackerLife=hackerLife-(playerPower-hackerPower);
  }
  else if(hackerPower>playerPower){
    playerCard.classList.add("worse-card");
    hackerCard.classList.add("better-card");
    playerPhotu.classList.add("ouch");
    playerLife=playerLife-(hackerPower-playerPower);
  }
  else{
    playerCard.classList.add("tie-card");
    hackerCard.classList.add("tie-card");
  }

  updateScores();

  if(playerLife<=0) gameOver("Hacker");
  else if(hackerLife<=0) gameOver("Player");

  nextTurnButton.removeAttribute("disabled");
}

//Use conditional statements and complete the function that shows the winner message
function gameOver(winner) {
  var winnerDiv = document.querySelector(".winner-message"); 
  if(winner==="Hacker"){
    winnerDiv.innerHTML = hackerWinnerMessage;
  }
  else if(winner==="Player"){
    winnerDiv.innerHTML = playerWinnerMessage;
  }

  document.querySelector(".game-board").classList.remove("during-game");
  document.querySelector(".game-board").classList.add("game-over");
  document.querySelector(".winner-section").style.display = "flex";
}

// Write a function that starts the game
function startGame() {
  document.querySelector(".hacker-name").innerHTML = hackerName + " is trying to steal your data!";
  document.querySelector(".stop-hacker").innerHTML = "Choose the card to stop " + hackerName + "'s attack"

  document.querySelector(".hacker-stats .name").innerHTML = hackerFirstName;
  document.querySelector(".player-stats .name").innerHTML = playerName;

  var gameBoard = document.querySelector(".game-board");
  gameBoard.classList.remove("before-game");
  gameBoard.classList.add("during-game");
  playTurn();
}

// Write a function that Plays one turn of the game
function playTurn() {
  cardSelected = false;
  nextTurnButton.setAttribute("disabled", true);
  document.querySelector(".game-board").classList.remove("card-selected");

  hackerPhotu.classList.remove("ouch");
  playerPhotu.classList.remove("ouch");

  for(let i of allCardElements) {
    i.classList.remove("reveal-power", "showCard", "worse-card", "better-card", "played-card");
}

  hackerCard.querySelector(".text").innerHTML = scenarios[index].hackerCard.description;
  hackerCard.querySelector(".power").innerHTML = scenarios[index].hackerCard.power;
  hackerCard.classList.add("prepared");

  for(let i=0;i<allPlayerCardElements.length;++i){
    allPlayerCardElements[i].querySelector(".text").innerHTML = scenarios[index].playerCards[i].description;
    allPlayerCardElements[i].querySelector(".power").innerHTML = scenarios[index].playerCards[i].power;
    allPlayerCardElements[i].classList.add("prepared");
  }
  index=(index+1)%scenarios.length;

  setTimeout(function() {
    revealCards();
  }, 100);
}

// Finally write the function that reveals the cards. Use 
function revealCards(){
  for(let i=0; i<allCardElements.length; ++i) {
    allCardElements[i].classList.add("showCard");
  }
}

// Now write a function that starts the game over from scratch
function restartGame(){
  location.reload();
}

// We've also used a cool life bar that displays the life left. Write a function that updates the displayed life bar and life totals
// use innerHTML and a lot of other cool things to do this. 
function updateScores(){
  // console.log(playerLife, hackerLife);

  // Here these update life totals for each player
  if(playerLife<0) playerLife=0;
  document.querySelector(".player-stats .life-total").innerHTML = playerLife;

  // We've added the code to update the player lifebar
  var playerPercent = playerLife / playerStartLife * 100;
  document.querySelector(".player-stats .life-left").style.height =  playerPercent + "%";

  // Now you write the code to update the hacker lifebar
  if(hackerLife<0) hackerLife=0;
  document.querySelector(".hacker-stats .life-total").innerHTML = hackerLife;
  var hackerPercent = hackerLife / hackerStartLife * 100;
  document.querySelector(".hacker-stats .life-left").style.height =  hackerPercent + "%";
}