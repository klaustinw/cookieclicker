const player = prompt("Hello, please enter your name here: ")
let varScore = 0;
let increments = 1;
let starPrice = 100;
let upgradePrice = 25;
let star = 0;
document.getElementById("pageTitle").innerText = `Welcome, ${player || "you can insert your name by refreshing the page"}!`;

function shopStar()
{
    if (varScore >= starPrice)
    {
        varScore -= starPrice
        starPrice += 100;
        star += 1;
        document.getElementById("buyStar").innerText = `Star cost ${starPrice} cookies, ${star}/3`
        document.getElementById("scoreText").innerText = `You bought a star! You now own ${star}/3`;
    }

    else
    {
        alert("Insufficient cookies")
    }

    if (star >= 3)
    {
        alert(`Congratulation! You win the game!`)
    }
}

function shopUpgrade()
{
    if (increments == 5)
    {
        alert(`You have fully upgraded your clicker!`)
    }

    else
    {
        if (varScore >= upgradePrice)
        {
            varScore -= upgradePrice;
            upgradePrice += 25;
            increments += 1;
            document.getElementById("buyUpgrade").innerText = `Upgrade cost ${upgradePrice} cookies!`
            document.getElementById("scoreText").innerText = `You bought an upgrade!`;

            if (increments == 5)
            {
                document.getElementById("buyUpgrade").innerText = `You have maximized your upgrade!`
            }
        }
    
        else
        {
            alert("Insufficient cookies")
        }
    }
}

function image()
{
    varScore += increments;
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