// HELLO FELLOW CODERS! WE WELCOME YOU TO THE WORLD OF JAVASCRIPT

//----- We've curated this assignment for someone staring out in exploring the beauty of JavaScript and would urge you to go through the resources shared with you before you start with this. ----- //

//Go through the CSS file as well to get a hold of all the attributes we've added. You're free to add some of your own and maybe delete some of ours xD

//The point is, we want you to have fun and use all the concepts while doing this task. In case of any doubts, feel free to reach out to us!

// Your main work would be here, in main.js and would advice you to also pay a visit to the scenario.js

// Life of the player and the hacker.
var playerLife = 5;
var hackerLife = 5;

// Message to be displayed when the game is over
var hackerWinnerMessage = "Game over: Hacker Won!!";
var playerWinnerMessage = "Game over: You Won!!";

// ---------------Game code starts here ---------------//

// declare a few handy variables like we've done :p

var playerStartLife = parseInt(playerLife);
var hackerStartLife = parseInt(hackerLife);

var roundFinished = false;
var cardSelected = false;

var play = 0;

// we will declare the functions for you and you will complete those
updateScores();

// you learnt DOM manipulation right? here's an example of the same. Go ahead and use manipulate the DOM!
document.querySelector(".game-board").classList.add("before-game");

var cardElements = document.querySelectorAll(".card");

// Adds click handler to all player card elements so that your cards are actionable
for (var i = 0; i < cardElements.length; i++) {
  var card = cardElements[i];
  if (card.classList.contains("player-card")) {
    card.addEventListener("click", function (e) {
      cardClicked(this);
      e.preventDefault();
    });
  }
}

// An example of a function that controls what would happen when a card is clicked

function cardClicked(cardEl) {
  if (cardSelected) {
    return;
  }
  cardSelected = true;

  cardEl.classList.add("played-card");

  document.querySelector(".game-board").classList.add("card-selected");

  // Yes JS is cool and this would allow you to wait 500ms before revealing the hacker power
  setTimeout(function () {
    revealHackerPower();
  }, 500);

  setTimeout(function () {
    revealPlayerPower();
  }, 800);

  setTimeout(function () {
    compareCards();
  }, 1400);
}

// Now write a function that shows the power level on the player card
function revealPlayerPower() {
  var playerCard = document.querySelector(".played-card");
  playerCard.classList.add("reveal-power");
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
  var playerPowerEl = playerCard.querySelector(".power");

  var hackerCard = document.querySelector(".hacker-card");
  var hackerPowerEl = hackerCard.querySelector(".power");

  var playerPower = parseInt(playerPowerEl.innerHTML);
  var hackerPower = parseInt(hackerPowerEl.innerHTML);

  var pwrDiff = playerPower - hackerPower;

  if (pwrDiff < 0) {
    // Player Loses
    playerLife = playerLife + pwrDiff;
    hackerCard.classList.add("better-card");
    playerCard.classList.add("worse-card");
    document.querySelector(".player-stats .thumbnail").classList.add("ouch");
  } else if (pwrDiff > 0) {
    // Player Wins
    hackerLife = hackerLife - pwrDiff;
    playerCard.classList.add("better-card");
    hackerCard.classList.add("worse-card");
    document.querySelector(".hacker-stats .thumbnail").classList.add("ouch");
  } else {
    playerCard.classList.add("tie-card");
    hackerCard.classList.add("tie-card");
  }
  updateScores();

  if (0 >= playerLife) {
    gameOver("Hacker");
  } else if (0 >= hackerLife) {
    gameOver("Player");
  } else if (play >= 3) {
    gameOver("No-Winner");
    play = 0;
  }

  roundFinished = true;

  document.querySelector("button.next-turn").removeAttribute("disabled");
}

//Use conditional statements and complete the function that shows the winner message
function gameOver(winner) {
  document.querySelector(".game-board").classList.add("game-over");
  document.querySelector(".winner-section").style.display = "flex";
  document.querySelector(".winner-section").classList.remove("player-color");
  document.querySelector(".winner-section").classList.remove("hacker-color");

  if (winner == "Hacker") {
    document.querySelector(".winner-message").innerHTML = hackerWinnerMessage;
    document.querySelector(".winner-section").classList.add("hacker-color");
    document.querySelector("button.next-turn").setAttribute("disabled");
  } else if (winner == "Player") {
    document.querySelector(".winner-message").innerHTML =playerWinnerMessage;
    document.querySelector(".winner-section").classList.add("player-color");
    document.querySelector("button.next-turn").setAttribute("disabled");
  } 
  
}

// Write a function that starts the game
function startGame() {
  document.querySelector(".game-board").classList.remove("before-game");
  document.querySelector(".game-board").classList.add("during-game");
  playTurn();
}

// Now write a function that starts the game over from scratch
function restartGame() {
  document.querySelector(".game-board").classList.remove("game-over");
  document.querySelector(".game-board").classList.remove("during-game");
  document.querySelector(".game-board").classList.add("before-game");

  document.querySelector(".winner-section").style.display = "none";
  document.querySelector(".hacker-card").style.display = "none";

  var cards = cardElements;

  document.querySelector("button").removeAttribute("disabled");

  for (var i = 0; i < cards.length; i++) {
    cards[i].style.display = "none";
  }

  playerLife = playerStartLife;
  hackerLife = hackerStartLife;

  roundFinished = true;
  cardSelected = false;

  updateScores();
}

// We've also used a cool life bar that displays the life left. Write a function that updates the displayed life bar and life totals
// use innerHTML and a lot of other cool things to do this.
function updateScores() {
  // Update life totals for each player
  document.querySelector(".player-stats .life-total").innerHTML = playerLife;
  document.querySelector(".hacker-stats .life-total").innerHTML = hackerLife;

  // Update the player lifebar
  var playerPercent = (playerLife / playerStartLife) * 100;
  if (playerPercent < 0) {
    playerPercent = 0;
  }
  document.querySelector(".player-stats .life-left").style.height =
    playerPercent + "%";

  // Update the hacker lifebar
  var hackerPercent = (hackerLife / hackerStartLife) * 100;
  if (hackerPercent < 0) {
    hackerPercent = 0;
  }
  document.querySelector(".hacker-stats .life-left").style.height =
    hackerPercent + "%";
}

// shuffles the card
function shuffleArray(s) {
  let j, x, i;
  for (i = s.length; i; i--) {
    j = Math.floor(Math.random() * i);
    x = s[i - 1];
    s[i - 1] = s[j];
    s[j] = x;
  }
  return s;
}

// Write a function that Plays one turn of the game
function playTurn() {
  play = play + 1;
  roundFinished = true;
  cardSelected = false;

  document.querySelector(".game-board").classList.remove("card-selected");

  // Remove "ouch" from player and hacker thumbnails
  document.querySelector(".hacker-stats .thumbnail").classList.remove("ouch");
  document.querySelector(".player-stats .thumbnail").classList.remove("ouch");

  // Hides the "next turn" button, will show again when turn is over
  document.querySelector(".next-turn").setAttribute("disabled", "true");

  for (var i = 0; i < cardElements.length; i++) {
    var card = cardElements[i];
    card.classList.remove("showCard");
  }

  setTimeout(function () {
    revealCards();
  }, 500);
}

// Finally write the function that reveals the cards. Use
function revealCards() {
  var j = 0;
  var cardIndexes = shuffleArray([0, 1, 2]);

  // Get scenario cards
  console.log("scenarios.length == " + scenarios.length);

  var randomScenarioIndex = Math.floor(Math.random() * scenarios.length);
  var scenario = scenarios[randomScenarioIndex];
  console.log(scenario.hackerCard.description);

  scenarios.splice(randomScenarioIndex, 1);

  console.log("scenarios.length after splice == " + scenarios.length);

  var hackerCard = scenario.hackerCard;
  var hackerCardEl = document.querySelector(".hacker-area .card");

  // Contents of the player cards
  var playerCards = scenario.playerCards;

  for (var i = 0; i < cardElements.length; i++) {
    var card = cardElements[i];

    card.classList.remove("worse-card");
    card.classList.remove("better-card");
    card.classList.remove("played-card");
    card.classList.remove("tie-card");
    card.classList.remove("prepared");
    card.classList.remove("reveal-power");

    // Display the payer card details
    if (card.classList.contains("player-card")) {
      card.querySelector(".text").innerHTML =
        playerCards[cardIndexes[j]].description;
      card.querySelector(".power").innerHTML =
        playerCards[cardIndexes[j]].power;
      j++;
    }

    // Revealing each card one by one with a delay of 100ms
    setTimeout(
      (function (card, j) {
        return function () {
          card.classList.remove("prepared");
          card.style.display = "block";
          card.classList.add("showCard");
        };
      })(card, i),
      parseInt(i + 1) * 200
    );
  }

  // Displaying the hacker card
  hackerCardEl.querySelector(".text").innerHTML = hackerCard.description;
  hackerCardEl.querySelector(".power").innerHTML = hackerCard.power;
}
