// JavaScript source code
var date = new Date();
document.write("Current date: " + date);
var hours = date.getHours();
var past1Hour = date.setHours(hours-1);
document.write("<br/>");
document.write("1 hour ago, time was: " + date);