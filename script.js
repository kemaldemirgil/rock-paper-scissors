var compValue;
var myRandom;
// Random Computer Roll
function compMath () {
    myRandom = Math.floor(Math.random() * 3);
    if (myRandom === 0) {
        compValue = "r";
    } else if (myRandom === 1) {
        compValue = "p";
    } else if (myRandom === 2) {
        compValue = "s";
    }
    // console.log(compValue);
}
// compMath();
// console.log(myRandom);
// console.log(compValue);
var myScore = 0;
var compScore = 0;
var rString = "Rock";
var pString = "Paper";
var sString = "Scissors";
document.getElementById("start").onclick = function game () {
    // Game Description for User
    var info = confirm("Win 10 times to beat 216-Robot\nDo you want to start the game?");
    do {
        compMath();
        // console.log(compValue);
        if (info === true) {
            var rps = prompt("Type:\nR for Rock,\nP for Paper,\nS for Scissors").toLowerCase();
            if (rps === "") {
                alert("Please enter a valid value");
            }
            if (rps === compValue) {
                alert("            Draw\n\n\n\n\nYou= " + myScore + "              216-Robot = " + compScore);
            }
            if (rps === "r" && compValue === "s") {
                myScore++;
                alert("You: Rock    216-Robot: Scissors\n\n\n             You Win !\n\n\nYou = " + myScore + "         216-Robot= " + compScore);
            }   
            else if (rps === "r" && compValue === "p") {
                compScore++;
                alert("You: Rock    216-Robot: Paper\n\n\n             You Lose!\n\n\nYou = " + myScore + "         216-Robot= " + compScore);
            }
            if (rps === "p" && compValue === "r") {
                myScore++;
                alert("You: Paper    216-Robot: Rock\n\n\n             You Win !\n\n\nYou = " + myScore + "         216-Robot= " + compScore);
            } else if (rps === "p" && compValue === "s") {
                compScore++;
                alert("You: Paper    216-Robot: Scissors\n\n\n             You Lose!\n\n\nYou = " + myScore + "         216-Robot= " + compScore);
            }
            if (rps === "s" && compValue === "r") {
                myScore++;
                alert("You: Scissors    216-Robot: Rock\n\n\n             You Lose\n\n\nYou = " + myScore + "         216-Robot= " + compScore);
            } else if (rps === "s" && compValue === "p") {
                compScore++;
                alert("You: Scissors    216-Robot: Paper\n\n\n             You Win!\n\n\nYou = " + myScore + "         216-Robot= " + compScore);
            }
            if (myScore === 10 || compScore === 10) {
                alert("Final Score\nYou= " + myScore + "          216-Robot= " + compScore);
                myScore = 0;
                compScore = 0;
                break;
            }
        // If user doesn't accept description, reload page
        }
    }
        // console.log(myScore);
        // console.log(compScore);
    // Whoever reaches 10, wins
    while (myScore || compScore <= 10)
    if (info === false) {
        location.reload();
    }


}


// console.log(compValue);