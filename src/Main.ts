import { Student } from "./Model/Student";
import { Subject } from "./Model/Subject";
import { Teacher } from "./Model/Teacher";
import { Admin } from "./Model/Admin";
import { Assignment } from "./Model/Assignment";
import { TimeTable } from "./Model/TimeTable";
import { SubjectType } from "./Enum/SubjectType";
import { Classroom } from "./Enum/Classroom";

// Create teacher, student, admin 
const teacher1 = new Teacher(1, "Yen Yon", "yenyon@example.com");
const student1 = new Student(1, "Neath", "neath@example.com");
const admin1 = new Admin(1, "Rady", "rady@example.com");

// Create subject
const subject = new Subject(SubjectType.ALGORITHM, Classroom.B12);

// Admin assigns teacher and subject
admin1.assignTeacher(subject, teacher1);
admin1.assignSubject(student1, subject);

// Teacher uploads material and assignment
const material = "Notes.pdf";
const assignment = new Assignment("Homework 1", new Date("2025-06-10"));
teacher1.uploadMaterial(subject, material);
teacher1.uploadAssignment(subject, assignment);

// Add timetable
student1.timetable.push(new TimeTable("Monday", "8:00 AM", "10:00 AM", subject));

// Display output

console.log("============== Student Timetable ==============");
student1.viewTimetable().forEach((entry, i) => {
  console.log(`Subject: ${entry.subject.name} by teacher ${entry.subject.teacher?.name}`);
  console.log(`Day: ${entry.day} | Time: ${entry.startTime} - ${entry.endTime} | Room: ${entry.subject.classroom}`);
  console.log(`Student: ${student1.name}`);
});

console.log("\n============== Teacher Uploads ==============");
console.log(`Teacher ${teacher1.name} uploaded material:`);
console.log(`File: ${material}`);
console.log(`Subject: ${subject.name}`);
console.log(`Date: ${new Date().toLocaleDateString()} Time: ${new Date().toLocaleTimeString()}`);

console.log("\n============== Teacher Assignment ==============");
console.log(`Teacher ${teacher1.name} uploaded assignment:`);
console.log(`Title: ${assignment.title}`);
console.log(`Deadline: ${assignment.dueDate.toDateString()}`);
console.log(`Upload Date: ${new Date().toLocaleDateString()} Time: ${new Date().toLocaleTimeString()}`);
console.log(`Assigned to: ${student1.name} for subject ${subject.name}`);

console.log("\n============== Admin Assignments ==============");
console.log(`Admin ${admin1.name} assigned teacher ${teacher1.name} to subject: ${subject.name}`);
console.log(`Admin ${admin1.name} assigned subject ${subject.name} to student: ${student1.name}`);
