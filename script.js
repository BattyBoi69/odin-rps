console.log("Hello World!");

function getComputerChoice() {
	const choice = Math.floor(Math.random() * 3);
	switch (choice) {
		case 0:
			return "rock";
		case 1:
			return "paper";
		case 2:
			return "scissors";
	}
}

function getHumanChoice() {
	const choice = prompt("Type rock, paper or scissors", "").toLowerCase();
	if (choice === "rock" ||
		choice === "paper" ||
		choice === "scissors" ||
		choice === "cancel") {
		return choice;
	} else {
		alert( "Invalid input, try again, or type 'cancel' to exit." );
		return getHumanChoice();
	}
}

function playRound(humanChoice, computerChoice) {
	if (humanChoice === "cancel") return -1;

	let gameResult; //0 = lose, 1 = tie, 2 = win

	if (humanChoice === "rock") {
		if (computerChoice === "rock") gameResult = 1; 
		if (computerChoice === "paper") gameResult = 0; 
		if (computerChoice === "scissors") gameResult = 2; 
	} else if (humanChoice === "paper") {
		if (computerChoice === "rock") gameResult = 2; 
		if (computerChoice === "paper") gameResult = 1; 
		if (computerChoice === "scissors") gameResult = 0; 
	} else if (humanChoice === "scissors") {
		if (computerChoice === "rock") gameResult = 0; 
		if (computerChoice === "paper") gameResult = 2; 
		if (computerChoice === "scissors") gameResult = 1; 
	}

	let humanCapitalChoice = humanChoice.at(0).toUpperCase() + humanChoice.substring(1); 
	let computerCapitalChoice = computerChoice.at(0).toUpperCase() + computerChoice.substring(1); 
	let resultSection = document.querySelector(".result");
	let resultPara = document.createElement("div");
	let firstHalf = document.createElement("span");
	let secondHalf = document.createElement("span");

	if (gameResult === 0) {
		firstHalf.textContent = "You lose! ";
		secondHalf.textContent = computerCapitalChoice + " beats " + humanCapitalChoice;
	} else if (gameResult === 1) {
		firstHalf.textContent = "You tie! ";
		secondHalf.textContent = computerCapitalChoice + " vs. " + humanCapitalChoice;
	} else {
		firstHalf.textContent = "You win! ";
		secondHalf.textContent = humanCapitalChoice + " beats " + computerCapitalChoice;
	}

	resultPara.appendChild(firstHalf);
	resultPara.appendChild(secondHalf);
	resultSection.appendChild(resultPara);

	return gameResult;
}


let button = document.querySelectorAll("button");
button.forEach((btn) => {
	btn.addEventListener("click", (event) => {
		playRound(btn.textContent.toLowerCase(), getComputerChoice());
	})
});
