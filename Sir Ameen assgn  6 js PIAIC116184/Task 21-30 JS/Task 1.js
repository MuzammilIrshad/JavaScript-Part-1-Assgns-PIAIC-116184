var user = parseFloat(prompt("Enter number:"));
var greatNum = Math.ceil(user);
var text = "This is my dummy text";
var text1 = text.slice(0, greatNum);
var text2 = "";
for (var i = text1.length-1; i >= 0; i--) {
    text2 = text2 + text1[i];
}
alert(text2);