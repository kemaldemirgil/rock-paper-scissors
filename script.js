var compValue;
var myRandom;
// Random Computer Roll
function compMath () {
    myRandom = Math.floor(Math.random() * 3);
    if (myRandom === 0) {
        compValue = "r";
    } else if (myRandom === 1) {
        compValue = "p";
    } else {
        compValue = "s";
    }
    // console.log(compValue);
}
// compMath();
// console.log(myRandom);
// console.log(compValue);
var myScore = 0;
var compScore = 0;
document.getElementById("start").onclick = function game () {
    // Game Starter
    var info = confirm("Win 10 times to beat 216-Robot\nDo you want to start the game?");
    do {
        compMath();
        if (info === true) {
            var rps = prompt("Type:\nR for Rock,\nP for Paper,\nS for Scissors").toLowerCase();
            if (rps === "") {
                alert("Please enter a valid value");
            }
            if (rps === compValue) {
                alert("\n\n\n            ❌Draw❌\n\n\nYou= " + myScore + "              216-Robot = " + compScore);
            }
            if (rps === "r" && compValue === "s") {
                myScore++;
                alert("You: Rock    216-Robot: Scissors\n\n\n         🌟🌌✨You Win!🌟🌌✨\n\n\nYou = " + myScore + "         216-Robot= " + compScore);
            }   
            else if (rps === "r" && compValue === "p") {
                compScore++;
                alert("You: Rock    216-Robot: Paper\n\n\n         💥🔥💣You Lose!💥🔥💣\n\n\nYou = " + myScore + "         216-Robot= " + compScore);
            }
            if (rps === "p" && compValue === "r") {
                myScore++;
                alert("You: Paper    216-Robot: Rock\n\n\n         🌟🌌✨You Win!🌟🌌✨\n\n\nYou = " + myScore + "         216-Robot= " + compScore);
            } else if (rps === "p" && compValue === "s") {
                compScore++;
                alert("You: Paper    216-Robot: Scissors\n\n\n         💥🔥💣You Lose!💥🔥💣\n\n\nYou = " + myScore + "         216-Robot= " + compScore);
            }
            if (rps === "s" && compValue === "r") {
                compScore++;
                alert("You: Scissors    216-Robot: Rock\n\n\n         💥🔥💣You Lose!💥🔥💣\n\n\nYou = " + myScore + "         216-Robot= " + compScore);
            } else if (rps === "s" && compValue === "p") {
                myScore++;
                alert("You: Scissors    216-Robot: Paper\n\n\n         🌟🌌✨You Win!🌟🌌✨\n\n\nYou = " + myScore + "         216-Robot= " + compScore);
            }
            if (myScore === 10 || compScore === 10) {
                if (myScore === 10) {
                    alert("💎💎💎YOU WIN💎💎💎")
                }
                if (compScore === 10) {
                    alert("☠️☠️☠️YOU LOSE☠️☠️☠️")
                }
                alert("          Final Score\nYou= " + myScore + "          216-Robot= " + compScore);
                myScore = 0;
                compScore = 0;
                break;
            }
        }
    }
    // Whoever reaches 10, wins
    while (myScore || compScore <= 10)
    // If user doesn't accept description, reload page
    if (info === false) {
        location.reload();
    }
}