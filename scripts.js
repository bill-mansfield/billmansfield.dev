
//variables
var playerScore = 0;
var computerScore = 0;
var outcomes = ["rock", "paper", "scissors"];
var winner = "";
var playerWin = "You Win!";
var computerWin = "You Lose!";
var tie = "Tie!";

const optionsFront = document.querySelector("#options");
const container = document.querySelector("#play");
const scoreBoard = document.querySelector("#scoreboard");
const input = document.querySelector("#input");
const initBtn = document.getElementById("init")
const options = ["rock", "paper", "scissors"];
const h1 = document.createElement("h1");
const h2 = document.createElement("h2");
const h3 = document.createElement("h3");
const body = document.querySelector("#body");


//Loop through options create buttons and event function for each option that plays game (game());
function createBtns(arr) {
    arr.forEach(element => {
        var i = document.createElement("button");
        i.textContent = element;
        i.addEventListener("click", function(e) {
            game(element);
        })
        optionsFront.appendChild(i);
    });
}

//Begin game: create buttons, hide play button and add scoreboard to dom
function init() {

    var ps = document.createElement("h2");
    var cs = document.createElement("h2");

    createBtns(options);
    container.classList.add("hidden");

    ps.textContent = "Your score: ";
    ps.setAttribute("id", "playerscore");
    scoreBoard.appendChild(ps);

    cs.textContent = "Computer score: ";
    cs.setAttribute("id", "computerscore");
    scoreBoard.appendChild(cs);
}

/* 
Take player imput via prompt
Display outcome from RPS function to show who won round
Tally score
First to reach a score of 5 is displayed as the winner via an alert()
*/
function game(playerInput) {
    var computerSelection = computerPlay();
    var outcome = RPS(playerInput, computerSelection);
    var playerScoreNode = document.getElementById("playerscore");
    var computerScoreNode = document.getElementById("computerscore");

    h1.textContent = outcome;
    input.appendChild(h1);

    h3.textContent = "You played: " + playerInput + " Computer played: " + computerSelection;
    input.appendChild(h3);


    if (outcome === "You Win!") {
        playerScore++;
        playerScoreNode.textContent += "|";
        if (playerScore >= 5) {
            document.querySelector("#junk").classList.add("hidden");
            h1.textContent = playerWin;
            body.appendChild(h1);
            setTimeout(function(){
                window.location.reload(false); 
            },1500);
        }
    }

    if (outcome === "You Lose!") {
        computerScore++;
        computerScoreNode.textContent += "|";
        if (computerScore >= 5) {
            document.querySelector("#junk").classList.add("hidden");
            h1.textContent = computerWin
            body.appendChild(h1);
            setTimeout(function(){
                window.location.reload(false); 
            },1500);
        }
    }
}

// Computer chooses random select of Rock, Paper or Scissors
function computerPlay() {
    return outcomes[Math.floor(Math.random() * Math.floor(3))];
}

// Determine winner and return outcome
function RPS(playerSelection, computerSelection) {

    if (playerSelection === "rock" && computerSelection === "paper") {
    winner = computerWin;
    }
    if (playerSelection === "rock" && computerSelection === "scissors") {
    winner = playerWin;
    }
    if (playerSelection === "rock" && computerSelection === "rock") {
    winner = tie;
    }
    if (playerSelection === "paper" && computerSelection === "paper") {
    winner = tie;
    }
    if (playerSelection === "paper" && computerSelection === "scissors") {
    winner = computerWin;
    }
    if (playerSelection === "paper" && computerSelection === "rock") {
    winner = playerWin;
    }
    if (playerSelection === "scissors" && computerSelection === "paper") {
    winner = playerWin;
    }
    if (playerSelection === "scissors" && computerSelection === "scissors") {
    winner = tie;
    }
    if (playerSelection === "scissors" && computerSelection === "rock") {
    winner = computerWin;
    }

return winner;
}
