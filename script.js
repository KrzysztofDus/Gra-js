var player = {
	name: '',
	score: 0,
	pick: '',
};

var computer = {
	name: 'Komputer',
	score: 0,
	pick: '',
};


var round = 0;

function newGame() {
	player.pick = "";
	player.score = 0;
	computer.score = 0;
	computer.pick = "";
	round = 0;
	player.name = prompt("Podaj swoje imie");
	document.getElementById("playerName").innerHTML = player.name;
	var buttons = document.getElementsByClassName("pick-button");
	for (var i = 0; i < buttons.length; i++) {
		buttons[i].style.visibility = 'visible';
  	}
  	while(player.name === "") {
	player.name = prompt("Podaj swoje imie");
	}
  	

}

function playerPick(pick) {
  		player.pick = pick;
  		computerPick();
  		checkResult();
}

function computerPick() {
  //random number between 0 and 3
  switch (Math.floor(Math.random()*3)) {
    case 0:
    computer.pick = "Rock";
    break;
    case 1:
    computer.pick = "Paper";
    break;
    case 2:
    computer.pick = "Scissors";
    break;
  }
};

function checkResult() {
	var gameResult;
	if (player.pick === computer.pick) {
		gameResult = "Remis!"; 
		}
	else if (player.pick === "Rock") { 
		if (computer.pick === "Scissors") { 
			player.score++; 
			gameResult = "Wygrałeś!"; } 
		else if (computer.pick === "Paper") { 
			computer.score++; 
			gameResult = "Komputer Wygrał!"; }
		}
	else if (player.pick === "Paper") { 
		if  (computer.pick === "Rock") { 
			player.score++; 
			gameResult = "Wygrałeś!"; }
		else if (computer.pick === "Scissors") { 
			computer.score++; 
			gameResult = "Komputer Wygrał!"; }
		}
	else if (player.pick === "Scissors") { 
		if  (computer.pick === "Paper") { 
			player.score++;
			gameResult = "Wygrałeś!"; }
		else if (computer.pick === "Rock") { 
			computer.score++; 
			gameResult = "Komputer Wygrał!"; }
		}

round++;
	
	document.getElementById("round").innerHTML = round;
	document.getElementById("computerPick").innerHTML = computer.pick;
	document.getElementById("playerPick").innerHTML = player.pick;
	document.getElementById("gameResult").innerHTML = gameResult;
	document.getElementById("playerScore").innerHTML = player.score;
	document.getElementById("computerScore").innerHTML = computer.score;

	if ( (player.score >= 10) || (computer.score >=10) ) {
	if (player.score > computer.score) {
    document.getElementById("roundResult").innerHTML = "Gratuluje Wygrałeś!";}
    else {
    document.getElementById("roundResult").innerHTML = "Jesteś przegrany!!!";}

  var buttons = document.getElementsByClassName("pick-button");
  for(var i = 0; i < buttons.length; i++) {
    buttons[i].style.visibility = 'hidden';
  }
}
}


 