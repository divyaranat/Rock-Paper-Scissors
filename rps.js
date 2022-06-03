function computerPlay(){
    return Math.floor(Math.random() * 3);
}

function playRound(playerSelection, computerSelection){
    if(playerSelection == 0 && computerSelection == 2){
        console.log("Paper beats Rock. You win.")
        return 0;
    }
    else if(playerSelection == 2 && computerSelection == 0){
        console.log("Paper beats Rock. You lose.")
        return 1;
    }
    else if(playerSelection == computerSelection){
        console.log("Tie.");
        return;
    }
    else if(playerSelection == 0 && computerSelection == 1){
        console.log("Scissors beats paper. You lose.");
        return 1;
    }
    else if(playerSelection == 1 && computerSelection == 0){
        console.log("Scissors beats paper. You win.");
        return 0;
    }
    else if(playerSelection == 1 && computerSelection == 2){
        console.log("Rock beats scissors. You lose.");
        return 1;
    }
    else if(playerSelection == 2 && computerSelection == 1){
        console.log("Rock beats scissors. You win.");
        return 0;
    }
    console.log("Error.");
}

function game(){
    let playerSelection;
    let computerSelection;
    let playerScore = 0;
    let computerScore = 0;
    let roundWinner;

    for(let i = 0; i < 5; i++){
        playerSelection = prompt('Enter "Rock", "Paper", or "Scissors"').toUpperCase;

        if(playerSelection == "PAPER"){
            playerSelection = 0;
        }
        else if(playerSelection == "SCISSORS"){
            playerSelection = 1;
        }
        else{
            playerSelection = 2;
        }

        computerSelection = computerPlay();
        roundWinner = playRound(playerSelection, computerSelection);

        if(roundWinner == 0){
            playerScore++;
            console.log("Player wins round " + (i + 1) + ".");
        }
        else{
            computerScore++;
            console.log("Computer wins round " + (i + 1) + ".");
        }
        console.log("Score: Player-" + playerScore + " Computer-" + computerScore);
    }

    if(playerScore > computerScore){
        console.log("Player has won.");
    }
    else{
        console.log("Computer has won.");
    }
}