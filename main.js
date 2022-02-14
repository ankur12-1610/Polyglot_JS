// HELLO FELLOW CODERS! WE WELCOME YOU TO THE WORLD OF JAVASCRIPT 

//----- We've curated this assignment for someone staring out in exploring the beauty of JavaScript and would urge you to go through the resources shared with you before you start with this. ----- // 

//Go through the CSS file as well to get a hold of all the attributes we've added. You're free to add some of your own and maybe delete some of ours xD

//The point is, we want you to have fun and use all the concepts while doing this task. In case of any doubts, feel free to reach out to us!

// Your main work would be here, in main.js and would advice you to also pay a visit to the scenario.js


// Life of the player and the hacker.
var playerLife = 5;
var hackerLife = 5;

// Message to be displayed when the game is over
var hackerWinnerMessage = "Oh no! The hacker won!";
var playerWinnerMessage = "You Won!! Congratulations!!";

          // ---------------Game code starts here ---------------//

var playerStartLife = parseInt(playerLife);
var hackerStartLife = parseInt(hackerLife);
var cardSelected = false
updateScores();
document.querySelector(".game-board").classList.add(".before-game");
var allCardElements = document.querySelectorAll(".card");
for(let i=0; i<allCardElements.length; i++) {
  if(allCardElements[i].classList.contains("player-card")){
    allCardElements[i].addEventListener('click', (e) => cardClicked(e.target));
  }
}
if(playerLife<=0) {
  gameOver(0);
} else if(hackerLife<=0) {
  gameOver(1);
}

document.querySelector(".next-turn").removeAttribute("disabled");

// you learnt DOM manipulation right? here's an example of the same. Go ahead and use manipulate the DOM!
document.querySelector(".game-board").classList.add("before-game");

var allCardElements = document.querySelectorAll(".card");

// Adds click handler to all player card elements so that your cards are actionable
var playercardclick1

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
    revealPlayerPower();
  },800)
  
  setTimeout(function(){
    compareCards();
  }, 1400);
}

// Now write a function that shows the power level on the player card
function revealPlayerPower(){
  
}

// Write a function that shows the power level on the hacker card
function revealHackerPower(){

}
// Write a function to compare the cards. Here is where all your skills would come in handy! 
// P.S: We've added the 'disabled' attribute in the CSS file for the button and you should use it in case you want a certain element to just go away or 'vanish' at a certain  time. For eg: You'd definitely want the 'Next' button to go away after a player chooses a card right?

function compareCards(){

}

//Use conditional statements and complete the function that shows the winner message
function gameOver(winner) {
  const winMessage = document.querySelector(".winner-message");
  if(winner == 0) {
    winMessage.textContent = hackerWinnerMessage;
  } else if (winner == 1) {
    winMessage.textContent = playerWinnerMessage;
  }
  document.querySelector(".game-board").classList.remove("during-game");
  document.querySelector(".game-board").classList.add("game-over");
  document.querySelector(".winner-section").style.display = "flex"; 
}


// Write a function that starts the game
function startGame() {
  document.querySelector(".game-board").classList.remove(".before-game");
  document.querySelector(".game-board").classList.add("during-game");
  playTurn()
}


// Now write a function that starts the game over from scratch
function restartGame(){
  playerLife = parseInt(playerStartLife);
  hackerLife = parseInt(hackerStartLife);
  let playedCard = document.querySelector(".played-card");
  playedCard.classList.remove("played-card");
  document.querySelector(".game-board").classList.remove("card-selected");
  cardSelected = false;
  document.querySelector(".game-board").classList.remove("game-over");
  document.querySelector(".game-board").classList.add("before-game");
  document.querySelector(".winner-section").style.display = "none";
  document.querySelector(".next-turn").removeAttribute("disabled");
  for(let i=0; i<allCardElements.length; i++) {
    allCardElements[i].style.display = "none";
  }
  updateScores();
}

// We've also used a cool life bar that displays the life left. Write a function that updates the displayed life bar and life totals
// use innerHTML and a lot of other cool things to do this. 
function updateScores(){

  // Here these update life totals for each player
  document.querySelector(".player-stats .life-total").innerHTML = playerLife;
  document.querySelector(".hacker-stats .life-total").innerHTML = hackerLife;

  // We've added the code to update the player lifebar
  var playerPercent = playerLife / playerStartLife * 100;
  if (playerPercent < 0) {
    playerPercent = 0;
  }
  document.querySelector(".player-stats .life-left").style.height =  playerPercent + "%";
    // Now you write the code to update the hacker lifebar
    var hackerPercent = hackerLife / hackerStartLife * 100;
    if (hackerPercent < 0) {
      hackerPercent = 0;
    }
    document.querySelector(".hacker-stats .life-left").style.height = hackerPercent + "%"
}



// Write a function that Plays one turn of the game
function playTurn() {
  document.querySelector(".game-board").classList.remove("card-selected");
  cardSelected = false;
  document.querySelector(".next-turn").setAttribute("disabled", true);
  let hackerIcon = document.querySelector(".hacker-stats .thumbnail");
  let playerIcon = document.querySelector(".player-stats .thumbnail");
  hackerIcon.classList.remove("ouch");
  playerIcon.classList.remove("ouch");
  for(let i=0; i<allCardElements.length; i++) {
    allCardElements[i].classList.remove("reveal-power");
    allCardElements[i].classList.remove("showCard");
    allCardElements[i].classList.remove("worse-card");
    allCardElements[i].classList.remove("better-card");
    allCardElements[i].classList.remove("tie-card");
    allCardElements[i].classList.remove("played-card");
}
  let index = Math.floor(Math.random() * scenarios.length);
  let hackerCard = document.querySelector(".hacker-card");
  hackerCard.querySelector(".text").textContent = scenarios[index].hackerCard.description;
  hackerCard.querySelector(".power").textContent = scenarios[index].hackerCard.power;
  hackerCard.classList.add("prepared");
  for(let i=0; i<allCardElements.length; i++) {
    if(allCardElements[i].classList.contains("player-card")){
      allCardElements[i].querySelector(".text").textContent = scenarios[index].playerCards[i-1].description;
      allCardElements[i].querySelector(".power").textContent = scenarios[index].playerCards[i-1].power;
      allCardElements[i].classList.add("prepared");
    }
  }
  let hackerIcon = document.querySelector(".hacker-stats .thumbnail");
  let playerIcon = document.querySelector(".player-stats .thumbnail");
  hackerIcon.classList.remove("ouch");
  playerIcon.classList.remove("ouch");
  revealCards();
}

// Finally write the function that reveals the cards. Use 
function revealCards(){
  for(let i=0; i<allCardElements.length; i++) {
    allCardElements[i].classList.add("showCard");
  }
}