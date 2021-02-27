// JavaScript source code
var text = "The quick brown fox jumps over the lazy dog";
document.write("Text: " + text);
var textArr=text.split(" ");
//console.log(textArr);
var wordOccur = 0;
for (var i = 0; i < textArr.length; i++) {
    if (textArr[i].toLowerCase().indexOf("the") !== -1) {
        wordOccur = wordOccur + 1;
    }
}
document.write("<br/>");
document.write("There are " + wordOccur + " occurances of the word \'the\'.");