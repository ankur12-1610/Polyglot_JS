// HELLO FELLOW CODERS! WE WELCOME YOU TO THE WORLD OF JAVASCRIPT 

//----- We've curated this assignment for someone staring out in exploring the beauty of JavaScript and would urge you to go through the resources shared with you before you start with this. ----- // 

//Go through the CSS file as well to get a hold of all the attributes we've added. You're free to add some of your own and maybe delete some of ours xD

//The point is, we want you to have fun and use all the concepts while doing this task. In case of any doubts, feel free to reach out to us!

// Your main work would be here, in main.js and would advice you to also pay a visit to the scenario.js

// Life of the player and the hacker.
var playerLife = 5;
var hackerLife = 5;

// Message to be displayed when the game is over
var hackerWinnerMessage = "Oops! You got hacked";
var playerWinnerMessage = "You are safe";

          // ---------------Game code starts here ---------------//

// declare a few handy variables like we've done :p

var playerStartLife = parseInt(playerLife);
var hackerStartLife = parseInt(hackerLife);
var startbutton=document.querySelector(".start-game");
var hackercard=document.querySelector(".card.hacker-card.hacker-color")
var playercard=document.querySelectorAll(".card.player-card.player-color");
var cardSelected;
var hackercardpower;
var playercardpower;
var selectedplayercard;
var i=0;


// we will declare the functions for you and you will complete those 
updateScores();
// Finally write the function that reveals the cards. Use 
function revealCards(){
  if(i==3)
  i=0;
  document.querySelectorAll(".card")[0].style.opacity=10;
  document.querySelectorAll(".card")[1].style.opacity=10;  
  document.querySelectorAll(".card")[2].style.opacity=10;
  document.querySelectorAll(".card")[3].style.opacity=10;
  hackercard.querySelector(".text").textContent=scenarios[i].hackerCard.description;
  playercard[0].querySelector(".text").textContent=scenarios[i].playerCards[0].description;
  playercard[1].querySelector(".text").textContent=scenarios[i].playerCards[1].description;
  playercard[2].querySelector(".text").textContent=scenarios[i].playerCards[2].description;
  i++; 
  cardSelected=false;    
  }

// you learnt DOM manipulation right? here's an example of the same. Go ahead and use manipulate the DOM!
document.querySelector(".game-board").classList.add("before-game");

var allCardElements = document.querySelectorAll(".card");

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
  if (hackerPercent < 0) {
    hackerPercent = 0;
  }
  document.querySelector(".hacker-stats .life-left").style.height =  hackerPercent + "%";
  if(playerPercent>0 && hackerPercent>0)
  document.querySelector("button.next-turn").style.display="block";
  else
  gameOver();
}
document.querySelector("button.next-turn").style.display="none";

// Now write a function that shows the power level on the player card
function revealPlayerPower(){
  if(selectedplayercard==playercard[0])
  {playercard[0].querySelector(".power").textContent=scenarios[i-1].playerCards[0].power;
   playercardpower=scenarios[i-1].playerCards[0].power;}
  else if(selectedplayercard==playercard[1])
  {playercard[1].querySelector(".power").textContent=scenarios[i-1].playerCards[1].power;
   playercardpower=scenarios[i-1].playerCards[1].power;}
  else
  {playercard[2].querySelector(".power").textContent=scenarios[i-1].playerCards[2].power;
   playercardpower=scenarios[i-1].playerCards[2].power;}
}

// Write a function that shows the power level on the hacker card
function revealHackerPower(){
  
  hackercard.querySelector(".power").textContent=scenarios[i-1].hackerCard.power;
  hackercardpower=scenarios[i-1].hackerCard.power;
 
}
// Write a function to compare the cards. Here is where all your skills would come in handy! 
// P.S: We've added the 'disabled' attribute in the CSS file for the button and you should use it in case you want a certain element to just go away or 'vanish' at a certain  time. For eg: You'd definitely want the 'Next' button to go away after a player chooses a card right?

function compareCards()
 { 
  if(hackercardpower>playercardpower)
  { 
    playerLife=playerLife-hackercardpower+playercardpower;
    hackercard.classList.add("better-card");
    selectedplayercard.classList.add("worse-card");                                                                    
    document.querySelector(".player-area .thumbnail").classList.add("ouch");
  }

  else if(hackercardpower<playercardpower)
  { 
    hackerLife=hackerLife+hackercardpower-playercardpower;
    selectedplayercard.classList.add("better-card"); 
    hackercard.classList.add("worse-card");
    document.querySelector(".hacker-area .thumbnail").classList.add("ouch");
  }
  else
  {selectedplayercard.classList.add("tie-card"); 
  hackercard.classList.add("tie-card");} 
  updateScores();
 }


// An example of a function that controls what would happen when a card is clicked

function cardClicked(cardEl) {

  if(cardSelected) { return; }
  cardSelected = true;

  selectedplayercard=cardEl;

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

// Adds click handler to all player card elements so that your cards are actionable
  playercard[0].addEventListener('click',function(e){
  if(e.target.parentNode==playercard[0])
    {cardClicked(e.target.parentNode);}
  else
  {cardClicked(e.target)}});

  playercard[1].addEventListener('click',function(e){
  if(e.target.parentNode==playercard[1])
  cardClicked(e.target.parentNode);
  else
  cardClicked(e.target)});

  playercard[2].addEventListener('click',function(e){
  if(e.target.parentNode==playercard[2])
  cardClicked(e.target.parentNode);
  else
  cardClicked(e.target)});

//Use conditional statements and complete the function that shows the winner message
function gameOver() {
  if(playerLife<=0)
  document.querySelector(".winner-section .winner-message").textContent=hackerWinnerMessage;
  else
  document.querySelector(".winner-section .winner-message").textContent=playerWinnerMessage;
  document.querySelector(".winner-section").style.display="block";
}


// Write a function that starts the game
function startGame() {
  startbutton.parentNode.removeChild(startbutton);
  revealCards();


}


// Now write a function that starts the game over from scratch
function restartGame(){

}





// Write a function that Plays one turn of the game
function playTurn() {

  document.querySelector("button.next-turn").style.display="none";
  document.querySelectorAll(".card")[0].style.opacity=0;
  document.querySelectorAll(".card")[1].style.opacity=0;  
  document.querySelectorAll(".card")[2].style.opacity=0;
  document.querySelectorAll(".card")[3].style.opacity=0;
  if(hackercardpower>playercardpower)
  { selectedplayercard.classList.remove("worse-card");
  hackercard.classList.remove("better-card");
  document.querySelector(".player-area .thumbnail").classList.remove("ouch");
  }
  else if(hackercardpower<playercardpower)
  {
    selectedplayercard.classList.remove("better-card");
    hackercard.classList.remove("worse-card");
    document.querySelector(".hacker-area .thumbnail").classList.remove("ouch");}
  else
    {selectedplayercard.classList.remove("tie-card"); 
    hackercard.classList.remove("tie-card");}
    hackercard.querySelector(".power").textContent=" ";
    selectedplayercard.querySelector(".power").textContent=" ";
    selectedplayercard.classList.remove("played-card");
    document.querySelector(".game-board").classList.remove("card-selected");
    revealCards();
}

