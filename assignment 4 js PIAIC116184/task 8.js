// JavaScript source code
var num = Number(prompt("Enter Number: "));
 var num1 =  String(num);
var tw = [" " ," ","twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
var nums = [" ", "One", "two", "three ", "four", "five", "Six", "Seven", "Eight", "Nine"];
var th = ["ten", "eleven", "twelve", "thirteen", "forteen", "fifteen", "sixteen", "seventeen", "eighteen", "ninteen"];
//console.log(num1);
var n0 = Number(num1[0]);
var n1 = Number(num1[1]);
var n2 = Number(num1[2]);
if (num1.length === 2) {
    var wor1 = "";
    if (n0 > 1) {
        wor1 = wor1 + tw[n0];
        console.log(wor1 + " " + nums[n1]);
    }
    else if (n0 === 1) {
        console.log(th[n1]);
    }
}
else if (num1.length === 3) {
    if (n1 > 1) {
        console.log(nums[n0] + " Hundred and " + tw[n1] + " " + nums[n2]);
    }
    else if (n1 === 1) {
        console.log(nums[n0] + " Hundred and " + th[n2] + " " + nums[n2]);
    }
    else if (n1 === 0) {
        console.log(nums[n0] + " Hundred " + nums[n2]);
    }
} else if (num1.length === 1) {
    console.log(nums[n0]);
} else {
    alert("Enter 3, 2 or 1 digit Numbers ");
}
