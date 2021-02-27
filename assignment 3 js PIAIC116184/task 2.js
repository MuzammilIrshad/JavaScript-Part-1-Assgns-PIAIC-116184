// JavaScript source code
var stdName = ["Muzammil", "Saim", "Yasir"];
var score = ["320", "400", "300"];

for (var i = 0; i < stdName.length; i++) {
    var percentage = ((score[i] * 100) / 500);
    document.write("Score of " + stdName[i] + " is: " + score[i] + ". Percentage is: " + percentage);
    document.write("<br/>");
}