// JavaScript source code
var password = prompt("Enter Password:");
var chars = "abcdefghijklmnopqrstuvwxyz";

function psd(password) {

    if ((chars.indexOf(password[0].toLowerCase()) !== -1) && (password.match(/[a-z]/g) || password.match(/[A-Z]/g)) && password.match(/[0-9]/g) && password.length >= 8) {
        console.log("Matched Successfully");
    }
    else {
        var pswd = prompt("Enter Valid Password a-z A-Z 0-9");
        psd(pswd);
    }
    
}
psd(password);




