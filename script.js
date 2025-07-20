let humanScore = 0;
let computerScore = 0;
playRound();

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
    if (humanChoice==="rock"||humanChoice==="paper"&&               computerChoice==="rock"||computerChoice==="paper"){
        return "paper";
    }
    else if(humanChoice==="scissor"||humanChoice==="paper"&&          computerChoice==="scissor"||computerChoice==="paper"){
        return "scissor";
    }
    else{
        return "rock";
    }
}

function playRound(humanChoice = getHumanChoice().toLowerCase(),
computerChoice = getComputerChoice()){
    if(humanChoice === computerChoice){
        console.log("\nIt is a draw")
    }
    else if(humanChoice === getWinner(humanChoice,computerChoice)){
        humanScore++;
        console.log(`\nHuman (${humanChoice}) v/s
                Computer (${computerChoice})\n
                Human Wins , Computer Loses !!\n
                Human Score : ${humanScore}\n
                Computer Score : ${computerScore}`);
    }
    else{
        computerScore++;
        console.log(`\nHuman (${humanChoice}) v/s
                Computer (${computerChoice})\n
                Computer Wins , Human Loses !!\n
                Human Score : ${humanScore}\n
                Computer Score : ${computerScore}`);
    }
}
