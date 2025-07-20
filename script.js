let humanScore = 0;
let computerScore = 0;
let gameOverCounter = 5;

checkGameOver();

function getComputerChoice(){
    let randomNumber = Math.floor(Math.random()*3)

    switch (randomNumber){
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissor";
    }
}

function getHumanChoice(){
    let humanChoice = prompt("Enter one of the three choices given below:"+
    "\n1 . Rock (Beats Scissors)"+
    "\n2 . Paper (Beats Rock)"+
    "\n3 . Scissor (Beats Paper)\n");
    
    return humanChoice;
}

function getWinner(humanChoice ,computerChoice){
    if (humanChoice === "rock" && computerChoice === "paper"||        humanChoice === "paper" && computerChoice === "rock"){
        return "paper";
    }
    else if(humanChoice === "paper" && computerChoice === "scissor"|| humanChoice === "scissor" && computerChoice === "paper"){
        return "scissor";
    }
    else{
        return "rock";
    }
}

function playRound(humanChoice = getHumanChoice().toLowerCase(),
computerChoice = getComputerChoice()){
    if(humanChoice === computerChoice){
        console.log(`\nIt is a draw\n
        Human Score : ${humanScore}\n
        Computer Score : ${computerScore}`);
        gameOverCounter--;
        checkGameOver();
    }
    else if(humanChoice === getWinner(humanChoice,computerChoice)){
        humanScore++;
        console.log(`\nHuman (${humanChoice}) v/s Computer (${computerChoice})\n
        Human Wins , Computer Loses !!\n
        Human Score : ${humanScore}\n
        Computer Score : ${computerScore}`);
        gameOverCounter--;
        checkGameOver();
    }
    else{
        computerScore++;
        console.log(`\nHuman (${humanChoice}) v/s Computer (${computerChoice})\n
        Computer Wins , Human Loses !!\n
        Human Score : ${humanScore}\n
        Computer Score : ${computerScore}`);
        gameOverCounter--;
        checkGameOver();
    }
}

function checkGameOver(){
    if (gameOverCounter !== 0){
        playRound();
    }
    else{
        if(humanScore === computerScore){
            console.log(`\nIt is a draw\n
            Human Score : ${humanScore}\n
            Computer Score : ${computerScore}`);
        }
        else if(humanScore > computerScore){
            console.log(`Human Wins , Computer Loses !!\n
            Human Score : ${humanScore}\n
            Computer Score : ${computerScore}`);
        }
        else{
            console.log(`Computer Wins , Human Loses !!\n
            Human Score : ${humanScore}\n
            Computer Score : ${computerScore}`);
        }
    }
}

