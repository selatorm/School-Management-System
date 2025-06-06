import { Admin } from "./Model/Admin";
import { Teacher } from "./Model/Teacher";
import { Student } from "./Model/Student";
import { Subject } from "./Model/Subject";
import { SubjectType } from "./Enum/SubjectType";
import { Classroom } from "./Enum/Classroom";
import { Assignment } from "./Model/Assignment";
import { Material } from "./Model/Material";
import { TimeTable } from "./Model/TimeTable";

// Create teacher, student, and admin
let teacher = new Teacher(1, "Mr. John", 40, "john@example.com", 123456789, "Teacher");
let student = new Student(2, "Alice", 20, "alice@example.com", 987654321, "Student");
let admin = new Admin(3, "Principal", 45, "admin@school.com", 111222333,'Admin');

// Create a second teacher and student
let teacher2 = new Teacher(4, "Ms. Linda", 35, "linda@example.com", 1122334455, "Teacher");
let student2 = new Student(5, "Bob", 21, "bob@example.com", 9988776655, "Student");

// Create subjects
let subject1 = new Subject("Math", SubjectType.ALGORITHM, teacher, Classroom.B12);
let subject2 = new Subject("Physics", SubjectType.SCIENCE, teacher2, Classroom.C3);

// Assign subjects to teachers and students
admin.assignTeacher(subject1, teacher);
admin.assignTeacher(subject2, teacher2);
admin.assignSubject(student, subject1);
admin.assignSubject(student2, subject2);

// Create and upload materials and assignments
let material1 = new Material(1, subject1, "math_intro.pdf");
let material2 = new Material(2, subject2, "physics_basics.pdf");

let assignment1 = new Assignment("Math Quiz 1", new Date("2024-06-01"), subject1);
let assignment2 = new Assignment("Physics Lab", new Date("2024-06-02"), subject2);

teacher.uploadMaterial(subject1, material1);
teacher.uploadAssignment(subject1, assignment1);

teacher2.uploadMaterial(subject2, material2);
teacher2.uploadAssignment(subject2, assignment2);

// Students submit assignments
student.submitAssignment(assignment1);
student2.submitAssignment(assignment2);

// Add timetable entries
student.timetable.push(new TimeTable("Monday", new Date("2024-06-01T09:00:00"), new Date("2024-06-01T10:00:00")));
student2.timetable.push(new TimeTable("Tuesday", new Date("2024-06-02T10:00:00"), new Date("2024-06-02T11:00:00")));

// Students give feedback
let feedback1 = student.giveFeedback(subject1, 5, "Great class!");
let feedback2 = student2.giveFeedback(subject2, 4, "Interesting but challenging");

// 🆕 Add more teachers and students
let teacher3 = new Teacher(6, "Dr. Smith", 50, "smith@example.com", 5566778899, "Teacher");
let student3 = new Student(7, "Charlie", 19, "charlie@example.com", 444555666, "Student");
let student4 = new Student(8, "Diana", 22, "diana@example.com", 777888999, "Student");

// 🆕 Add new subjects
let subject3 = new Subject("Chemistry", SubjectType.SCIENCE, teacher3, Classroom.A1);
let subject4 = new Subject("History", SubjectType.THEORY, teacher2, Classroom.B10);

// 🆕 Admin assigns new teachers and students
admin.assignTeacher(subject3, teacher3);
admin.assignTeacher(subject4, teacher2);
admin.assignSubject(student3, subject3);
admin.assignSubject(student4, subject4);

// 🆕 Add more materials and assignments
let material3 = new Material(3, subject3, "chem_lab.pdf");
let material4 = new Material(4, subject4, "history_notes.pdf");

let assignment3 = new Assignment("Chemistry Report", new Date("2024-06-03"), subject3);
let assignment4 = new Assignment("History Essay", new Date("2024-06-04"), subject4);

teacher3.uploadMaterial(subject3, material3);
teacher3.uploadAssignment(subject3, assignment3);
teacher2.uploadMaterial(subject4, material4);
teacher2.uploadAssignment(subject4, assignment4);

// 🆕 Students submit assignments
student3.submitAssignment(assignment3);
student4.submitAssignment(assignment4);

// 🆕 Timetable entries
student3.timetable.push(new TimeTable("Wednesday", new Date("2024-06-03T13:00:00"), new Date("2024-06-03T14:00:00")));
student4.timetable.push(new TimeTable("Thursday", new Date("2024-06-04T08:00:00"), new Date("2024-06-04T09:30:00")));

// 🆕 Feedback from new students
let feedback3 = student3.giveFeedback(subject3, 3, "Need more lab time");
let feedback4 = student4.giveFeedback(subject4, 5, "Very educational!");

// ========== OUTPUT ==========

console.log("=== Teacher Info ===");
console.log(`Name: ${teacher.getName()}, Email: ${teacher.getEmail}`);
console.log(`Name: ${teacher2.getName()}, Email: ${teacher2.getEmail}`);
console.log(`Name: ${teacher3.getName()}, Email: ${teacher3.getEmail}`);

console.log("\n=== Student Info ===");
console.log(`Name: ${student.getName()}, Email: ${student.getEmail}`);
console.log(`Name: ${student2.getName()}, Email: ${student2.getEmail}`);
console.log(`Name: ${student3.getName()}, Email: ${student3.getEmail}`);
console.log(`Name: ${student4.getName()}, Email: ${student4.getEmail}`);

console.log("\n=== Subject Info ===");
[subject1, subject2, subject3, subject4].forEach(sub => {
  console.log(`Subject: ${sub.name}, Teacher: ${sub.teacher.getName()}, Room: ${sub.classroom}`);
});

console.log("\n=== Materials Uploaded ===");
[subject1, subject2, subject3, subject4].forEach(sub => {
  sub.materials.forEach(mat => {
    console.log(`- ${mat['downloadMaterial']}`);
  });
});

console.log("\n=== Assignments Uploaded ===");
[subject1, subject2, subject3, subject4].forEach(sub => {
  sub.assignments.forEach(assign => {
    console.log(`- ${assign.getSummary()}`);
  });
});

console.log("\n=== Student Timetable ===");
[student, student2, student3, student4].forEach(std => {
  std.getTimetable().forEach(tt => {
    console.log(`${std.getName()} => ${tt.toString()}`);
  });
});

console.log("\n=== Assignments Submitted by Students ===");
[student, student2, student3, student4].forEach(std => {
  std.assignments.forEach(assign => {
    console.log(`${std.getName()} submitted: ${assign.getSummary()}`);
  });
});

console.log("\n=== Feedback Given ===");
console.log(`${student.getName()} Feedback: ${feedback1.getSummary()}`);
console.log(`${student2.getName()} Feedback: ${feedback2.getSummary()}`);
console.log(`${student3.getName()} Feedback: ${feedback3.getSummary()}`);
console.log(`${student4.getName()} Feedback: ${feedback4.getSummary()}`);

// 🆕 Simulate downloads
console.log("\n=== Students Download Materials ===");
console.log(`${student.getName()} downloaded: ${material1.getDownloadMaterial()}`);
console.log(`${student2.getName()} downloaded: ${material2.getDownloadMaterial()}`);
console.log(`${student3.getName()} downloaded: ${material3.getDownloadMaterial()}`);
console.log(`${student4.getName()} downloaded: ${material4.getDownloadMaterial()}`);

// 🆕 Reassign subject
subject1.teacher = teacher3;
console.log("\n=== Admin Reassigns Subject ===");
console.log(`Admin reassigned ${subject1.name} from Mr. John to ${teacher3.getName()}`);

// 🆕 Count students per subject
console.log("\n=== Count of Students Per Subject ===");
[subject1, subject2, subject3, subject4].forEach(sub => {
  let count = [student, student2, student3, student4].filter(s => s.subjects.includes(sub)).length;
  console.log(`${sub.name}: ${count} student(s) enrolled`);
});
