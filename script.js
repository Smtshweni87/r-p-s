function getComputerChoice(){
    switch(Math.floor(Math.random()*3)){
        case 0:
            return 'rock'
        case 1:
            return 'paper'
        case 2:
            return 'scissors'
    }
}

function getHumanChoice(){
    let choice = prompt('Enter your choice: rock, paper or scissors').toLowerCase()
    
    while(choice !== 'rock' && choice !== 'paper' && choice !== 'scissors'){
        choice=prompt('Invalid input. Please enter rock, paper or scissors').toLowerCase()
    }
    return choice;
}

let humanScore = 0;
let computerScore =0;

function playRound(humanChoice, computerChoice){
    /*humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();*/

    if(humanChoice === computerChoice){
        return 'you tied'
    }
    else if(
        humanChoice === 'rock' && computerChoice === 'scissors' ||
        humanChoice === 'scissors' && computerChoice === 'paper' ||
        humanChoice === 'paper' && computerChoice === 'rock'
    ){
        humanScore++
        return 'you win'
    }
    else{
    computerScore++
    return 'computer wins'
    }
}

function playGame(){

/*while (humanScore < 5 && computerScore < 5){
    playRound()
}
if(humanScore === 5){
    return 'you win'
}
else if(computerScore ===5){
    return 'you lose'
}*/

for(let round = 1; round <=5; round++){
    console.log('Round ',round)
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    const result = playRound(humanChoice, computerChoice);
    console.log('You chose '+ humanChoice);
    console.log('Computer chose '+computerChoice);
    console.log(result);
    console.log('Score - You: '+humanScore+', Computer: '+computerScore);
    console.log('-------------------------------------')
}
if(humanScore> computerScore){
    console.log('Congrats! you win the game')
}else if(computerScore> humanScore){
    console.log('You lose')
}else{
    console.log('The game is a tie!')
}
}


playGame()