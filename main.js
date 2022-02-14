// HELLO FELLOW CODERS! WE WELCOME YOU TO THE WORLD OF JAVASCRIPT 

//----- We've curated this assignment for someone staring out in exploring the beauty of JavaScript and would urge you to go through the resources shared with you before you start with this. ----- // 

//Go through the CSS file as well to get a hold of all the attributes we've added. You're free to add some of your own and maybe delete some of ours xD

//The point is, we want you to have fun and use all the concepts while doing this task. In case of any doubts, feel free to reach out to us!

// Your main work would be here, in main.js and would advice you to also pay a visit to the scenario.js


// Life of the player and the hacker.
var playerLife = 5;
var hackerLife = 5;
var cardSelected = false;
var scoreDifferenceOFPAndH = undefined;
var playerCardScore = 0;
var hackerCardScore = 0;
var turnNumber = 0

// Message to be displayed when the game is over
var hackerWinnerMessage = "You got hacked!";
var playerWinnerMessage = "You defeated the hacker!";

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


// An example of a function that controls what would happen when a card is clicked

function cardClicked(cardEl) {
  // console.log("cardClicked");

  if (cardSelected) { return 0; }
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
  // console.log("revealPlayerPower");
  document.getElementsByClassName('played-card')[0].classList.add('reveal-power');
}

// Write a function that shows the power level on the hacker card
function revealHackerPower() {
  // console.log("revealHackerPower");
  document.getElementsByClassName('card')[0].classList.add('reveal-power');
}
// Write a function to compare the cards. Here is where all your skills would come in handy! 
// P.S: We've added the 'disabled' attribute in the CSS file for the button and you should use it in case you want a certain element to just go away or 'vanish' at a certain  time. For eg: You'd definitely want the 'Next' button to go away after a player chooses a card right?

function compareCards() {
  // console.log("compareCards");
  playerCardScore = parseInt(document.getElementsByClassName('played-card')[0].lastElementChild.innerHTML);
  hackerCardScore = parseInt(document.getElementsByClassName('power')[0].innerText);
  scoreDifferenceOFPAndH = playerCardScore - hackerCardScore;
  if (scoreDifferenceOFPAndH > 0) {
    document.getElementsByClassName('played-card')[0].classList.add('better-card');
    document.getElementsByClassName('card')[0].classList.add('worse-card');
  } else if (scoreDifferenceOFPAndH < 0) {
    document.getElementsByClassName('card')[0].classList.add('better-card');
    document.getElementsByClassName('played-card')[0].classList.add('worse-card');
  } else {
    document.getElementsByClassName('card')[0].classList.add('tie-card');
    document.getElementsByClassName('played-card')[0].classList.add('tie-card');
  }
  if (scoreDifferenceOFPAndH > 0) {
    hackerLife -= scoreDifferenceOFPAndH;
  } else {
    playerLife += scoreDifferenceOFPAndH;
  }
  updateScores();
}

//Use conditional statements and complete the function that shows the winner message
function gameOver(winner) {
  // console.log('gameOver');
  scoreDifferenceOFPAndH = undefined;
  if (winner === 'h') {
    document.getElementsByClassName('winner-message')[0].innerHTML = 'You got hacked!';
  } else if (winner === 't') {
    document.getElementsByClassName('winner-message')[0].innerHTML = "It's a tie!";
  }

  document.getElementsByClassName('restart')[0].classList.add('game-over');
  document.getElementsByClassName('winner-section')[0].classList.add('winnerDeclared');
}


// Write a function that starts the game
function startGame() {
  // console.log('startGame');
  document.getElementsByClassName('card')[0].children[0].innerHTML = scenarios[turnNumber].hackerCard.description;
  document.getElementsByClassName('card')[0].children[1].innerHTML = scenarios[turnNumber].hackerCard.power;

  document.getElementsByClassName('card')[1].firstElementChild.innerHTML = scenarios[turnNumber].playerCards[0].description;
  document.getElementsByClassName('card')[1].lastElementChild.innerHTML = scenarios[turnNumber].playerCards[0].power;

  document.getElementsByClassName('card')[2].firstElementChild.innerHTML = scenarios[turnNumber].playerCards[1].description;
  document.getElementsByClassName('card')[2].lastElementChild.innerHTML = scenarios[turnNumber].playerCards[1].power;

  document.getElementsByClassName('card')[3].firstElementChild.innerHTML = scenarios[turnNumber].playerCards[2].description;
  document.getElementsByClassName('card')[3].lastElementChild.innerHTML = scenarios[turnNumber].playerCards[2].power;

  document.querySelector(".game-board").classList.remove("before-game");
  turnNumber++;
  revealCards();
}


// Now write a function that starts the game over from scratch
// ** worked without it
// function restartGame() {}

// We've also used a cool life bar that displays the life left. Write a function that updates the displayed life bar and life totals
// use innerHTML and a lot of other cool things to do this. 
function updateScores() {
  // console.log('updateScores');
  if (scoreDifferenceOFPAndH > 0) {
    document.getElementsByClassName('thumbnail')[0].classList.add('ouch');
  } else if (scoreDifferenceOFPAndH < 0) {
    document.getElementsByClassName('thumbnail')[1].classList.add('ouch');
  }
  // Here these update life totals for each player
  // We've added the code to update the player lifebar
  var playerPercent = playerLife / playerStartLife * 100;
  if (playerPercent < 0) {
    playerPercent = 0;
    playerLife = 0;
  }
  document.querySelector(".player-stats .life-total").innerHTML = playerLife;
  document.querySelector(".player-stats .life-left").style.height = playerPercent + "%";

  // Now you write the code to update the hacker lifebar
  var hackerPercent = hackerLife / hackerStartLife * 100;
  if (hackerPercent < 0) {
    hackerPercent = 0;
    hackerLife = 0;
  }
  document.querySelector(".hacker-stats .life-total").innerHTML = hackerLife;
  document.querySelector(".hacker-stats .life-left").style.height = hackerPercent + "%";
  if (playerLife === 0) {
    gameOver('h');
  } else if (hackerLife === 0) {
    gameOver('p');
  } else if (turnNumber === 4) {
    gameOver('t');
  } else if (scoreDifferenceOFPAndH != undefined) {
    console.log("In 2nd else if");
    document.getElementsByClassName('player-area')[0].classList.add('during-game');
  }
}

// Write a function that Plays one turn of the game
function playTurn() {
  // console.log("playTurn");
  document.getElementsByClassName('player-area')[0].classList.remove('during-game');

  for (let i = 0; i < 4; i++) {
    document.getElementsByClassName('card')[i].classList.remove('showCard');
  }


  document.getElementsByClassName('played-card')[0].classList.remove('reveal-power');
  document.getElementsByClassName('card')[0].classList.remove('reveal-power');
  if (scoreDifferenceOFPAndH > 0) {
    document.getElementsByClassName('played-card')[0].classList.remove('better-card');
    document.getElementsByClassName('card')[0].classList.remove('worse-card');
  } else if (scoreDifferenceOFPAndH < 0) {
    document.getElementsByClassName('card')[0].classList.remove('better-card');
    document.getElementsByClassName('played-card')[0].classList.remove('worse-card');
  } else {
    document.getElementsByClassName('card')[0].classList.remove('tie-card');
    document.getElementsByClassName('played-card')[0].classList.remove('tie-card');
  }
  document.getElementsByClassName('played-card')[0].classList.remove('played-card');

  cardSelected = false;
  document.querySelector(".game-board").classList.remove("card-selected");

  if (scoreDifferenceOFPAndH > 0) {
    document.getElementsByClassName('thumbnail')[0].classList.remove('ouch');
  } else if (scoreDifferenceOFPAndH < 0) {
    document.getElementsByClassName('thumbnail')[1].classList.remove('ouch');
  }

  startGame();
}

// Finally write the function that reveals the cards. Use 
function revealCards() {
  for (let i = 0; i < 4; i++) {
    document.getElementsByClassName('card')[i].classList.add('showCard');
  }
}