// JavaScript source code
function calculateAge(date) {
    var currentDate = new Date();
    var birthDate = new Date(date);
    var years = currentDate.getFullYear() - birthDate.getFullYear();
    var months = currentDate.getMonth() - birthDate.getMonth();
    var days = currentDate.getDate() - birthDate.getDate();
    console.log("You are " + years + " years, " + months + " months and " + days + " days old");
}
calculateAge("Sep 01, 1979");
calculateAge("Aug 09, 1986");