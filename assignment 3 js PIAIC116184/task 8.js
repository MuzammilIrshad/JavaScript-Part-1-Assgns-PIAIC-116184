// JavaScript source code
var count = [];
for (var i = 1; i <= 15; i++) {
    count.push(i);
}
document.write("a.  Counting: " + count);
document.write("<br/>");
document.write("<br/>");
var revCount = [];
for (var i = 10; i >= 1; i--) {
    revCount.push(i);
}
document.write("b.  Reverse Counting: " + revCount);
document.write("<br/>");
document.write("<br/>");
var evenNum = [];
for (var i = 0; i <= 20; i++) {
    var num = i % 2;
    if (num === 0) {
        evenNum.push(i);
    }
}
document.write("c.  Even: " + evenNum);
document.write("<br/>");
document.write("<br/>");
var oddNum = [];
for (var i = 0; i <= 20; i++) {
    var num = i % 2;
    if (num === 1) {
        oddNum.push(i);
    }
}
document.write("d.  Odd: " + oddNum);
document.write("<br/>");
document.write("<br/>");
var series = [];
for (var i = 2; i <= 20; i++) {
    var num = i % 2;
    if (num === 0) {
        series.push(i + "k");
    }
}
document.write("e.  Series: " + series);



