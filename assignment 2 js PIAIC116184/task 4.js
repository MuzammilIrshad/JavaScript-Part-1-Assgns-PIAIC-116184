// JavaScript source code
var subj1 = Number(prompt(" Marks obtained in English: "));
var subj2 = Number(prompt("Marke obtained in Maths: "));
var subj3 = Number(prompt("Marks obtained in Science: "));
var totalMarks = 300;
var marksObt = subj1 + subj2 + subj3;
var totalPer = (marksObt * 100) / 300;
document.write("MARKS SHEET:");
document.write("<br/>");
document.write("<br/>");
document.write("Total Marks : " + totalMarks);
document.write("<br/>");
document.write("Marks Obtained : " + marksObt);
document.write("<br/>");
document.write("Total Percentage : " + totalPer);
document.write("<br/>");
if (totalPer < 100 && totalPer >= 80) {
    document.write("Grade : A-one");
    document.write("<br/>");
    document.write("Remarks : Excellent");
    document.write("<br/>");
} else if (totalPer < 80 && totalPer >= 70) {
    document.write("Grade : A");
    document.write("<br/>");
    document.write("Remarks : Good");
    document.write("<br/>");
}else if (totalPer < 70 && totalPer >= 60) {
    document.write("Grade : B");
    document.write("<br/>");
    document.write("Remarks : You need to improve");
    document.write("<br/>");
}else if (totalPer < 60) {
    document.write("Grade : Fail");
    document.write("<br/>");
    document.write("Remarks : Sorry");
    document.write("<br/>");
}