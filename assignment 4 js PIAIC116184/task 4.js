// JavaScript source code

var email = prompt("Email :");
var regExp = /\S+@\S+\.\S+/;
if (regExp.test(email)) {
    console.log("Email Matched");
}
else {
    console.log("Does not Match");
}

              //OR



/*
var email = prompt("Email :");
var index = email.indexOf("@");
var arr1 = email.slice(0, index);
var arr2 = email.slice(index, email.length);
console.log(arr2);
var chars = "abcdefghijklmnopqrstuvwxyz";
var isCharAvailable = false;
var isCharFront = false;
var isCharAfter = false;

if (email.includes("@") === true) {
    for (var i = 0; i < email.length; i++) {
        if (chars.includes(email[i]) === true) {
            isCharAvailable = true;
            break;
        }
    }
    if (isCharAvailable === false) {
        alert("email is invalid: alphabets in email missing");
    } else if (isCharAvailable === true) {
        for (var j = 0; j < arr1.length; j++) {
            if (chars.includes(arr1[j]) === true) {
                isCharFront = true;
                break;
            }
        } if (isCharFront === false) {
            alert("email  invalid: alphabet before @ missing");
        } else if (isCharFront === true) {
            for (var k = 0; k < arr2.length; k++) {
                if (chars.includes(arr2[k])) {
                    isCharAfter = true;
                    break;
                }
            }
            if (isCharAfter === false) {
                alert("Wrong Email: alphabet after @ missing");
            } else if (isCharAfter === true) {
                if (arr2.includes(".") === true) {
                    alert("Valid Email");
                } else {
                    alert("Wrong Email: dot missing after @");
                }
            }
        }
    }
} else if (email.includes("@") === false) {
    alert("Invalid Email: @ missing");
  }
 
 */




