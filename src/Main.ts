import { Student } from "./Model/Student";
import { Subject } from "./Model/Subject";
import { Teacher } from "./Model/Teacher";
import { Admin } from "./Model/Admin";
import { Assignment } from "./Model/Assignment";
import { TimeTable } from "./Model/TimeTable";
import { SubjectType } from "./Enum/SubjectType";
import { Classroom } from "./Enum/Classroom";
import { Exam } from "./Model/Exam";

// Create teacher, student, admin 
const teacher1 = new Teacher(1, "Yen Yon", "yenyon@example.com");
const student1 = new Student(1, "Neath", "neath@example.com");
const admin1 = new Admin(1, "Rady", "rady@example.com");

// Create subject
const subject = new Subject(SubjectType.OOP, Classroom.B12);

// Admin assigns teacher and subject
admin1.assignTeacher(subject, teacher1);
admin1.assignSubject(student1, subject);

// Teacher uploads material and assignment
const material = "OOP_practice.pdf";
const assignment = new Assignment("Homework 1", new Date("2025-06-10"),"Neath");
teacher1.uploadMaterial(subject, material);
teacher1.uploadAssignment(subject, assignment);

// Student submits assignment
student1.submitAssignment(assignment);

// Fix: Declare exam1 before use
const exam1 = new Exam("Room A", new Date("2025-06-15"), subject, [student1]);

// Logging student activity
console.log("\n==============  Assignment Submission ==============");
student1.assignments.forEach((assignment) => {
    console.log(` Title: ${assignment.title}`);
    console.log(` Due Date: ${assignment.dueDate.toDateString()}`);
});

console.log("\n============== Student Grades ==============");
if (student1.viewGrades().length > 0) {
    student1.viewGrades().forEach((grade) => {
        console.log(`Subject: ${grade.subject.name} | Score: ${grade.score}`);
    });
} else {
    console.log("No grades recorded yet.");
}

console.log("\n============== Exam Schedule ==============");
if (student1.viewExamSchedule().length > 0) {
    student1.viewExamSchedule().forEach((exam) => {
        console.log(`Subject: ${exam.getSubject().name}`);
        console.log(`Room: ${exam.getExamRoom()} | Date: ${exam.getExamDate().toString()}`);
    });
} else {
    console.log("No exams scheduled.");
}

console.log("\n==============  Exam Results ==============");
exam1.recordResult(student1, 85);
exam1.getResults().forEach((score, student) => {
    console.log(` ${student.name}'s Score: ${score}`);
});


console.log("\n============== Admin Assign ==============");
console.log(`Admin ${admin1.name} assigned teacher ${teacher1.name} to subject: ${subject.name}`);
console.log(`Admin ${admin1.name} assigned subject ${subject.name} to student: ${student1.name}`);



