// HELLO FELLOW CODERS! WE WELCOME YOU TO THE WORLD OF JAVASCRIPT 

//----- We've curated this assignment for someone staring out in exploring the beauty of JavaScript and would urge you to go through the resources shared with you before you start with this. ----- // 

//Go through the CSS file as well to get a hold of all the attributes we've added. You're free to add some of your own and maybe delete some of ours xD

//The point is, we want you to have fun and use all the concepts while doing this task. In case of any doubts, feel free to reach out to us!

// Your main work would be here, in main.js and would advice you to also pay a visit to the scenario.js


// Life of the player and the hacker.
var playerLife = 5;
var hackerLife = 5;

// Message to be displayed when the game is over
var hackerWinnerMessage = "Hacker won the game. ";
var playerWinnerMessage = "You won the game, Hacker lost";

// ---------------Game code starts here ---------------//

// declare a few handy variables like we've done :p

var playerStartLife = parseInt(playerLife);
var hackerStartLife = parseInt(hackerLife);

// we will declare the functions for you and you will complete those 
updateScores();

//card is not selected currently
var cardSelected = false;

//index of the scenerios
let scene = 0;

// you learnt DOM manipulation right? here's an example of the same. Go ahead and use manipulate the DOM!
document.querySelector(".game-board").classList.add("before-game");

var allCardElements = document.querySelectorAll(".card");


// Adds click handler to all player card elements so that your cards are actionable
for (var i = 1; i < allCardElements.length; i++) {
  // console.log(`${i}`);
  //console.log( document.getElementById(`${i}`).id);\
  let id = document.getElementById(`${i}`).id;
  allCardElements[i].addEventListener('click', function () {
    cardClicked(parseInt(id));
  })
}

// An example of a function that controls what would happen when a card is clicked

function cardClicked(id) {
  //var cardSelected = cardEl;
  if (cardSelected) {
    return;
  }
  else {
    cardSelected = true;
  }
  // cardE1 = document
  // console.log(id);
  let cardEl = document.getElementById(`${id}`);
  //console.log(cardEl);

  cardEl.classList.add("played-card");

  document.querySelector(".game-board").classList.add("card-selected");

  // Yes JS is cool and this would allow you to wait 500ms before revealing the hacker power
  setTimeout(function () {
    revealHackerPower();
  }, 500)

  setTimeout(function () {
    revealPlayerPower(id);
  }, 800)

  setTimeout(function () {
    compareCards(id);
  }, 1400);


}

// Now write a function that shows the power level on the player card
function revealPlayerPower(id) {
  document.getElementById(`${id}`).querySelector(".power").style.color = "black";

}

// Write a function that shows the power level on the hacker card
function revealHackerPower() {
  document.querySelector(".hacker-card").querySelector(".power").style.color = "black";

}
// Write a function to compare the cards. Here is where all your skills would come in handy! 
// P.S: We've added the 'disabled' attribute in the CSS file for the button and you should use it in case you want a certain element to just go away or 'vanish' at a certain  time. For eg: You'd definitely want the 'Next' button to go away after a player chooses a card right?

function compareCards(id) {
  let playerScore = parseInt(document.getElementById(`${id}`).querySelector(".power").innerHTML);
  let hackerScore = parseInt(document.querySelector(".hacker-card").querySelector(".power").innerHTML);
  if (playerScore > hackerScore) {
    hackerLife -= hackerScore;
  }
  else if (hackerScore > playerScore) {
    playerLife -= playerScore;
  }

  updateScores();
  setTimeout(function () {
    document.querySelector(".next-turn").style.display = 'block';
  }, 300);
  
}

//Use conditional statements and complete the function that shows the winner message
function gameOver(winner) {
  

}


// Write a function that starts the game
function startGame() {
  var cards = document.getElementsByClassName('card');
  for (var i = 0; i < cards.length; i++) {
    if (i == 0) {
      cards[i].querySelector('.text').innerHTML = scenarios[scene].hackerCard.description;
      cards[i].querySelector('.power').innerHTML = scenarios[scene].hackerCard.power;
    }
    else {
      cards[i].querySelector('.text').innerHTML = scenarios[scene].playerCards[i - 1].description;
      cards[i].querySelector('.power').innerHTML = scenarios[scene].playerCards[i - 1].power;
    }

    cards[i].style.opacity = 1;
  }
  document.querySelector(".before-game .start-game").style.display = 'none';
  document.querySelector(".next-turn").style.display = 'none';
   
}


// Now write a function that starts the game over from scratch
function restartGame() {
  scene=0;
  startGame(); 
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
}



// Write a function that Plays one turn of the game
function playTurn() {
  // let btn = document.querySelector(".played-card"); 
  
  // console.log(window.getComputedStyle(btn).transform); 
  var cards = document.getElementsByClassName('card');
  for(var i=0; i<cards.length; i++){
    cards[i].style.opacity = 0;
    cards[i].querySelector(".power").style.color = "white";
    //window.getComputedStyle(cards[i]).opacity = 0;
    cards[i].style.transform = 'translateY(0px)';
    // console.log(cards[i]);
  }
  // console.log("next round is loaded")
  scene = (scene+1)%(scenarios.length);
  // // location.reload();
  // startGame();
  cardSelected=false;
  setTimeout(function () {
    startGame();
  }, 600);
  

}

// Finally write the function that reveals the cards. Use 
function revealCards() {
  var cards = document.getElementsByClassName('card');
  for(var i=0; i<cards.length; i++){
    cards[i].querySelector(".power").style.color = "black";
  }
}