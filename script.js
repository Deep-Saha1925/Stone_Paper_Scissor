let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#message");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id")
        playGame(userChoice);
    });
});

const drawGame = () => {
    msg.innerHTML = 'Game draw. Play Again';
    msg.style.background = "#432971";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerHTML = userScore;
        msg.innerHTML = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.background = "green";
    }
    else {
        compScore++;
        compScorePara.innerHTML = compScore;
        msg.innerHTML = `You Lose! ${compChoice} beats your ${userChoice}`;
        msg.style.background = "red";
    }
};

const playGame = (userChoice) => {
    console.log("User choice = " + userChoice);

    //generate computer choice
    const compChoice = generateCompChoice();
    if (userChoice === compChoice) {
        //draw
        drawGame();
    }

    else {
        let userWin = true;
        if (userChoice === "rock") {
            // scissors, paper
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            // rock, scissors
            userWin = compChoice === "scissors" ? false : true;
        }
        else {
            // rock, paper
            userWin = compChoice === "rock" ? false : true;
        }

        showWinner(userWin, userChoice, compChoice);
    }
};

const generateCompChoice = () => {
    //rock, paper, scissor
    let options = ["rock", "paper", "scissors"];
    let randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
};