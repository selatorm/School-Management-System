import { Person } from "./Person";
import { Subject } from "./Subject";
import { Assignment } from "./Assignment";
import { Feedback } from "./Feedback";
import { Timetable } from "./TimeTable";
import { Grade } from "./Grades";

export class Student extends Person {
  addSubject(subject: Subject) {
      throw new Error("Method not implemented.");
  }
  public subjects: Subject[] = [];
  public timetable: Timetable[] = [];
  public assignments: Assignment[] = [];
  public grades: Grade[] = [];

  getRole(): string {
    return "Student";
  }

  getTimetable(): Timetable[] {
    return this.timetable;
  }

  submitAssignment(assignment: Assignment): void {
    this.assignments.push(assignment);
  }

  getGrades(): Grade[] {
    return this.grades;
  }

  giveFeedback(subject: Subject, rating: number, comment: string): Feedback {
    return new Feedback(rating, comment, subject, subject.teacher);
  }
}