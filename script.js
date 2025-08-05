let humanScore ;
let computerScore ;

const buttonHolder = document.querySelector("#buttonHolder");
const resultBox = document.querySelector("#resultBox");

const humanScoreDom = document.querySelector("#humanScoreDom");
const computerScoreDom = document.querySelector("#computerScoreDom");

const humanEmoji = document.querySelector("#humanEmoji");
const computerEmoji = document.querySelector("#computerEmoji");

const gameWinner = document.querySelector("#gameWinner");
const playAgainBtn = document.querySelector("#playAgainBtn");
const gameOverDiv = document.querySelector("#gameOverDiv");
const gameOverOverlay = document.querySelector("#gameOverOverlay");

startGame();

function startGame(){
    humanScore = 0;
    computerScore = 0;

    gameOverDiv.classList.toggle("active");
    gameOverOverlay.classList.toggle("active");
    resultBox.textContent = "FIRST TO SCORE 5 WINS";
    humanEmoji.textContent = "❓";
    computerEmoji.textContent = "❓";
    humanScoreDom.textContent = `Human : ${humanScore}`;
    computerScoreDom.textContent = `Computer : ${computerScore}`;
}

buttonHolder.addEventListener("click",event => {
    let target = event.target;

    switch(target.id){
        case 'rock':
            playRound("✊",getComputerChoice())
            break;
        case 'paper':
            playRound("🖐️",getComputerChoice())
            break;
        case 'scissor':
            playRound("✌️",getComputerChoice())
            break;
    }
});

function getComputerChoice(){
    let randomNumber = Math.floor(Math.random()*3)

    switch (randomNumber){
        case 0:
            return "✊";
        case 1:
            return "🖐️";
        case 2:
            return "✌️";
    }
}

function getWinner(humanChoice ,computerChoice){
    if (humanChoice === "✊" && computerChoice === "🖐️"||        humanChoice === "🖐️" && computerChoice === "✊"){
        return "🖐️";
    }
    else if(humanChoice === "🖐️" && computerChoice === "✌️"|| humanChoice === "✌️" && computerChoice === "🖐️"){
        return "✌️";
    }
    else{
        return "✊";
    }
}

function playRound(humanChoice ,computerChoice){
    humanEmoji.textContent = humanChoice;
    computerEmoji.textContent = computerChoice;

    if(humanChoice === computerChoice){
        resultBox.textContent = "IT'S A DRAW";
    }
    else if(humanChoice === getWinner(humanChoice,computerChoice)){
        humanScore++;
        humanScoreDom.textContent = `Human : ${humanScore}`;
        resultBox.textContent = "HUMAN WINS";
    }
    else{
        computerScore++;
        resultBox.textContent = "COMPUTER WINS";
        computerScoreDom.textContent = `Computer : ${computerScore}`;
    }
    checkGameOver();
}

function checkGameOver(){
    if( humanScore === 5 ){
        toggleGameOverPage("Human");
    }
    else if( computerScore === 5 ){
        toggleGameOverPage("Computer");
    }
}

function toggleGameOverPage(Winner){
    gameWinner.textContent = `${Winner} Wins!`;
    gameOverDiv.classList.toggle("active");
    gameOverOverlay.classList.toggle("active");
}

playAgainBtn.addEventListener("click",()=>{
    startGame();
});


