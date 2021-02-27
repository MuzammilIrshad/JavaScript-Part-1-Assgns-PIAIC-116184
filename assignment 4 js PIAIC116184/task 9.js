// JavaScript source code
var str = "<p><strong><em>Only Print this</em></strong></p>";
var indexO = str.indexOf("O");
var indexs = str.indexOf("is");
var str1 = str.slice(indexO, indexs + 2);
document.write(str1);