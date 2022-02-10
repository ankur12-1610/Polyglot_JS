// HELLO FELLOW CODERS! WE WELCOME YOU TO THE WORLD OF JAVASCRIPT 

//----- We've curated this assignment for someone staring out in exploring the beauty of JavaScript and would urge you to go through the resources shared with you before you start with this. ----- // 

//Go through the CSS file as well to get a hold of all the attributes we've added. You're free to add some of your own and maybe delete some of ours xD

//The point is, we want you to have fun and use all the concepts while doing this task. In case of any doubts, feel free to reach out to us!

// Your main work would be here, in main.js and would advice you to also pay a visit to the scenario.js


// Life of the player and the hacker.
var playerLife = 5;
var hackerLife = 5;

// Message to be displayed when the game is over
var hackerWinnerMessage = "You were hacked";
var playerWinnerMessage = "You defeated the hacker";

          // ---------------Game code starts here ---------------//

// declare a few handy variables like we've done :p

var playerStartLife = parseInt(playerLife);
var hackerStartLife = parseInt(hackerLife);

var roundEnd = false;
var cardSelected = false;

// we will declare the functions for you and you will complete those 
updateScores();

// you learnt DOM manipulation right? here's an example of the same. Go ahead and use manipulate the DOM!
document.querySelector(".game-board").classList.add("before-game");

var allCardElements = document.querySelectorAll(".card");

// Adds click handler to all player card elements so that your cards are actionable
for(var i=0 ; i<allCardElements.length ; i++)
{
  if(allCardElements[i].classList.contains("player-card")){
    allCardElements[i].addEventListener("click",function(e){cardClicked(this);});
  };
}

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
  document.querySelector(".played-card").classList.add("reveal-power");
}

// Write a function that shows the power level on the hacker card
function revealHackerPower(){
  document.querySelector(".hacker-card").classList.add("reveal-power");

}
// Write a function to compare the cards. Here is where all your skills would come in handy! 
// P.S: We've added the 'disabled' attribute in the CSS file for the button and you should use it in case you want a certain element to just go away or 'vanish' at a certain  time. For eg: You'd definitely want the 'Next' button to go away after a player chooses a card right?

function compareCards(){
  var playerscore = parseInt(document.querySelector(".played-card").querySelector(".power").innerHTML);
  var hackerscore = parseInt(document.querySelector(".hacker-card").querySelector(".power").innerHTML);
  
  
  if(playerscore > hackerscore)
  {
    hackerLife -= playerscore-hackerscore;
    document.querySelector(".played-card").classList.add("better-card");
    document.querySelector(".hacker-card").classList.add("worse-card");
    document.querySelector(".hacker-stats .thumbnail").classList.add("ouch");
    
  }
  else if(hackerscore > playerscore)
  {
    playerLife += playerscore-hackerscore;
    document.querySelector(".played-card").classList.add("worse-card");
    document.querySelector(".hacker-card").classList.add("better-card");
    document.querySelector(".player-stats .thumbnail").classList.add("ouch");
  }


  else{
    document.querySelector(".played-card").classList.add("tie-card");
    document.querySelector(".hacker-card").classList.add("tie-card");
  }

  updateScores();

  if(playerLife<=0)
  {
    gameOver("Hacker");
  }
  else if(hackerLife<=0)
  {
    gameOver("Player");
  }

  roundEnd = true;
  if(playerLife>0 && hackerLife>0)
  document.querySelector(".next-turn").removeAttribute("disabled");

}

//Use conditional statements and complete the function that shows the winner message
function gameOver(winner) {
  document.querySelector(".game-board").classList.add("game-over");
  document.querySelector(".winner-section").classList.remove("player-color");
  document.querySelector(".winner-section").classList.remove("hacker-color");
  document.querySelector(".winner-section").style.display = "flex" ;
  document.querySelector(".next-turn").setAttribute("disabled","true");
  if(winner=="Player")
  {
    document.querySelector(".winner-message").innerHTML = playerWinnerMessage;
    document.querySelector(".winner-section").classList.add("player-color");
    document.querySelector(".next-turn").setAttribute("disabled","true");
  
  }
  else{
    document.querySelector(".winner-section").classList.add("hacker-color");
    document.querySelector(".winner-message").innerHTML = hackerWinnerMessage;
    document.querySelector(".next-turn").setAttribute("disabled","true");
  

  }
}


// Write a function that starts the game
function startGame() {
    document.querySelector(".game-board").classList.remove("before-game");
    document.querySelector(".game-board").classList.add("during-game");
    playTurn();
    
  }


// Now write a function that starts the game over from scratch
function restartGame(){
  document.querySelector(".game-board").classList.remove("game-over");
  document.querySelector(".game-board").classList.remove("during-game");
  document.querySelector(".game-board").classList.add("before-game");
  document.querySelector(".winner-section").style.display = "none";
  document.querySelector("button").removeAttribute("disabled");

  for(var i=0 ; i< allCardElements.length ; i++)
  {
    allCardElements[i].style.display = "none";
  }

  playerLife = playerStartLife;
  hackerLife = hackerStartLife;

  roundEnd = true ; 
  cardSelected = false ; 

  updateScores();
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
  var hackerPercent = hackerLife / hackerStartLife*100;
  if(hackerPercent < 0){
    hackerPercent = 0;
  }
  document.querySelector(".hacker-stats .life-left").style.height = hackerPercent + "%";
}



// Write a function that Plays one turn of the game
function playTurn() {
  roundEnd = true;
  cardSelected = false;

  document.querySelector(".game-board").classList.remove("card-selected");
  document.querySelector(".player-stats .thumbnail").classList.remove("ouch");
  document.querySelector(".hacker-stats .thumbnail").classList.remove("ouch");
  document.querySelector(".next-turn").setAttribute("disabled","true");
  
  for(var i=0 ; i<allCardElements.length ; i++)
  {
    allCardElements[i].classList.add("showCard");
  }
  
  setTimeout(function(){
    revealCards();
  }, 500);
}
var j=0,k=0;

// Finally write the function that reveals the cards. Use 
function revealCards(){

  
  

  for(var i=0 ; i<allCardElements.length ; i++)
  {
    allCardElements[i].classList.remove("reveal-power");
    allCardElements[i].classList.remove("worse-card");
    allCardElements[i].classList.remove("better-card");
    allCardElements[i].classList.remove("tie-card");
    allCardElements[i].classList.remove("played-card");
  

  if(allCardElements[i].classList.contains("player-card"))
  {
    allCardElements[i].querySelector(".text").innerHTML = scenarios[j].playerCards[k].description;
    allCardElements[i].querySelector(".power").innerHTML = scenarios[j].playerCards[k].power;
    k++;
    if(k==3)
    {
      k=0;
      j++;
    }
  }

  document.querySelector(".hacker-area .card").querySelector(".text").innerHTML = scenarios[j].hackerCard.description;
  document.querySelector(".hacker-area .card").querySelector(".power").innerHTML = scenarios[j].hackerCard.power;

 }
}