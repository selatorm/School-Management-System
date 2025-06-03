import { Admin } from "./Model/Admin";
import { Teacher } from "./Model/Teacher";
import { Student } from "./Model/Student";
import { Subject } from "./Model/Subject";
import { SubjectType } from "./Enum/SubjectType";
import { Classroom } from "./Enum/Classroom";
import { Assignment } from "./Model/Assignment";
import { Material } from "./Model/Material";
import { TimeTable } from "./Model/TimeTable";
import { Director } from "./Model/Director";
import { School } from "./Model/School";


// Create a director
let director = new Director(1, "Mr. John", 45, "john@example.com", 123456789, "");

// Create the School
let pnc = new School("PNC", "Khan sen sok", director, [Classroom.B12,
    Classroom.B13,
    Classroom.B22,
    Classroom.B23,
    Classroom.B32 ,
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
