console.log("Hello World!");

function getComputerChoice() {
	let choice = Math.floor(Math.random() * 3);
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
	let choice = prompt("Type rock, paper or scissors", "");
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

