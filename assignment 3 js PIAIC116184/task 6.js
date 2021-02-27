// JavaScript source code
var aCities = ["Karachi", "Lahore", "Islamabad", "Faisalabad"];
var o = ["th", "st", "nd", "rd"];
var a = o.shift();
 o.push(a);
//console.log(o);
for (var i = 0; i < aCities.length; i++) {
    document.write(i+1 + o[i] + " choice is " + aCities[i]);
    document.write("<br/>");
}