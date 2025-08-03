let humanScore = 0;
let computerScore = 0;
let gameOverCounter = 5;

const buttonHolder = document.querySelector("#buttonHolder");
const resultBox = document.querySelector("#resultBox");


buttonHolder.addEventListener("click",event => {
    let target = event.target;

    switch(target.id){
        case 'rock':
            playRound("rock",getComputerChoice())
            break;
        case 'paper':
            playRound("paper",getComputerChoice())
            break;
        case 'scissor':
            playRound("scissor",getComputerChoice())
            break;
    }
});

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

function playRound(humanChoice ,computerChoice){
    if(humanChoice === computerChoice){
        let para = document.createElement("div");
        para.textContent = `\nIt is a draw\n
        Human Score : ${humanScore}\n
        Computer Score : ${computerScore}\n`;
        resultBox.appendChild(para);
    }
    else if(humanChoice === getWinner(humanChoice,computerChoice)){
        humanScore++;
        let para = document.createElement("div");
        para.textContent = 
        `\nHuman (${humanChoice}) v/s Computer (${computerChoice})\n
        Human Wins , Computer Loses !!\n
        Human Score : ${humanScore}\n
        Computer Score : ${computerScore}\n`;
        resultBox.appendChild(para);
    }
    else{
        computerScore++;
        let para = document.createElement("div");
        para.textContent = 
        `\nHuman (${humanChoice}) v/s Computer (${computerChoice})\n
        Computer Wins , Human Loses !!\n
        Human Score : ${humanScore}\n
        Computer Score : ${computerScore}`;
        resultBox.appendChild(para);
        ;
    }
}




