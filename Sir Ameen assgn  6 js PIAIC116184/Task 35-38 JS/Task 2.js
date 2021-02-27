function factorize(num) {
    num = Number(num);
    if (num <= 0) {
        return 1;
    }
    else {
        return num * factorize(num - 1);
    }
}
var val = Number(prompt("Enter Value"));
console.log(factorize(val));