import { School } from "./School";
import { Student } from './Student';
import { Teacher } from './Teacher';
import { Subject } from './Subject';
import { Classroom } from './Classroom';
import { SubjectType } from './SubjectType';

// Create 
let pnc = new School("PNC", "Khan Sen Sok", "Phnom Penh");
let sela = new Student(1, "Sela", 20, "sela@email.com", 123456789);
let teacherJohn = new Teacher(1, "John", 30, "john@email.com", 987654321);
let classA = Classroom.B12; // assign an enum value instead of constructing
let math = new Subject("Mathematics", "MTH101", SubjectType.Science, teacherJohn, classA);

// console.log

pnc.addStudent(sela);
pnc.addTeacher(teacherJohn);
console.log("School created:", pnc)
console.log("Student created:", sela);
console.log("Teacher created:", teacherJohn);
console.log("Classroom created:", classA);
console.log("Subject created:", math);
sela.subjects.push(math);
console.log("Final school data:", pnc);
