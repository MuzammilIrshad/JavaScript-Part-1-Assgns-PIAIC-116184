// JavaScript source code
var arr = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
console.log(arr);
//document.write("<br/>");
//document.write("<br/>");
//document.write("<br/>");
var arr1 = [];
for (var i = 0; i < arr.length; i++) {
    if (arr1.indexOf(arr[i]) === -1) {
        arr1.push(arr[i]);
    }
}
console.log(arr1);