// HELLO FELLOW CODERS! WE WELCOME YOU TO THE WORLD OF JAVASCRIPT 

//----- We've curated this assignment for someone staring out in exploring the beauty of JavaScript and would urge you to go through the resources shared with you before you start with this. ----- // 

//Go through the CSS file as well to get a hold of all the attributes we've added. You're free to add some of your own and maybe delete some of ours xD

//The point is, we want you to have fun and use all the concepts while doing this task. In case of any doubts, feel free to reach out to us!

// Your main work would be here, in main.js and would advice you to also pay a visit to the scenario.js


// Life of the player and the hacker.
var playerLife = 5;
var hackerLife = 5;

// Message to be displayed when the game is over
var hackerWinnerMessage = "Write the message here";
var playerWinnerMessage = "Write the message here";

// ---------------Game code starts here ---------------//

// declare a few handy variables like we've done :p

var playerStartLife = parseInt(playerLife);
var hackerStartLife = parseInt(hackerLife);
var cardSelected = false;
var playedCardIndex;
var turn = 0;
var rounds = 0;

// we will declare the functions for you and you will complete those 
updateScores();

// you learnt DOM manipulation right? here's an example of the same. Go ahead and use manipulate the DOM!
document.querySelector(".game-board").classList.add("before-game");

var allCardElements = document.querySelectorAll(".card");

var hackerCard = allCardElements[0];

// Adds click handler to all player card elements so that your cards are actionable

for (var i = 1; i <= 3; i++) {
  allCardElements[i].addEventListener("click", cardClicked.bind(null, allCardElements[i], i));
}
// An example of a function that controls what would happen when a card is clicked

function cardClicked(cardEl, index) {

  if (cardSelected) { return; }
  cardSelected = true;

  cardEl.classList.add("played-card");

  playedCardIndex = index;


  document.querySelector(".game-board").classList.add("card-selected");

  hackerPower = scenarios[turn]["hackerCard"]["power"];
  playerPower = scenarios[turn]["playerCards"][index - 1]["power"];
  turn++;
  if (turn === 5) {
    turn = 0;
    rounds++;
  }




  // Yes JS is cool and this would allow you to wait 500ms before revealing the hacker power
  setTimeout(function () {
    revealHackerPower(hackerPower);
  }, 500)

  setTimeout(function () {
    revealPlayerPower(playerPower);
  }, 800)

  setTimeout(function () {
    compareCards(hackerPower, playerPower, hackerCard, cardEl);
  }, 1400);
}

// Now write a function that shows the power level on the player card
function revealPlayerPower(playerPower) {
  document.querySelector(".card.player-card.played-card .power").innerHTML = playerPower;
  document.querySelector(".card.player-card.played-card").classList.add("reveal-power");
}

// Write a function that shows the power level on the hacker card
function revealHackerPower(hackerPower) {
  document.querySelector(".card.hacker-card .power").innerHTML = hackerPower;
  document.querySelector(".card.hacker-card").classList.add("reveal-power");
}
// Write a function to compare the cards. Here is where all your skills would come in handy! 
// P.S: We've added the 'disabled' attribute in the CSS file for the button and you should use it in case you want a certain element to just go away or 'vanish' at a certain  time. For eg: You'd definitely want the 'Next' button to go away after a player chooses a card right?

function compareCards(hackerPower, playerPower, hackerCard, playerCard) {
  if (playerPower > hackerPower) {
    hackerCard.classList.add("worse-card");
    playerCard.classList.add("better-card");
    hackerLife -= playerPower - hackerPower;
  }
  else if (playerPower < hackerPower) {
    hackerCard.classList.add("better-card");
    playerCard.classList.add("worse-card");
    playerLife -= hackerPower - playerPower;
  }
  updateScores();
  document.querySelector(".next-turn").style.display = "flex";


}

//Use conditional statements and complete the function that shows the winner message
function gameOver() {
  var winner = document.querySelector(".winner-section");
  var winnerMessage = document.querySelector(".winner-message");
  if (playerLife === 0) {
    winnerMessage.innerHTML = "You got Hacked!";
    winner.style.display = "flex";
    document.querySelector(".winner-section .restart").disabled = false;
    document.querySelector(".next-turn").style.display = "none";
    return true;
  }
  else if (hackerLife === 0) {
    winnerMessage.innerHTML = "You defeated the hacker!";
    winner.style.display = "flex";
    document.querySelector(".winner-section .restart").disabled = false;
    document.querySelector(".next-turn").style.display = "none";
    return true;
  }
  else {
    return false;
  }
}


// Write a function that starts the game
function startGame() {
  document.querySelector(".hacker-card").classList.add("prepared");
  document.getElementById("app").classList.remove("before-game");
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



}



// Write a function that Plays one turn of the game
function playTurn() {
  if (turn === 0 && rounds === 0) {
    revealCards();
  }
  else {
    var check = gameOver();
    if (!check) {
      document.querySelector(".next-turn").style.display = "none";
      allCardElements[playedCardIndex].classList.remove("played-card");
      allCardElements[playedCardIndex].classList.remove("worse-card", "better-card", "reveal-power");
      allCardElements[0].classList.remove("worse-card", "better-card", "reveal-power");
      for (var i = 0; i < 4; i++) {
        document.querySelectorAll(".card")[i].classList.remove("showCard");
      }
      setTimeout(revealCards, 500);
      cardSelected = false;
      document.querySelector(".game-board").classList.remove("card-selected");
    }
  }


}

// Finally write the function that reveals the cards. Use 
function revealCards() {



  document.querySelector(".hacker-card .text").innerHTML = scenarios[turn]["hackerCard"]["description"];
  document.querySelector(".hacker-card .power").innerHTML = scenarios[turn]["hackerCard"]["power"];
  document.querySelector(".hacker-card").classList.add("showCard");


  setTimeout(function () {
    document.querySelectorAll(".player-card .text")[0].innerHTML = scenarios[turn]["playerCards"][0]["description"];
    document.querySelector(".player-card .power").innerHTML = scenarios[turn]["playerCards"][0]["power"];
    document.querySelectorAll(".player-card")[0].classList.add("showCard");
  }, 200);
  setTimeout(function () {
    document.querySelectorAll(".player-card .text")[1].innerHTML = scenarios[turn]["playerCards"][1]["description"];
    document.querySelector(".player-card .power").innerHTML = scenarios[turn]["playerCards"][1]["power"];
    document.querySelectorAll(".player-card")[1].classList.add("showCard");
  }, 400);
  setTimeout(function () {
    document.querySelectorAll(".player-card .text")[2].innerHTML = scenarios[turn]["playerCards"][2]["description"];
    document.querySelector(".player-card .power").innerHTML = scenarios[turn]["playerCards"][2]["power"];
    document.querySelectorAll(".player-card")[2].classList.add("showCard");
  }, 600);
}
