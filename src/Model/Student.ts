import { Assignment } from "./Assignment";
import { Grade } from "./Grade";
import { Person } from "./Person";
import { Subject } from "./Subject";
import { TimeTable } from "./TimeTable";

export class Student extends Person {
  subjects: Subject[] = [];
  assignments: Assignment[] = [];
  grades: Grade[] = [];
  timetable: TimeTable[] = [];

  constructor(id: number, name: string, email: string) {
    super(id, name, email, "Student");
  }

  viewTimetable() {
    return this.timetable;
  }

  submitAssignment(assignment: Assignment) {
    this.assignments.push(assignment);
  }

  viewGrades() {
    return this.grades;
  }
}