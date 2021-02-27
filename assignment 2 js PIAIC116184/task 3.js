// JavaScript source code
var a = 4;
if (++a === 5) {
    alert("given condition for variable a is true");  //message displayed
}
var b = 82;
if (b++ === 83) {
    alert("given condition for variable b is true");
}
var c = 12;
if (c++ === 13) {
    alert("condition 1 is true");
}
if (c === 13) {
    alert("condition 2 is true");   //message displayed
}
if (++c < 14) {
    alert("condition 3 is true");
}
if (c === 14) {
    alert("condition 4 is true");   //message displayed
}
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
    alert("The cost equals");         //message displayed
}
if(true){
    alert("True");     //message displayed
}
if (false) {
    alert("False");
}
if("car" < "cat"){
    alert("car is smaller than cat");   //message displayed
}
