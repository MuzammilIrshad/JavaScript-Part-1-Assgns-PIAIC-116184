// JavaScript source code
var num = parseInt(prompt("Enter the Number"));
var nums = String(num);
//console.log(nums.length);
var sum = 0;
for (var i = 0; i < nums.length; i++) {
    sum = sum + Number(nums[i]);
}
console.log((sum / nums.length));