// JavaScript source code
guessGame();
function guessGame() {
    var randNum = Math.floor(Math.random() * 100);
    console.log("R.N = "+randNum);
     var limit = 0;
    var guessNum = parseInt(prompt("Guess the Number"));
    var isWon = false;
    while (limit <= 2) {
        limit++;
        if (guessNum === randNum) {
            console.log("You are Right, you won");
           // console.log(guessNum);
            isWon = true;
            break;
        } else {
            guessNum = parseInt(prompt("Incorrect please Try again"));
            //console.log(guessNum)
        }
    }
    if (isWon === true) {
        var playAgain = prompt("Enter yes if you want to play again").toLowerCase();
        if (playAgain === "yes") {
           // randNum = Math.floor(Math.random() * 100);
           // guessNum = parseInt(prompt("Guess the Number please"));
            guessGame();
        } else {
            console.log("Thankyou for playing with us today");
        }
    }

    else if (limit === 3 && isWon === false) {
        console.log("You Lose!")
        var againPlay = prompt("Enter yes if you want to play again").toLowerCase();
        if (againPlay === "yes") {
            //randNum = Math.floor(Math.random() * 100);
            //console.log(randNum);
            //guessNum = parseInt(prompt("Guess the Number please"));
            //limit = 0;
            guessGame();
        } else {
            console.log("Thankyou for playing with us today");
            
        }
    }
}



