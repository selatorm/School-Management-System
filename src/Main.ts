import { Student } from "./Model/Student";
import { Subject } from "./Model/Subject";
import { Teacher } from "./Model/Teacher";
import { Admin } from "./Model/Admin";
import { Assignment } from "./Model/Assignment";
import { TimeTable } from "./Model/TimeTable";
import { SubjectType } from "./Enum/SubjectType";
import { Classroom } from "./Enum/Classroom";
import { Exam } from "./Model/Exam";

// Fix: Create teacher, student, admin with Khmer names
const teacher1 = new Teacher(1, "Yen Yon", "yenyon@example.com");
const student1 = new Student(1, "Neath", "neath@example.com");
const admin1 = new Admin(1, "Rady", "rady@example.com");

// Fix: Provide correct parameters for Subject constructor
const subject = new Subject(SubjectType.Algorithm, Classroom.B12, "CS101");

// Admin assigns teacher and subject
admin1.assignTeacher(subject, teacher1);
admin1.assignSubject(student1, subject);

// Fix: Correct assignment constructor parameters
const assignment1 = new Assignment("Homework 1", new Date("2025-06-10"), student1.name);
teacher1.uploadAssignment(subject, assignment1);

// Student submits assignment
student1.submitAssignment(assignment1);

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


