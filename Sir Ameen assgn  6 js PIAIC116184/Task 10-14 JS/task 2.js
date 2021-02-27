// JavaScript source code
var course1 = Number(prompt("Enter marks:"));
var course2 = Number(prompt("Enter marks:"));
var course3 = Number(prompt("Enter marks:"));
var course4 = Number(prompt("Enter marks:"));
var course5 = Number(prompt("Enter marks:"));
var totalMarks = 500;
var obtMarks = course1 + course2 + course3 + course4 + course5;
var result = (obtMarks * 100) / totalMarks;
alert(result);