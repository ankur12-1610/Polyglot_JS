// HELLO FELLOW CODERS! WE WELCOME YOU TO THE WORLD OF JAVASCRIPT 

//----- We've curated this assignment for someone staring out in exploring the beauty of JavaScript and would urge you to go through the resources shared with you before you start with this. ----- // 

//Go through the CSS file as well to get a hold of all the attributes we've added. You're free to add some of your own and maybe delete some of ours xD

//The point is, we want you to have fun and use all the concepts while doing this task. In case of any doubts, feel free to reach out to us!

// Your main work would be here, in main.js and would advice you to also pay a visit to the scenario.js


// Life of the player and the hacker.
var playerLife = 5;
var hackerLife = 5;

// Message to be displayed when the game is over
var hackerWinnerMessage = "YOU WON BUT ARE NOT HONEST ";
var playerWinnerMessage = "KUDOS YOU WON IT";

          // ---------------Game code starts here ---------------//

// declare a few handy variables like we've done :p

var playerStartLife = parseInt(playerLife);
var hackerStartLife = parseInt(hackerLife);

// get the hacker card and player card dom elements
const hackercard = document.querySelector(".hacker-card");
const playerCardsarr = Array.from(document.querySelectorAll(".player-card"));
console.log(hackercard);

const nextturnbutton = document.querySelector(".next-turn");

let cardSelected = false;
let turn = 0;

const lifeCounts = Array.from(document.querySelectorAll(".life-total"));
lifeCounts[0].innerText = hackerStartLife;
lifeCounts[1].innerText = playerStartLife;


// we will declare the functions for you and you will complete those 
updateScores(e);


// you learnt DOM manipulation right? here's an example of the same. Go ahead and use manipulate the DOM!
document.querySelector(".game-board").classList.add("before-game");

var allCardElements = document.querySelectorAll(".card");

// Adds click handler to all player card elements so that your cards are actionable
playerCardsarr.forEach((el) => { 

  console.log("I'm inside the playerCards eventHandler Adding forEach");
  el.addEventListener("click", () => {
    console.log("You just clicked a card!");
    cardClicked(el);
  });
});

// An example of a function that controls what would happen when a card is clicked

function cardClicked(cardEl) {

  if(cardSelected) { return; }
  cardSelected = true;

  cardEl.classList.add("played-card");

  document.querySelector(".game-board").classList.add("card-selected");
  console.log("yupp! you just clicked a card");

  // Yes JS is cool and this would allow you to wait 500ms before revealing the hacker power
  setTimeout(function(){
    revealHackerPower();
  },500)

  setTimeout(function(){
    revealPlayerPower(cardEl);
  },800)
  
  setTimeout(function(cardEl){
    compareCards();
  }, 1400);
}

// Now write a function that shows the power level on the player card
function revealPlayerPower(cardEl){
  cardEl.classList.toggle("show-power");
}

// Write a function that shows the power level on the hacker card
function revealHackerPower(){
  hackercard.classList.toggle("show-power");
}
// Write a function to compare the cards. Here is where all your skills would come in handy! 
// P.S: We've added the 'disabled' attribute in the CSS file for the button and you should use it in case you want a certain element to just go away or 'vanish' at a certain  time. For eg: You'd definitely want the 'Next' button to go away after a player chooses a card right?

function compareCards(cardchosenbyuser){
  let winner; 
  const playerPower = parseInt(cardchosenbyuser.lastElementChild.innerText);
  const hackerPower = parseInt(hackercard.lastElementChild.innerText);
  console.log(playerPower);

  if (playerPower > hackerPower) {
    --hackerLife;
    lifeCounts[0].innerText = hackerLife;
    hackercard.classList.toggle("worse-card");
    cardchosenbyuser.classList.toggle("better-card");
    winner = 1;
  } else {
    --playerLife;
    lifeCounts[1].innerText = playerLife;
    hackercard.classList.toggle("better-card");
    cardchosenbyuser.classList.toggle("worse-card");
    winner = 0;
  }

  lifeCounts[0].innerText = hackerLife;
  lifeCounts[1].innerText = playerLife;

  updateScores();
  isGameOver();
  nextTurn(cardchosenbyuser, winner);
}
// Function to bootstrap the next turn process
function nextTurn(cardchosenbyuser, winner) {
  console.log("Inside the nextTurn function");
  console.log(nextturnbutton);

  setTimeout(() => { nextturnbutton.style.display = "block"; }, 2000);

  setTimeout(() => {  
    hackercard.classList.toggle("showCard");
    playerCardsarr.forEach((el) => { 
      el.classList.toggle("showCard");
    });

    if (winner === 0) {      // hacker won
      cardSelectedByUser.classList.toggle("worse-card");
      hackercard.classList.toggle("better-card");
    } else {
      cardSelectedByUser.classList.toggle("better-card");
      hackercard.classList.toggle("worse-card");
    }

    cardchosenbyuser.classList.toggle("played-card");
    cardchosenbyuser.classList.toggle("show-power");
    hackercard.classList.toggle("reveal-power");

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

    nextturnbutton.style.opacity = 0;

    const winnermessagediv = document.querySelector(".winner-message");
    if (playerLife <= 0) {
      winnermessagediv.innerText = hackerWinnerMessage;
    } else {
      winnermessagediv.innerText = playerWinnerMessage;
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
function restartGame(){

}

// We've also used a cool life bar that displays the life left. Write a function that updates the displayed life bar and life totals
// use innerHTML and a lot of other cool things to do this. 
function updateScores(){

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

  let turnNumber = turn % 5

  nextturnbutton.style.display = "none";
  // show the hacker card and player cards and sync all the info with the DOM
  hackercard.firstElementChild.innerText = scenarios[turnNumber].hackerCard.description;
  console.log(hackercard.lastElementChild);
  hackercard.lastElementChild.innerText = scenarios[turnNumber].hackerCard.power;

  hackercard.classList.toggle("showCard");
  playerCardsarr.forEach((el) => { 
    el.classList.toggle("showCard");

    console.log("I'm inside the playerCards forEach");
    
  });



  playerCardsarr[0].firstElementChild.innerText = scenarios[turnNumber].playerCards[0].description;
  playerCardsarr[1].firstElementChild.innerText = scenarios[turnNumber].playerCards[1].description;
  playerCardsarr[2].firstElementChild.innerText = scenarios[turnNumber].playerCards[2].description;

  playerCardsarr[0].lastElementChild.innerText = scenarios[turnNumber].playerCards[0].power;
  playerCardsarr[1].lastElementChild.innerText = scenarios[turnNumber].playerCards[1].power;
  playerCardsarr[2].lastElementChild.innerText = scenarios[turnNumber].playerCards[2].power;
}
