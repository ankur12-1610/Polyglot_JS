// HELLO FELLOW CODERS! WE WELCOME YOU TO THE WORLD OF JAVASCRIPT 

//----- We've curated this assignment for someone staring out in exploring the beauty of JavaScript and would urge you to go through the resources shared with you before you start with this. ----- // 

//Go through the CSS file as well to get a hold of all the attributes we've added. You're free to add some of your own and maybe delete some of ours xD

//The point is, we want you to have fun and use all the concepts while doing this task. In case of any doubts, feel free to reach out to us!

// Your main work would be here, in main.js and would advice you to also pay a visit to the scenario.js


// Life of the player and the hacker.
var playerLife = 5;
var hackerLife = 5;
cardSelected = false;
var i = 0;

// Message to be displayed when the game is over
var hackerWinnerMessage = "You Got Hacked!";
var playerWinnerMessage = "You are safe Now!";

// ---------------Game code starts here ---------------//

// declare a few handy variables like we've done :p

var playerStartLife = parseInt(playerLife);
var hackerStartLife = parseInt(hackerLife);
var hackerCard = document.querySelector(".hacker-card");
var playerCard = document.querySelectorAll(".played-card");

// we will declare the functions for you and you will complete those 
updateScores();

// you learnt DOM manipulation right? here's an example of the same. Go ahead and use manipulate the DOM!
document.querySelector(".game-board").classList.add("before-game");

var allCardElements = document.querySelectorAll(".card");

// Adds click handler to all player card elements so that your cards are actionable
for (var i = 0; i < allCardElements.length; i++) {
  var card = allCardElements[i];
  if (card.classList.contains("player-card")) {
    card.addEventListener("click", function (e) {
      cardClicked(this);
    });
  }
}

// An example of a function that controls what would happen when a card is clicked

function cardClicked(cardEl) {

  if (cardSelected) { return; }
  cardSelected = true;

  cardEl.classList.add("played-card");

  document.querySelector(".game-board").classList.add("card-selected");

  // Yes JS is cool and this would allow you to wait 500ms before revealing the hacker power
  setTimeout(function () {
    revealHackerPower();
  }, 500)

  setTimeout(function () {
    revealPlayerPower();
  }, 800)

  setTimeout(function () {
    compareCards();
  }, 1400);
}

// Now write a function that shows the power level on the player card
function revealPlayerPower() {
  playerCard.classList.add("reveal-power");
}

// Write a function that shows the power level on the hacker card
function revealHackerPower() {
  hackerCard.classList.add("reveal-power");
}
// Write a function to compare the cards. Here is where all your skills would come in handy! 
// P.S: We've added the 'disabled' attribute in the CSS file for the button and you should use it in case you want a certain element to just go away or 'vanish' at a certain  time. For eg: You'd definitely want the 'Next' button to go away after a player chooses a card right?

function compareCards() {
  var playerPowerEl = playerCard.querySelector(".power");
  var hackerPowerEl = hackerCard.querySelector(".power");

  var playerPower = parseInt(playerPowerEl.innerHTML);
  var hackerPower = parseInt(hackerPowerEl.innerHTML);

  var powerDifference = playerPower - hackerPower;

  if (powerDifference < 0) {
    playerLife = playerLife + powerDifference;
    hackerCard.classList.add("better-card");
    playerCard.classList.add("worse-card");
  }
  else if (powerDifference > 0) {
    hackerLife = hackerLife - powerDifference;
    playerCard.classList.add("better-card");
    hackerCard.classList.add("worse-card");
  }
  else {
    playerCard.classList.add("tie-card");
    hackerCard.classList.add("tie-card");
  }
  updateScores();

  if (playerLife <= 0) { gameOver("Hacker"); }
  if (hackerLife <= 0) { gameOver("player"); }
}

//Use conditional statements and complete the function that shows the winner message
function gameOver(winner) 
{
  if (winner == "Hacker") 
  {
    document.querySelector(".winner-message").innerHTML = hackerWinnerMessage;
  } 
  else if (winner == "Player")
  {
    document.querySelector(".winner-message").innerHTML = playerWinnerMessage;
  }
}


// Write a function that starts the game
function startGame() 
{
  document.querySelector(".game-board").classList.remove("before-game");
  document.querySelector(".game-board").classList.add("during-game");
  revealCards();
}

// Now write a function that starts the game over from scratch
function restartGame() 
{

}

// We've also used a cool life bar that displays the life left. Write a function that updates the displayed life bar and life totals
// use innerHTML and a lot of other cool things to do this. 
function updateScores() 
{

  // Here these update life totals for each player
  document.querySelector(".player-stats .life-total").innerHTML = playerLife;

  // We've added the code to update the player lifebar
  var playerPercent = playerLife / playerStartLife * 100;
  if (playerPercent < 0) 
  {
    playerPercent = 0;
  }
  document.querySelector(".player-stats .life-left").style.height = playerPercent + "%";

  // Now you write the code to update the hacker lifebar

}



// Write a function that Plays one turn of the game
function playTurn() 
{
  cardSelected = false;
  revealCards();
}

// Finally write the function that reveals the cards. Use 
function revealCards() 
{
  i=0;
  for(var j=0;j<4;j++){
    document.querySelectorAll(".card")[j].style.opacity=10;
  }
  hackerCard.querySelector(".text").innerHTML = scenarios[i].hackerCard.description;
  playerCard[0].querySelector(".text").innerHTML = scenarios[i].playerCards[0].description;
  playerCard[1].querySelector(".text").innerHTML = scenarios[i].playerCards[1].description;
  playerCard[2].querySelector(".text").innerHTML = scenarios[i].playerCards[2].description;
  i++;
}
