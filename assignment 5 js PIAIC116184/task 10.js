// JavaScript source code
function countVowel(string) {
    var count = 0;
    for (var i = 0; i < string.length; i++) {
        if (string[i] === "a" || string[i] === "e" || string[i] === "i" || string[i] === "o" || string[i] === "u") {
            count = count + 1;
        }
    }
    console.log("No of Vowels in " + string + " are: " + count);
}
countVowel(String(prompt("Enter the word")));