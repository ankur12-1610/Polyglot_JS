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
// you learnt DOM manipulation right? here's an example of the same. Go ahead and use manipulate the DOM!
document.querySelector(".game-board").classList.add("before-game");

var allCardElements = document.querySelectorAll(".card");


// Adds click handler to all player card elements so that your cards are actionable
for(var i=0; i<allCardElements.length; i++){
  // allCardElements[i].addEventListener('click',cardClicked(allCardElements[i]));
  allCardElements[i].addEventListener('click', function(){
    // cardClicked(allCardElements[i]);
    // console.log("card is clicked")
    cardSelected = true; 
    // revealPlayerPower();
    //cardClicked(allCardElements[i]);
  })
  // console.log(allCardElements[i]);
}

// An example of a function that controls what would happen when a card is clicked

function cardClicked(cardEl) {
  //var cardSelected = cardEl;
  if(cardSelected) {
    return;
  }
  else{
    cardSelected = true;
  }
  console.log(cardEl);

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
  var cards = document.querySelectorAll(".card .power");
  for(var i=0; i<cards.length; i++){
    
    cards[i].style.color = "black";
    //console.log("color is",cards[i].style.color);
    
  }
  //revealingPlayerCard.style.color = "black";
 
}

// Write a function that shows the power level on the hacker card
function revealHackerPower(){
  // document.querySelector(".hacker-card .power").innerHTML = hackerLife;
  // console.log(document.querySelector(".hacker-card .power").innerHTML);
  let poer = document.querySelector(".hacker-card .power").innerHTML = scenarios[0].hackerCard.power;
  console.log(poer);
}
// Write a function to compare the cards. Here is where all your skills would come in handy! 
// P.S: We've added the 'disabled' attribute in the CSS file for the button and you should use it in case you want a certain element to just go away or 'vanish' at a certain  time. For eg: You'd definitely want the 'Next' button to go away after a player chooses a card right?

function compareCards(){


}

//Use conditional statements and complete the function that shows the winner message
function gameOver(winner) {

  
}


// Write a function that starts the game
function startGame() {
  var cards = document.getElementsByClassName('card');
  // console.log(cards.length)
  for(var i=0; i<cards.length ; i++){
    // console.log(cards[i].innerHTML);
    if(i==0){
      cards[i].querySelector('.text').innerHTML = scenarios[0].hackerCard.description;
      cards[i].querySelector('.power').innerHTML = scenarios[0].hackerCard.power;
    }
    else{
      cards[i].querySelector('.text').innerHTML = scenarios[0].playerCards[i-1].description;
      cards[i].querySelector('.power').innerHTML = scenarios[0].playerCards[i-1].power;
    }
    
    // cards[i].querySelector('.text').innerHTML = scenarios[0].hackerCard.description;
    cards[i].style.opacity = 1;
  }
  //revealPlayerPower();

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

  var hackerPercent = hackerLife / hackerStartLife * 100;
  if(hackerPercent < 0){
    hackerPercent = 0;
  }

  

}



// Write a function that Plays one turn of the game
function playTurn() {

}

// Finally write the function that reveals the cards. Use 
function revealCards(){

}