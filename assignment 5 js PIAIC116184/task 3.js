// JavaScript source code
function palindrom(word) {
    var word1 = String(word).toLowerCase().split("").reverse().join("");
    //console.log(word1);
   // console.log(word);
    if (word1 == word) {
        console.log("Word is Palindrom");
    } else {
        console.log("It is not Palindrom");
    }
    
}
palindrom("tibit");