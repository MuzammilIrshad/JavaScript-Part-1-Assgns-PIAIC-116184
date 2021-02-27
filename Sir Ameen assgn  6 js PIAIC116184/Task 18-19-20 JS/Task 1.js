var courses = [];
var numbers = ["First", "Second", "Third", "Fourth", "Fifth"]
var course = '';
for (var i = 0; i < 5; i++) {
    course = prompt("Type" + numbers[i] + " Course name");
    courses.push(course);
}
alert(courses);

var courseEdit = ''; 
for (var k = 0; k < 5; k++) {
    courseEdit = prompt(courses[k], courses[k]);
    if (courseEdit != courses[k]) {
        courses.splice(k, 1, courseEdit);
    }
    else {
        continue;
    }
}
alert(courses);
