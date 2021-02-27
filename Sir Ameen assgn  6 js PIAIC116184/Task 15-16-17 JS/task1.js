var courses = [];
var course1 = prompt("Type First Course name");
var course2 = prompt("Type Second Course name");
var course3 = prompt("Type Third Course name");
var course4 = prompt("Type Fourth Course name");
var course5 = prompt("Type Fifth Course name");
courses.push(course1);
courses.push(course2);
courses.push(course3);
courses.push(course4);
courses.push(course5);
alert(courses);

var course1Edit = prompt(course1, course1);
var course2Edit = prompt(course2, course2);
var course3Edit = prompt(course3, course3);
var course4Edit = prompt(course4, course4);
var course5Edit = prompt(course5, course5);
if (course1 != course1Edit) {
    courses.splice(0, 1, course1Edit);
}
if (course2 != course2Edit) {
    courses.splice(1, 1, course2Edit);
}
if (course3 != course3Edit) {
    courses.splice(2, 1, course3Edit);
}
if (course4 != course4Edit) {
    courses.splice(3, 1, course4Edit);
}
if (course5 != course5Edit) {
    courses.splice(5, 1, course5Edit);
}
alert(courses);