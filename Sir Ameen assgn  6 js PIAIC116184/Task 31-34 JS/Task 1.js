var name = prompt("Enter Your Name:");
var dateDOB = prompt("Enter Date of Birth:");
var monDOB = prompt("Enter Month of Birth:");
var yearDOB = prompt("Enter Year of Birth:");
var d = new Date(yearDOB, monDOB, dateDOB);
console.log("Your dob is " + d);
var d1 = new Date();
var currYear = d1.getFullYear();
var currMon = d1.getMonth() - d.getMonth();
if (d.getMonth() > d1.getMonth()) {
    currMon = d.getMonth() - d1.getMonth();
}
else {
    currMon = currMon;
}
var currDays = d1.getDate() - d.getDate();
if (d.getDate() > d1.getDate()) {
    currDays = d.getDate() - d1.getDate();
}
else {
    currDays = currDays;
}
var currHours = d1.getHours() - d.getHours();
if (d.getHours() > d1.getHours()) {
    currHours = d.getHours() - d1.getHours();
}
else {
    currHours = currHours;
}
var currMins = d1.getMinutes() - d.getMinutes();
if (d.getMinutes() > d1.getMinutes()) {
    currMins = d.getMinutes() - d1.getMinutes();
}
else {
    currMins = currMins;
}
console.log("You are " + (currYear - d.getFullYear()) + " years " + currMon + " months, " + currDays + " Days " + currHours + " Hours, " + currMins + " minutes old");
console.log("Your Age in Days " + ((d1.getTime() - d.getTime())/ (1000*60*60*24)))
console.log("Your Age in Hours " + ((d1.getTime() - d.getTime()) / (1000 * 60 * 60)))


//d.setFullYear(d1.getFullYear());
console.log(d);
console.log(d1);
//console.log(d - d1);
if (d1 > d) {
    d.setFullYear(d1.getFullYear() + 1);
    //console.log(d - d1);
}

var cDate = new Date();
console.log(cDate);
var nextBoDays = Math.floor((d - d1) / (1000 * 60 * 60 * 24));
console.log(nextBoDays);
var nextBoMonths = Math.floor(nextBoDays / 12);
console.log(nextBoMonths);
var nextBoday = nextBoDays % 12;
console.log(nextBoday);
var futDate = new Date(cDate.getFullYear(), nextBoMonths, nextBoday);
//console.log(nextBoDays);
//var d3 = new Date(cDate.getFullYear(), cDate.getMonth(), nextBoDays);
console.log(futDate);
var nextBoHours = Math.floor((d - d1) / (1000 * 60 * 60));
var nextBoMins = Math.floor((d - d1) / (1000 * 60));
if (nextBoDays !== 365) {
    console.log("How much time left in your next birthday ? " + nextBoDays + " days " + nextBoHours + " hours " + nextBoMins + " minutes");
}
else {
    console.log("Happy BirthDay " + name + "You are " + (currYear - d.setFullYear(yearDOB)) + " years old");
}













