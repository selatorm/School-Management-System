// Student.ts
import { Person } from "./Person";
import { Subject } from "./Subject";
import { Assignment } from "./Assignment";
import { Feedback } from "./Feedback";
import { TimeTable } from "./TimeTable";
import { Grade } from "./Grade";

export class Student extends Person {
  public subjects: Subject[] = [];
  public timetable: TimeTable[] = [];
  public assignments: Assignment[] = [];
  public grades: Grade[] = [];

  getRole(): string {
    return "Student";
  }

  getTimetable(): TimeTable[] {
    return this.timetable;
  }

  submitAssignment(assignment: Assignment): void {
    this.assignments.push(assignment);
  }

  getGrades(): Grade[] {
    return this.grades;
  }

  giveFeedback(subject: Subject, rating: number, comment: string): Feedback {
    if (rating < 1 || rating > 5) {
      throw new Error("Rating must be between 1 and 5.");
    }
    return new Feedback(rating, comment, subject, subject.teacher, this);
  }
}
