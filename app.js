// Rock paper scissor game

// function called getComputerChoice that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.

// Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters - the playerSelection and computerSelection - and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"

// Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation).

// Use prompt() to get input from the user.

let playerScore = 0;
let computerScore = 0;

const computerPlay = () => {
	let choices = ['rock', 'paper', 'scissors'];
	return choices[Math.floor(Math.random() * choices.length)];
};

const playRound = () => {
	let computerSelection = computerPlay();
	let playerSelection = prompt('Rock, paper, or scissors?');
	let result = '';

	if (
		(playerSelection == 'rock' && computerSelection == 'scissors') ||
		(playerSelection == 'scissors' && computerSelection == 'paper') ||
		(playerSelection == 'paper' && computerSelection == 'rock')
	) {
		playerScore += 1;
		console.log(
			(result =
				'You win! ' +
				playerSelection +
				' beats ' +
				computerSelection +
				'<br><br>Player score: ' +
				playerScore +
				'<br>Computer score: ' +
				computerScore)
		);

		if (playerScore == 5) {
			console.log(
				(result += '<br><br>You won the game! Reload the page to play again')
			);
		}
	} else if (playerSelection == computerSelection) {
		console.log(
			(result =
				"It's a tie. You both chose " +
				playerSelection +
				'<br><br>Player score: ' +
				playerScore +
				'<br>Computer score: ' +
				computerScore)
		);
	} else {
		computerScore += 1;
		console.log(
			(result =
				'You lose! ' +
				computerSelection +
				' beats ' +
				playerSelection +
				'<br><br>Player score: ' +
				playerScore +
				'<br>Computer score: ' +
				computerScore)
		);

		if (computerScore == 5) {
			console.log(
				(result += '<br><br>I won the game! Reload the page to play again')
			);
		}
	}

	return;
};
