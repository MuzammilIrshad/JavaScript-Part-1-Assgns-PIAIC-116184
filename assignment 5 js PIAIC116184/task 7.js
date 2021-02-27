// JavaScript source code
function isWeekend(date) {
    var d = new Date(date);
    var day = d.getDay();
   //console.log(day);
    if (day === 6) {
        console.log("Its weekend");
    } else {
        console.log("Sorry! wait for " + (7 - day) + " more days");
    }
}
isWeekend("Oct 12, 2019");
isWeekend("Oct 09, 2019");