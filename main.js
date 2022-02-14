var playerLife = 5;
var hackerLife = 5;

var hackerWinnerMessage = "YOU JUST GOT HECKED";
var playerWinnerMessage = "HACKER GAVE UP SEEING YOUR CYBER CONSCIOUSNESS";


var playerStartLife = parseInt(playerLife);
var hackerStartLife = parseInt(hackerLife);

var roundFinished = false;
var cardSelected = false;

var questionNumber = 0;


updateScores();

document.querySelector(".game-board").classList.add("before-game");

var allCardElements = document.querySelectorAll(".card");

for (var i = 0; i < allCardElements.length; i++) {
	var card = allCardElements[i];
	if (card.classList.contains("player-card")) {
		card.addEventListener("click", function (e) {
			cardClicked(this);
		});
	}
}

function cardClicked(cardEl) {

	if (cardSelected) { return; }
	cardSelected = true;

	cardEl.classList.add("played-card");

	document.querySelector(".game-board").classList.add("card-selected");

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

function revealPlayerPower() {
	var playerCard = document.querySelector(".played-card");
	playerCard.classList.add("reveal-power");
}

function revealHackerPower() {
	var hackerCard = document.querySelector(".hacker-card");
	hackerCard.classList.add("reveal-power");
}

function compareCards() {
	var playerCard = document.querySelector(".played-card");
	var playerPowerEl = playerCard.querySelector(".power");

	var hackerCard = document.querySelector(".hacker-card");
	var hackerPowerEl = hackerCard.querySelector(".power");

	var playerPower = parseInt(playerPowerEl.innerHTML);
	var hackerPower = parseInt(hackerPowerEl.innerHTML);

	var powerDifference = playerPower - hackerPower;

	if (powerDifference < 0) {
		playerLife = playerLife + powerDifference;
		playerLife = playerLife < 0 ? 0 : playerLife;
		hackerCard.classList.add("better-card");
		playerCard.classList.add("worse-card");
		document.querySelector(".player-stats .thumbnail").classList.add("ouch");
	} else if (powerDifference > 0) {
		hackerLife = hackerLife - powerDifference;
		hackerLife = hackerLife < 0 ? 0 : hackerLife;
		playerCard.classList.add("better-card");
		hackerCard.classList.add("worse-card");
		document.querySelector(".hacker-stats .thumbnail").classList.add("ouch");
	} else {
		playerCard.classList.add("tie-card");
		hackerCard.classList.add("tie-card");
	}

	updateScores();

	if (playerLife == 0) {
		gameOver("Hacker");
	} else if (hackerLife == 0) {
		gameOver("Player")
	}

	roundFinished = true;

	document.querySelector("button.next-turn").removeAttribute("disabled");
}

function gameOver(winner) {
	document.querySelector(".game-board").classList.remove("during-game");
	document.querySelector(".game-board").classList.add("game-over");
	document.querySelector(".winner-section").style.display = "flex";
	document.querySelector(".winner-section").classList.remove("player-color");
	document.querySelector(".winner-section").classList.remove("hacker-color");

	if (winner == "Hacker") {
		document.querySelector(".winner-message").innerHTML = hackerWinnerMessage;
		document.querySelector(".winner-section").classList.add("hacker-color");
	} else {
		document.querySelector(".winner-message").innerHTML = playerWinnerMessage;
		document.querySelector(".winner-section").classList.add("player-color");
	}
}


function startGame() {
	document.querySelector(".game-board").classList.remove("before-game");
	document.querySelector(".game-board").classList.add("during-game");
	playTurn();
}


function restartGame() {
	document.querySelector(".game-board").classList.remove("game-over");
	document.querySelector(".game-board").classList.remove("during-game");
	document.querySelector(".game-board").classList.add("before-game");

	document.querySelector(".winner-section").style.display = "none";
	document.querySelector(".hacker-card").style.display = "none";

	var cards = allCardElements;

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

function updateScores() {

	document.querySelector(".player-stats .life-total").innerHTML = playerLife;
	document.querySelector(".hacker-stats .life-total").innerHTML = hackerLife;

	var playerPercent = playerLife / playerStartLife * 100;
	if (playerPercent < 0) {
		playerPercent = 0;
	}
	document.querySelector(".player-stats .life-left").style.height = playerPercent + "%";

	var hackerPercent = hackerLife / hackerStartLife * 100
	if (hackerPercent < 0) {
		hackerPercent = 0;
	}
	document.querySelector(".hacker-stats .life-left").style.height = hackerPercent + "%";
}


function shuffleArray(a) {
	var j, x, i;
	for (i = a.length; i; i--) {
		j = Math.floor(Math.random() * i);
		x = a[i - 1];
		a[i - 1] = a[j];
		a[j] = x;
	}
	return a;
}


function playTurn() {

	questionNumber += 1;

	roundFinished = true;
	cardSelected = false;

	document.querySelector(".game-board").classList.remove("card-selected");

	document.querySelector(".hacker-stats .thumbnail").classList.remove("ouch");
	document.querySelector(".player-stats .thumbnail").classList.remove("ouch");

	document.querySelector(".next-turn").setAttribute("disabled", "true");

	for (var i = 0; i < allCardElements.length; i++) {
		var card = allCardElements[i];
		card.classList.remove("showCard");
	}

	setTimeout(function () {
		revealCards();
	}, 500);
}

function revealCards() {

	var j = 0;

	var cardIndexes = shuffleArray([0, 1, 2]);

	console.log("scenarios.length == " + scenarios.length);

	var randomScenarioIndex = questionNumber % scenarios.length;

	var scenario = scenarios[randomScenarioIndex];
	console.log(scenario.hackerCard.description);

	console.log("scenarios.length after splice == " + scenarios.length);

	var hackerCard = scenario.hackerCard;
	var hackerCardEl = document.querySelector(".hacker-area .card");

	var playerCards = scenario.playerCards;

	for (var i = 0; i < allCardElements.length; i++) {
		var card = allCardElements[i];

		card.classList.remove("worse-card");
		card.classList.remove("better-card");
		card.classList.remove("played-card");
		card.classList.remove("tie-card");
		card.classList.remove("prepared");
		card.classList.remove("reveal-power");

		if (card.classList.contains("player-card")) {
			card.querySelector(".text").innerHTML = playerCards[cardIndexes[j]].description;
			card.querySelector(".power").innerHTML = playerCards[cardIndexes[j]].power;
			j++;
		}

		setTimeout(function (card, j) {
			return function () {
				card.classList.remove("prepared");
				card.style.display = "block";
				card.classList.add("showCard");
			}
		}(card, i), (i + 1) * 200);
	}

	hackerCardEl.querySelector(".text").innerHTML = hackerCard.description;
	hackerCardEl.querySelector(".power").innerHTML = hackerCard.power;
}