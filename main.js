// HELLO FELLOW CODERS! WE WELCOME YOU TO THE WORLD OF JAVASCRIPT 

//----- We've curated this assignment for someone staring out in exploring the beauty of JavaScript and would urge you to go through the resources shared with you before you start with this. ----- // 

//Go through the CSS file as well to get a hold of all the attributes we've added. You're free to add some of your own and maybe delete some of ours xD

//The point is, we want you to have fun and use all the concepts while doing this task. In case of any doubts, feel free to reach out to us!

// Your main work would be here, in main.js and would advice you to also pay a visit to the scenario.js


// Life of the player and the hacker.
var playerLife = 5;
var hackerLife = 5;

var roundSetUpWait = 500;
var GameEndWait = 1500;
var cardShowWait = 100;
var powerShowWait = 50;
var scenario_index = -1;
var scenario_length = scenarios.length;
var scenario_order = []

// Setting up a scenario's array to keep track of which scenario is to be shown
for (var i = 0; i < scenario_length; i++) {
  scenario_order.push(i);
}

// Using a function to shuffle an array
// Credits : https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffle(array) {
  let currentIndex = array.length, randomIndex;

  while (currentIndex != 0) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

shuffle(scenario_order)

// Message to be displayed when the game is over
var hackerWinnerMessage = "The hacker has won :( You need to learn more about being safe online.";
var playerWinnerMessage = "You won!! Your wits are enough to beat any hacker!";

// ---------------Game code starts here ---------------//

// declare a few handy variables like we've done :p

var playerStartLife = parseInt(playerLife);
var hackerStartLife = parseInt(hackerLife);

// we will declare the functions for you and you will complete those 
updateScores();

// you learnt DOM manipulation right? here's an example of the same. Go ahead and use manipulate the DOM!
document.querySelector(".game-board").classList.add("before-game");

var allCardElements = document.querySelectorAll(".card");

// Adds click handler to all player card elements so that your cards are actionable
for (var i = 0; i < allCardElements.length; i++) {

  var card = allCardElements[i];

  if (card.classList.contains("player-card")) {
    card.addEventListener("click", function () { cardClicked(this); });
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

  var allPlayerCards = document.querySelectorAll(".player-card");

  for (var player_index = 0; player_index < 3; player_index++) {

    card = allPlayerCards[player_index];
    setTimeout(function (card, _) {
      return function () {
        card.classList.add("reveal-power");
      }
    }(card, player_index), (player_index) * powerShowWait);

  }

}

// Write a function that shows the power level on the hacker card
function revealHackerPower() {

  var hackerCard = document.querySelector(".hacker-card");
  hackerCard.classList.add("reveal-power");

}

// Write a function to compare the cards. Here is where all your skills would come in handy! 
// P.S: We've added the 'disabled' attribute in the CSS file for the button and you should use it in case you want a certain element to just go away or 'vanish' at a certain  time. For eg: You'd definitely want the 'Next' button to go away after a player chooses a card right?

function compareCards() {

  var playerCard = document.querySelector(".played-card");
  var playerPowerElement = playerCard.querySelector(".power");
  var playerPower = parseInt(playerPowerElement.innerHTML);

  var hackerCard = document.querySelector(".hacker-card");
  var hackerPowerElement = hackerCard.querySelector(".power");
  var hackerPower = parseInt(hackerPowerElement.innerHTML);

  if (hackerPower > playerPower) {

    playerLife = playerLife - hackerPower + playerPower;
    hackerCard.classList.add("better-card");
    playerCard.classList.add("worse-card");
    document.querySelector(".player-stats .thumbnail").classList.add("ouch");

  }
  else if (playerPower > hackerPower) {

    hackerLife = hackerLife - playerPower + hackerPower;
    playerCard.classList.add("better-card");
    hackerCard.classList.add("worse-card");
    document.querySelector(".hacker-stats .thumbnail").classList.add("ouch");
  }
  else {
    playerCard.classList.add("tie-card");
    hackerCard.classList.add("tie-card");
  }

  updateScores();
  document.querySelector("button.next-turn").removeAttribute("disabled");
  roundFinished = true;

  if (playerLife <= 0) {
    document.querySelector(".top-display").innerHTML = "<strong>Game Over!!</strong> <br/>";
    setTimeout(gameOver, GameEndWait, "Hacker");
    gameOver("Hacker");

  } else if (hackerLife <= 0) {
    document.querySelector(".top-display").innerHTML = "<strong>Game Over!!</strong> <br/>";
    setTimeout(gameOver, GameEndWait, "Player");
    gameOver("Player");
  }

  roundFinished = true;


}

//Use conditional statements and complete the function that shows the winner message
function gameOver(winner) {


  for (var i = 0; i < allCardElements.length; i++) {
    var card = allCardElements[i];
    card.classList.remove("showCard");
  }

  document.querySelector(".game-board").classList.add("game-over");
  document.querySelector(".winner-section").classList.remove("player-color");
  document.querySelector(".winner-section").classList.remove("hacker-color");
  document.querySelector(".winner-section").style.display = "flex";
  document.querySelector("button.next-turn").setAttribute("disabled", "true");


  if (winner == "Hacker") {
    document.querySelector(".winner-message").innerHTML = hackerWinnerMessage;
    document.querySelector(".winner-section").classList.add("hacker-color");
  } else {
    document.querySelector(".winner-message").innerHTML = playerWinnerMessage;
    document.querySelector(".winner-section").classList.add("player-color");
  }

}


// Write a function that starts the game
function startGame() {

  document.querySelector(".game-board").classList.remove("before-game");
  document.querySelector(".game-board").classList.add("during-game");

  document.querySelector(".top-display").innerHTML = "<strong>HACKER CARDS</strong> <br/>Choose the card to stop hackers' attack";

  updateScores()

  playTurn();

}


// Now write a function that starts the game over from scratch
function restartGame() {
  document.querySelector(".game-board").classList.remove("game-over");
  document.querySelector(".game-board").classList.remove("during-game");
  document.querySelector(".game-board").classList.add("before-game");
}

// We've also used a cool life bar that displays the life left. Write a function that updates the displayed life bar and life totals
// use innerHTML and a lot of other cool things to do this. 
function updateScores() {

  // Here these update life totals for each player
  document.querySelector(".player-stats .life-total").innerHTML = playerLife;

  // We've added the code to update the player lifebar
  var playerPercent = playerLife / playerStartLife * 100;
  if (playerPercent < 0) {
    playerPercent = 0;
  }
  document.querySelector(".player-stats .life-left").style.height = playerPercent + "%";

  // Now you write the code to update the hacker lifebar

  document.querySelector(".hacker-stats .life-total").innerHTML = hackerLife;
  var hackerPercent = hackerLife / hackerStartLife * 100;
  if (hackerPercent < 0) {
    hackerPercent = 0;
  }
  document.querySelector(".hacker-stats .life-left").style.height = hackerPercent + "%";


}



// Write a function that Plays one turn of the game
function playTurn() {

  scenario_index += 1

  for (var i = 0; i < allCardElements.length; i++) {
    var card = allCardElements[i];
    card.classList.remove("showCard");
  }

  roundFinished = true;
  cardSelected = false;

  document.querySelector(".game-board").classList.remove("card-selected");

  document.querySelector(".hacker-stats .thumbnail").classList.remove("ouch");
  document.querySelector(".player-stats .thumbnail").classList.remove("ouch");

  document.querySelector(".next-turn").setAttribute("disabled", "true");

  setTimeout(revealCards, roundSetUpWait);

}

// Finally write the function that reveals the cards.
function revealCards() {

  if (scenario_index == scenarios.length) {
    scenario_index = 0;
  }
  var current_scenario = scenario_order[scenario_index];
  var scenario = scenarios[current_scenario]

  var hackerCard = scenario.hackerCard;
  var hackerCardElement = document.querySelector(".hacker-area .card");

  // Display the hacker card
  setTimeout(function () {
    hackerCardElement.querySelector(".text").innerHTML = hackerCard.description;
    hackerCardElement.querySelector(".power").innerHTML = hackerCard.power;
    hackerCardElement.style.display = "block";
    hackerCardElement.classList.add("showCard");
  },
    cardShowWait);



  var playerCards = scenario.playerCards;

  for (var i = 0; i < allCardElements.length; i++) {

    var card = allCardElements[i];

    // Remove all possible classes that the card might have
    card.classList.remove("worse-card");
    card.classList.remove("better-card");
    card.classList.remove("tie-card");
    card.classList.remove("prepared");
    card.classList.remove("reveal-power");
    card.classList.remove("played-card");

  }

  var allPlayerCards = document.querySelectorAll(".player-card");
  for (var player_index = 0; player_index < 3; player_index++) {

    var card = allPlayerCards[player_index];
    card.querySelector(".text").innerHTML = playerCards[player_index].description;
    card.querySelector(".power").innerHTML = playerCards[player_index].power;

    // Reveal each card one by one with a delay
    setTimeout(function (card, _) {
      return function () {
        card.classList.add("showCard");
      }
    }(card, player_index), (player_index + 2) * cardShowWait);

  }
}



