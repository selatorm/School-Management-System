import { Assignment } from "./Assignment";
import { Grade } from "./Grade";
import { Exam } from "./Exam";
import { TimeTable } from "./TimeTable";
import { Subject } from "./Subject";
import { Person } from "./Person";

export class Student extends Person {
  public subjects: Subject[] = [];
  public assignments: Assignment[] = [];
  public grades: Grade[] = [];
  public timetable: TimeTable[] = [];
  public exams: Exam[] = [];

  constructor(id: number, name: string, email: string) {
    super(id, name, email, "Student");
  }

  public submitAssignment(assignment: Assignment): void {
    if (!this.assignments.includes(assignment)) {
      this.assignments.push(assignment);
    }
  }

  public viewGrades(): Grade[] {
    return this.grades;
  }

  public viewExamSchedule(): Exam[] {
    return this.exams;
  }

  // Add this method to fix the error
  public viewTimetable(): TimeTable[] {
    return this.timetable;
  }
}
