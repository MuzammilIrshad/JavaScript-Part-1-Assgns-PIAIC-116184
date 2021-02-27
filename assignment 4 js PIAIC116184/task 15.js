// JavaScript source code
var age = Number(prompt("Enter age: "));
var date = new Date();
var year = date.getFullYear();
document.write("Your age is: " + age);
document.write("<br/>");
document.write("Your Birth year is: " + (year - age));