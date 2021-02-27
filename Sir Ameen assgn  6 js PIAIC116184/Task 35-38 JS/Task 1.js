
function value(word) {
    var word1 = String(word).split(" ");
    var value1 = [];
    for (var i = 0; i < word1.length; i++) {
        var letter = word1[i].slice(0, 1).toUpperCase();
        var compStr = letter + word1[i].slice(1, word1[i].length);
        value1.push(compStr);
    }
    var value2 = value1.join(" ");
    console.log(value2);
}
var inputValue = prompt("Enter String");
value(inputValue);