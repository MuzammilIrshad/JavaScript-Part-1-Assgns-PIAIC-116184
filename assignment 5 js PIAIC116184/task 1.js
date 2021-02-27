// JavaScript source code
function factorial(num) {
    if (num < 1) {
        return 1;
    } else {
        return num * factorial(num - 1);
    }
}
console.log(factorial(8));
console.log(factorial(5));
console.log(factorial(9));