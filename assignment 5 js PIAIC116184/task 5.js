// JavaScript source code
function withDraw(amount) {
    var amountLength = String(amount).length;
    console.log(amountLength);
    if (amountLength === 3) {
        var a100 = parseInt(amount / 100);
        var a50s = parseInt((amount % 100) / 50)
        var a10 = amount % 50;
        a10 = parseInt(a10 / 10);
        if (a10 > 0 && a50s > 0) {
            console.log("You will have "+a100 + " Hundred notes,  " + a50s + " fifty notes and " + a10 + " ten notes");
        } else if (a50s === 0 && a10 === 0) {
            console.log("You will have "+ a100 + " Hundred notes");
        } else if (a50s === 0) {
            console.log("You will have "+a100 + " Hundred notes and " + a10 + " ten notes");
        } else if (a10 === 0) {
            console.log("You will have "+a100 + " Hundred notes and " + a50s + " Fifty notes");
        }
    } else {
        alert("ENter 3 digit Number");
    
    }
}
withDraw(Number(prompt("Enter amount to withdraw")));