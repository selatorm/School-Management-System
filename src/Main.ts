import { Admin } from "./Admin";
import { Teacher } from "./Teacher";
import { Student } from "./Student";
import { Subject } from "./Subject";
import { SubjectType } from "./SubjectType";
import { Classroom } from "./Classroom";
import { Assignment } from "./Assignment";
import { Material } from "./Material";
import { TimeTable } from "./TimeTable";

// Create teacher, student, and admin
let teacher = new Teacher(1, "Mr. John", 40, "john@example.com", 123456789, "Teacher");
let student = new Student(2, "Alice", 20, "alice@example.com", 987654321, "Student");
let admin = new Admin(3, "Principal", 45, "admin@school.com", 111222333,'Admin');

// Create a subject
let subject = new Subject("Math", SubjectType.ALGORITHM, teacher, Classroom.B12);

// Assign subject to teacher and student using admin
admin.assignTeacher(subject, teacher);
admin.assignSubject(student, subject);

// Create and upload material and assignment
let material = new Material(1, subject, "math_intro.pdf");
let assignment = new Assignment("Quiz 1", new Date("2024-06-01"), subject);
teacher.uploadMaterial(subject, material);
teacher.uploadAssignment(subject, assignment);

// Student submits the assignment
student.submitAssignment(assignment);

// Manually add a timetable entry for student (for demonstration)
student.timetable.push(new TimeTable("Monday", new Date("2024-06-01T09:00:00"), new Date("2024-06-01T10:00:00")));

// Student gives feedback for the subject
let feedback = student.giveFeedback(subject, 5, "Great class!");

// Output test results

console.log("=== Teacher Info ===");
console.log(`Name: ${teacher.getName()}, Email: ${teacher.getEmail}`);

console.log("\n=== Student Info ===");
console.log(`Name: ${student.getName()}, Email: ${student.getEmail}`);

console.log("\n=== Subject Info ===");
console.log(`Subject: ${subject.name}`);
console.log(`Teacher: ${subject.teacher.getName()}`);
console.log(`Classroom: ${subject.classroom}`);

console.log("\n=== Materials Uploaded ===");
subject.materials.forEach(mat => {
  console.log(`- Material: ${mat['downloadMaterial']}`);
});

console.log("\n=== Assignments Uploaded ===");
subject.assignments.forEach(assign => {
  console.log(`- ${assign.getSummary()}`);
});

console.log("\n=== Student Timetable ===");
student.getTimetable().forEach(tt => {
  console.log(tt.toString());
});

console.log("\n=== Assignments Submitted by Student ===");
student.assignments.forEach(assign => {
  console.log(assign.getSummary());
});

console.log("\n=== Feedback Given ===");
console.log(feedback.getSummary());