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
document.getElementById("start").onclick = function game () {
    // Game Description for User
    var info = confirm("       R = Rock\n       P = Paper\n       S = Scissors\nClick OK to continue...");
    do {
        compMath();
        // console.log(compValue);
        if (info === true) {
            var rps = prompt("'R'ock, 'P'aper, 'S'cissors?").toLowerCase();
            if (rps === "") {
                alert("Please enter a valid value");
            } else if (rps === compValue) {
                draw();
            } else if (rps === "r" && compValue === "p") {
                lose();
            } else if (rps === "r" && compValue === "s") {
                win();
            } else if (rps === "p" && compValue === "r") {
                win();    
            } else if (rps === "p" && compValue === "s") {
                lose();
            } else if (rps === "s" && compValue === "r") {
                lose();
            } else if (rps === "s" && compValue === "p") {
                win();
            }
            function draw () {
                alert("Draw");
                alert("Your Score = " + myScore + "\nComputer Score = " + compScore);
            }
            function win () {
                myScore++;
                alert("Your Choice : " + rps + "\nComputer Choice : " + compValue + "\nYou win");
                alert("Your Score = " + myScore + "\nComputer Score = " + compScore);
            }
            function lose () {
                compScore++;
                alert("Your Choice : " + rps + "\nComputer Choice : " + compValue + "\nYou lose");
                alert("Your Score = " + myScore + "\nComputer Score = " + compScore);
            }
            if (myScore === 10 || compScore === 10) {
                alert("   Final Score\nYour Score = " + myScore + "\nComputer Score = " + compScore);
                myScore = 0;
                compScore = 0;
                break;
            }
        // If user doesn't accept desription, reload page
        } else if (info === false) {
            location.reload();
        }
        // console.log(myScore);
        // console.log(compScore);
    }
    // Whoever reaches 10, wins
    while (myScore || compScore <= 10);
}

// console.log(compValue);