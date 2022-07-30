const playerScore = document.getElementById('score1');
const computerScore = document.getElementById('score2');
const playerSign = document.getElementById('playerSign')
const computerSign = document.getElementById('computerSign');
const roundWinnerSign = document.getElementById('roundWinner');
possibleChoises = document.querySelectorAll('button');
const endGameMode = document.getElementById('endGame');
const endGameMessage = document.getElementById('endGameMessage');
const ovrl = document.getElementById('overlay');
const restartButton = document.getElementById('restart');

let playerSelection
let computerSelection
let roundWinner
let score1 = 0;
let score2 = 0;
    
possibleChoises.forEach(possibleChoise => possibleChoise.addEventListener('click', (e) => {

    playerSelection = e.target.id;
    playerSign.textContent = "😝 You chose:  " + playerSelection;
    computerSelection = getRandom();
    computerSign.textContent = "🤖 Computer chose:  " + computerSelection;
    game();
    if (endGame()) {
        openEndgameModal();
        restartButton.addEventListener('click', restartGame());
    }
}));

function getRandom() {
    let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return 'Rock';
        case 1:
            return 'Paper';
        case 2:
            return 'Scissors';
    }
};
    

function playRound(playerSelection, computerSelection) {

    if (playerSelection===computerSelection){
        roundWinner = "It's a tie!";
        console.log("It's a tie!")
    } else if (playerSelection==="Paper" && computerSelection==="Sissors" ||
    playerSelection==="Rock" && computerSelection==="Paper"||
    playerSelection==="Scissors" && computerSelection==="Rock"){   
        score2++;
        roundWinner = "Computer wins this round!";
        console.log("You lost!")
    } else if (playerSelection==="Paper" && computerSelection==="Rock" ||
    playerSelection==="Rock" && computerSelection==="Scissors" ||
    playerSelection==="Scissors" && computerSelection==="Paper") {   
        score1++;
        roundWinner = "Player wins this round!";
        console.log("You win this round!");
    }
    roundWinnerSign.textContent = roundWinner;
    playerScore.innerHTML = score1;
    computerScore.innerHTML = score2;
};


function endGame() {

    if (score1===5) {
        endGameMessage.textContent = 'You won!'
    } else if (score2===5) {
        endGameMessage.textContent = 'You lost!'
    } 
    
};

function game () {  
    if (score1 < 5 && score2 < 5) {
        playRound(playerSelection, computerSelection);  
    } else {
        endGame();
        openEndgameModal();
    }
};

function openEndgameModal() {
    endGameMode.classList.add('active')
    overlay.classList.add('active')
  }
  
  function closeEndgameModal() {
    endGameMode.classList.remove('active')
    overlay.classList.remove('active')
  };
  
  function gameOverMessage() {
    return score1 ===5
      ? (endGameMessage.textContent = 'You won!')
      : (endGameMessage.textContent = 'You lost...')
  };
  



