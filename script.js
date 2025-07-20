let humanScore = 0;
let computerScore = 0;

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


