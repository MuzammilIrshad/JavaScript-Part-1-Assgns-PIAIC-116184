// JavaScript source code
var cityNames = ["Quetta", "Lahore", "Islamabad", "Karachi", "Multan"];
document.write(cityNames);
var selCities = "";
for (var i = 0; i < cityNames.length; i++) {
    var evenNums = i % 2;
    if (evenNums === 0) {
        selCities =  selCities + cityNames[i] + " ";
    }
}
selCities = selCities.slice(0, selCities.length - 1).split(" ");
document.write("<br/>");
document.write("<br/>");
document.write("<b>Selected Cities List: </b> <br/> <br/>");
document.write(selCities);


                                               //OR



var citiesSel = [cityNames[0], cityNames[2], cityNames[4]];
console.log(citiesSel);
