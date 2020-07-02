const player = prompt("Hello, please enter your name here: ")

document.getElementById("pageTitle").innerText = `Welcome, ${player || "you can insert your name by refreshing the page"}!`;

let score = document.getElementById("score").innerText;

function image()
{
    score += 1;
}

console.log(score)