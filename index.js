const player = prompt("Hello, please enter your name here: ")
let varScore = 0;
let starPrice = 50;
document.getElementById("pageTitle").innerText = `Welcome, ${player || "you can insert your name by refreshing the page"}!`;


function image()
{
    varScore += 1;
    newScoreText = varScore;
    if (varScore <= 1)
    {
        newScoreText += " Cookie";
    }

    else
    {
        newScoreText += " Cookies";
    }
    document.getElementById("scoreText").innerText = newScoreText;
}

function shop()
{
    if (varScore >= starPrice)
    {
        console.log("ADD 1 STAR, GET 2 MORE TO WIN THE GAME")
        varScore -= starPrice
        starPrice += 25;
        document.getElementById("buyStar").innerText = `Star cost ${starPrice} cookies`
    }

    else
    {
        alert("Insufficient cookie")
    }
}
