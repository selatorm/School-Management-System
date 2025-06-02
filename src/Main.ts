import { School } from "./School";
import { Admin } from "./Admin";
import { Classroom } from "./Classroom";
import { Director } from "./Director";

// Create a director
let director = new Director(1, "Mr. John", 45, "john@example.com", 123456789, "");

// Create the School
let pnc = new School("PNC", "Khan sen sok", director, [Classroom.B22, Classroom.B23, Classroom.B12,
Classroom.B13,
Classroom.B32,
Classroom.Breakroom]);

// Display School Info
console.log("School Info:");
console.log("Name:", pnc.getName());
console.log("Address:", pnc.getAddress());
console.log("Director:", director.getName());

console.log("Classrooms:");
pnc.getClassrooms().forEach(room => {
    console.log("-", room);
});

