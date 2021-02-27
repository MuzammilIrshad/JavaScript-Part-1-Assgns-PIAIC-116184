// JavaScript source code
function addWeek(num) {
    var week = num * 7;
    //console.log(week);
    var d = new Date();
    var date = d.getDate() + week;
    d.setDate(date);
    var newDate = String(d.getDate());
    var newMonth = d.getMonth();
    var months = ["January", "Febrary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var year = String(d.getFullYear());
    console.log(newDate+ " "+ months[newMonth] +" "+ year);
}
addWeek(3);
addWeek(10);