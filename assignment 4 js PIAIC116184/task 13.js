// JavaScript source code
var date = new Date();
var time = date.getTime();
var mins = time / (1000 * 60);
document.write("Current date: " + date);
document.write("<br/>");
document.write("Milliseconds since Jan 1, 1970: " + time);
document.write("<br/>");
document.write("Minutes since Jan 1, 1970: " + mins);