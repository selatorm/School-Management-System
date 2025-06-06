import { Student } from "./Model/Student";
import { Subject } from "./Model/Subject";
import { Teacher } from "./Model/Teacher";
import { Admin } from "./Model/Admin";
import { Assignment } from "./Model/Assignment";
import { TimeTable } from "./Model/TimeTable";

// Create teacher and student
const teacher1 = new Teacher(1, "Ms. Anna", "anna@example.com");
const student1 = new Student(1, "John Doe", "john@example.com");
const admin1 = new Admin(1, "Admin", "admin@example.com");

// Create subject
const math = new Subject("Math", "Room 101");

// Admin assigns teacher to subject and subject to student
admin1.assignTeacher(math, teacher1);
admin1.assignSubject(student1, math);

// Teacher uploads material and assignment
teacher1.uploadMaterial(math, "Math Notes.pdf");
teacher1.uploadAssignment(math, new Assignment("Homework 1", new Date("2025-06-10")));

// Student views timetable (let's add one timetable entry)
student1.timetable.push(new TimeTable("Monday", "8:00 AM", "10:00 AM"));
console.log(student1.viewTimetable());

// Student submits assignment
student1.submitAssignment(new Assignment("Homework 1", new Date("2025-06-10")));

// Student views grades (empty for now)
console.log(student1.viewGrades());
