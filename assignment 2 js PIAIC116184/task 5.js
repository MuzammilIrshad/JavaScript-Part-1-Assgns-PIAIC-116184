// JavaScript source code
var num = 6;
var guessNum = Number(prompt("Enter any Number from 1 to 10: "));
if (guessNum === num) {
    alert("BINGO! Correct answer");
} else if (guessNum + 1 === num) {
    alert("Close enough to the secret Number");
}