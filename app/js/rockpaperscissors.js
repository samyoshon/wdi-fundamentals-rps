////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
    return prompt();
}

function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    //move = move || getInput();
    console.log ("Player move is: " + move);
    return move;
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    //move = move || randomPlay();
    console.log ("Computer move is: " + move);
    return move;

}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
    if (computerMove === playerMove) {
        winner = 'tie';
    }
    else if (computerMove === 'rock' && playerMove === 'paper') {
        winner = 'player';
    }
    else if (computerMove === 'rock' && playerMove === 'scissors') {
        winner = 'computer';
    }
    else if (computerMove === 'scissors' && playerMove === 'rock') {
        winner = 'player';
    }
    else if (computerMove === 'scissors' && playerMove === 'paper') {
        winner = 'computer';
    }
    else if (computerMove === 'paper' && playerMove === 'scissors') {
        winner = 'player';
    }
    else if (computerMove === 'paper' && playerMove === 'rock') {
        winner = 'computer';
    }
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;

    while (playerWins < 5 && computerWins < 5) {

        var playerMove = getPlayerMove(getInput());
        var computerMove = getComputerMove(randomPlay());
        var winner = getWinner(playerMove, computerMove);

        if (winner == 'player') {
            playerWins = playerWins + 1;
            console.log("Player wins!");
        }

        else if (winner == 'computer') {
            computerWins = computerWins + 1;   
            console.log("Computer wins!");
        }

        else {
            console.log("Tie, play again!");
        }
    console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
    console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
    }

    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    return [playerWins, computerWins];
}

playToFive();


