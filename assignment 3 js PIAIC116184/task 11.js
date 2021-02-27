// JavaScript source code
A = ["cake", "apple pie", "cookie", "chips", "patties"];
var cusOrder = prompt("Welcome to ABC Bakery. What do you want to order Sir/Ma'am?");
var isAvailable = false;
for (var i = 0; i < A.length; i++) {
    if (cusOrder.toLowerCase() === A[i]) {
        isAvailable = true;
        document.write(cusOrder + " is available at index " + i + " at our bakery");
        break;
    }
}
if (isAvailable === false) {
    document.write("We are sorry. "+cusOrder + " is not available at index at our bakery");
}
