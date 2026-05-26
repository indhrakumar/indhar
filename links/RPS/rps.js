let options = ["Rock", "Paper", "Scissor"];
let userScore = 0, compScore = 0, drawScore = 0;

function play(userChoice) {
    let compChoice = Math.floor(Math.random() * 3);

    document.getElementById("userChoice").innerText = "You: " + options[userChoice];
    document.getElementById("compChoice").innerText = "Computer: " + options[compChoice];

    if (userChoice === compChoice) {
        document.getElementById("winner").innerText = "It's a Tie 😐";
        drawScore++;
    } 
    else if (
        (userChoice === 0 && compChoice === 2) ||
        (userChoice === 1 && compChoice === 0) ||
        (userChoice === 2 && compChoice === 1)
    ) {
        document.getElementById("winner").innerText = "You Win 😎";
        userScore++;
    }
    else {
        document.getElementById("winner").innerText = "Computer Wins 🤖";
        compScore++;
    }

    document.getElementById("userScore").innerText = userScore;
    document.getElementById("compScore").innerText = compScore;
    document.getElementById("drawScore").innerText = drawScore;
}
