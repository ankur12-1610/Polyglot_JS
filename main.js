// HELLO FELLOW CODERS! WE WELCOME YOU TO THE WORLD OF JAVASCRIPT 

//----- We've curated this assignment for someone staring out in exploring the beauty of JavaScript and would urge you to go through the resources shared with you before you start with this. ----- // 

//Go through the CSS file as well to get a hold of all the attributes we've added. You're free to add some of your own and maybe delete some of ours xD

//The point is, we want you to have fun and use all the concepts while doing this task. In case of any doubts, feel free to reach out to us!

// Your main work would be here, in main.js and would advice you to also pay a visit to the scenario.js


// Life of the player and the hacker.
var playerLife = 5;
var hackerLife = 5;

// Message to be displayed when the game is over
var hackerWinnerMessage = "YOU GOT HACKED COMRADE! 👁️ 👄 👁️";
var playerWinnerMessage = "The Hacker has yee'd his last haw 🤺";

          // ---------------Game code starts here ---------------//

// declare a few handy variables like we've done :p

var playerStartLife = parseInt(playerLife);
var hackerStartLife = parseInt(hackerLife);

// Get the hacker and player cards DOM elements
const hackerCard = document.querySelector(".hacker-card");
const playerCardsArr = Array.from(document.querySelectorAll(".player-card"));
console.log(hackerCard);

const nextTurnBtn = document.querySelector(".next-turn");

let cardSelected = false;
let turnNumberRaw = 0;

const lifeCounters = Array.from(document.querySelectorAll(".life-total"));
lifeCounters[0].innerText = hackerStartLife;
lifeCounters[1].innerText = playerStartLife;

// we will declare the functions for you and you will complete those 
updateScores();

// you learnt DOM manipulation right? here's an example of the same. Go ahead and use manipulate the DOM!
document.querySelector(".game-board").classList.add("before-game");

var allCardElements = Array.from(document.querySelectorAll(".card"));

// Adds click handler to all player card elements so that your cards are actionable
playerCardsArr.forEach((el) => { 
  // el.classList.toggle("showCard");

  console.log("I'm inside the playerCards eventHandler Adding forEach");
  el.addEventListener("click", () => {
    console.log("You just clicked a card!");
    cardClicked(el);
  });
});

// An example of a function that controls what would happen when a card is clicked

function cardClicked(cardEl) {

  ++turnNumberRaw;

  if(cardSelected) { return; }
  cardSelected = true;

  cardEl.classList.add("played-card");

  document.querySelector(".game-board").classList.add("card-selected");
  console.log("hey a card was just clicked")
  // Yes JS is cool and this would allow you to wait 500ms before revealing the hacker power
  setTimeout(function() {
    revealHackerPower();
  },500)

  setTimeout(function() {
    revealPlayerPower(cardEl);
  },800)
  
  setTimeout(function() {
    compareCards(cardEl);
  }, 1400);
}

// Now write a function that shows the power level on the player card
function revealPlayerPower(cardEl) {
  cardEl.classList.toggle("reveal-power");
}

// Write a function that shows the power level on the hacker card
function revealHackerPower(){
  hackerCard.classList.toggle("reveal-power");
}
// Write a function to compare the cards. Here is where all your skills would come in handy! 
// P.S: We've added the 'disabled' attribute in the CSS file for the button and you should use it in case you want a certain element to just go away or 'vanish' at a certain  time. For eg: You'd definitely want the 'Next' button to go away after a player chooses a card right?

function compareCards(cardSelectedByUser) {

  let winner; // 0 for hacker, 1 for player

  // Get the power of the card selected by user
  const playerPower = parseInt(cardSelectedByUser.lastElementChild.innerText);
  const hackerPower = parseInt(hackerCard.lastElementChild.innerText);
  console.log(playerPower);

  if (playerPower > hackerPower) {
    --hackerLife;
    lifeCounters[0].innerText = hackerLife;
    hackerCard.classList.toggle("worse-card");
    cardSelectedByUser.classList.toggle("better-card");
    winner = 1;
  } else {
    --playerLife;
    lifeCounters[1].innerText = playerLife;
    hackerCard.classList.toggle("better-card");
    cardSelectedByUser.classList.toggle("worse-card");
    winner = 0;
  }

  lifeCounters[0].innerText = hackerLife;
  lifeCounters[1].innerText = playerLife;

  updateScores();
  isGameOver();
  nextTurn(cardSelectedByUser, winner);
}

// Function to bootstrap the next turn process
function nextTurn(cardSelectedByUser, winner) {
  console.log("Inside the nextTurn function");
  console.log(nextTurnBtn);

  setTimeout(() => { nextTurnBtn.style.display = "block"; }, 2000);

  setTimeout(() => {  
    hackerCard.classList.toggle("showCard");
    playerCardsArr.forEach((el) => { 
      el.classList.toggle("showCard");
    });

    if (winner === 0) {      // hacker won
      cardSelectedByUser.classList.toggle("worse-card");
      hackerCard.classList.toggle("better-card");
    } else {
      cardSelectedByUser.classList.toggle("better-card");
      hackerCard.classList.toggle("worse-card");
    }

    cardSelectedByUser.classList.toggle("played-card");
    cardSelectedByUser.classList.toggle("reveal-power");
    hackerCard.classList.toggle("reveal-power");

    // turning off the global cardSelected, and in the DOM
    cardSelected = false;
    document.querySelector(".game-board").classList.toggle("card-selected");
}, 1500);
}

//Use conditional statements and complete the function that shows the winner message
function isGameOver(winner) {
  if ((playerLife <= 0) || (hackerLife <= 0)) {
    const winnerSectionDiv = document.querySelector(".winner-section");
    console.log(winnerSectionDiv);
    winnerSectionDiv.style.display = "block";

    nextTurnBtn.style.opacity = 0;

    const winnerMsgDiv = document.querySelector(".winner-message");
    if (playerLife <= 0) {
      winnerMsgDiv.innerText = hackerWinnerMessage;
    } else {
      winnerMsgDiv.innerText = playerWinnerMessage;
    }
  }
}


// Write a function that starts the game
function startGame() {
  console.log(scenarios);

  // Grab the start button and toggle it off
  const startBtn = document.querySelector(".start-game");
  console.log(startBtn);
  startBtn.setAttribute("disabled", "true");
  
  // Play the first turn of the game
  playTurn();
}


// Now write a function that starts the game over from scratch
function restartGame() {

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
  document.querySelector(".player-stats .life-left").style.height =  playerPercent + "%";

  // Now you write the code to update the hacker lifebar
  document.querySelector(".hacker-stats .life-total").innerHTML = hackerLife;

  let hackerPercent = hackerLife / hackerStartLife * 100;
  if (hackerPercent < 0) {
    hackerPercent = 0;
  }
  document.querySelector(".hacker-stats .life-left").style.height =  hackerPercent + "%";
}



// Write a function that Plays one turn of the game
function playTurn() {

  let turnNumber = turnNumberRaw % 2;

  nextTurnBtn.style.display = "none";
  // show the hacker card and player cards and sync all the info with the DOM
  hackerCard.firstElementChild.innerText = scenarios[turnNumber].hackerCard.description;
  console.log(hackerCard.lastElementChild);
  hackerCard.lastElementChild.innerText = scenarios[turnNumber].hackerCard.power;

  hackerCard.classList.toggle("showCard");
  playerCardsArr.forEach((el) => { 
    el.classList.toggle("showCard");

    console.log("I'm inside the playerCards forEach");
    /* el.addEventListener("click", () => {
      cardClicked(el);
    }); */
  });

  playerCardsArr[0].firstElementChild.innerText = scenarios[turnNumber].playerCards[0].description;
  playerCardsArr[1].firstElementChild.innerText = scenarios[turnNumber].playerCards[1].description;
  playerCardsArr[2].firstElementChild.innerText = scenarios[turnNumber].playerCards[2].description;

  playerCardsArr[0].lastElementChild.innerText = scenarios[turnNumber].playerCards[0].power;
  playerCardsArr[1].lastElementChild.innerText = scenarios[turnNumber].playerCards[1].power;
  playerCardsArr[2].lastElementChild.innerText = scenarios[turnNumber].playerCards[2].power;
}