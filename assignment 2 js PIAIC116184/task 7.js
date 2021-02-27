// JavaScript source code
var num1 = Number(prompt("Enter Number:"));
var num2 = Number(prompt("Enter Number"));
var operation = prompt("Enter Operation");
if (operation === "+") {
    alert("Result is : " + (num1 + num2));
} else if (operation === "-") {
    alert("Result is : " +( num1 - num2));
}else  if (operation === "*") {
    alert("Result is : " + (num1 * num2));
}else if (operation === "/") {
    alert("Result is : " +( num1 / num2));
}else if (operation === "%") {
    alert("Result is : " + (num1 % num2));
}