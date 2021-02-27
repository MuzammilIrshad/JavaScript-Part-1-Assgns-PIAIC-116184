// JavaScript source code
var comDate = new Date();
var dateOfMonth = comDate.getDate();
//console.log(dateOfMonth);
if (dateOfMonth <= 15) {
    document.write("First Fifteen days of the month");
} else {
    document.write("Last days of the Month");
}