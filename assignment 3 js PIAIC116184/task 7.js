// JavaScript source code
var a = [10, 20, 4, 40, 60, 70]
var b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
var c = b.concat(a);
//console.log(c);
var finalArr = [];
for (var i = 0; i < c.length; i++) {
    if (finalArr.indexOf(c[i]) === -1) {
        finalArr.push(c[i]);
    }
}
console.log(finalArr);

