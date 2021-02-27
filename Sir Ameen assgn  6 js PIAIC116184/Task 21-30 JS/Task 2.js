var inputValue = prompt("Enter String").split(" ");
var value1 = [];
for (var i = 0; i < inputValue.length; i++) {
    var letter = inputValue[i].slice(0, 1).toUpperCase();
    var compStr = letter + inputValue[i].slice(1, inputValue[i].length);
    value1.push(compStr);
}
var value2 = value1.join(" ");
console.log(value2);