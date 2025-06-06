import { Student } from "./Model/Student";
import { Subject } from "./Model/Subject";
import { Teacher } from "./Model/Teacher";
import { Admin } from "./Model/Admin";
import { Assignment } from "./Model/Assignment";
import { TimeTable } from "./Model/TimeTable";
import { SubjectType } from "./Enum/SubjectType";
import { Classroom } from "./Enum/Classroom";
import { Exam } from "./Model/Exam";
import { Feedback } from "./Model/Feedback";

// Create teacher, student, admin 
const teacher1 = new Teacher(1, "Yen Yon", "yenyon@example.com");
const student1 = new Student(1, "Neath", "neath@example.com");
const admin1 = new Admin(1, "Rady", "rady@example.com");

// Create subject
const subject = new Subject(SubjectType.OOP, Classroom.B22);

// Admin assigns teacher and subject (no logs here)
admin1.assignTeacher(subject, teacher1);
admin1.assignSubject(student1, subject);

// Create assignment and upload
const assignment1 = new Assignment("Homework 1", new Date("2025-06-10"), student1.name);
teacher1.uploadAssignment(subject, assignment1);
student1.submitAssignment(assignment1);

// Create exam and add to student's exam schedule
const exam1 = new Exam("Room A", new Date("2025-06-16"), subject, [student1]);
student1.exams.push(exam1);

// Upload material if not already present
const material = "OOP_practice.pdf";
if (!subject.materials.has(material)) {
  teacher1.uploadMaterial(subject, material);
}

// Add timetable entry for student
student1.timetable.push(new TimeTable("Monday", "8:00 AM", "10:00 AM", subject));

// Log assignment submission details
console.log("\n============== Assignment Submission ==============");
student1.assignments.forEach((assignment) => {
  console.log(`Title: ${assignment.title}`);
  console.log(`Due Date: ${assignment.dueDate.toDateString()}`);
  console.log("----------------------------------------------------");
});

// Log student grades or no grades message
console.log("\n============== Student Grades ==============");
if (student1.viewGrades().length > 0) {
  student1.viewGrades().forEach((grade) => {
    console.log(`Subject: ${grade.subject.name} | Score: ${grade.score}`);
    console.log("----------------------------------------------------");
  });
} else {
  console.log("No grades recorded yet.");
}

// Log exam schedule or no exams message
console.log("\n============== Exam Schedule ==============");
if (student1.viewExamSchedule().length > 0) {
  student1.viewExamSchedule().forEach((exam) => {
    console.log(`Subject: ${exam.getSubject().name}`);
    console.log(`Room: ${exam.getExamRoom()} | Date: ${exam.getExamDate().toString()}`);
    console.log("----------------------------------------------------");
  });
} else {
  console.log("No exams scheduled.");
}

// Record and show exam results
console.log("\n============== Exam Results ==============");
exam1.recordResult(student1, 85);
exam1.getResults().forEach((score, student) => {
  console.log(`${student.name}'s Score: ${score}`);
  console.log("----------------------------------------------------");
});

// Display student timetable
console.log("\n============== Student Timetable ==============");
student1.timetable.forEach((entry) => { 
  console.log(`Subject: ${entry.subject.name} | Teacher: ${entry.subject.teacher?.name ?? "TBD"}`);
  console.log(`Day: ${entry.day} | Time: ${entry.startTime} - ${entry.endTime} | Room: ${entry.subject.classroom}`);
  console.log(`Student: ${student1.name}`);
  console.log("----------------------------------------------------");
});

// Display teacher uploads
console.log("\n============== Teacher Uploads ==============");
console.log(`Teacher ${teacher1.name} uploaded material: ${material} for subject ${subject.name}`);
console.log(`Date: ${new Date().toLocaleDateString("km-KH")} Time: ${new Date().toLocaleTimeString()}`);
console.log("----------------------------------------------------");

// Display teacher assignments
console.log("\n============== Teacher Assignment ==============");
console.log(`Assignment: "${assignment1.title}" | Deadline: ${assignment1.dueDate.toDateString()}`);
console.log(`Assigned to: ${student1.name} for subject ${subject.name}`);
console.log("----------------------------------------------------");

// Display admin assignments
console.log("\n============== Admin Assign ==============");
console.log(`Admin ${admin1.name} assigned ${teacher1.name} to teach ${subject.name}`);
console.log(`Admin ${admin1.name} enrolled ${student1.name} in ${subject.name}`);
console.log("----------------------------------------------------");

// Implement feedback to teacher
console.log("\n============== Student Feedback ==============");
Feedback.giveFeedback(student1, teacher1, subject, 5, "Great teaching!", false);
