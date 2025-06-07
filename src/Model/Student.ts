import { Person } from "./Person";
import { Subject } from "./Subject";
import { Assignment } from "./Assignment";
import { Feedback } from "./Feedback";
import { TimeTable } from "./TimeTable";
import { Grade } from "./Grade";

// Add interfaces for parent info and report card
export interface ParentInfo {
  name: string;
  contact: string;
}

export interface ReportCard {
  [subject: string]: string;
}

export class Student extends Person {
  public subjects: Subject[] = [];
  public timetable: TimeTable[] = [];
  public assignments: Assignment[] = [];
  public grades: Grade[] = [];

  // Extended properties for extra features
  public attendance?: string[];
  public clubs?: string[];
  public parent?: ParentInfo;
  public reportCard?: ReportCard;
  public feedbacks?: Feedback[];
  public awards?: string[];

  constructor(id: number, name: string, age: number, email: string, phoneNumber: number, role: string) {
    super(id, name, age, email, phoneNumber, role);
  }

  getRole(): string {
    return "Student";
  }

  getName(): string {
    return this.name;
  }

  addSubject(subject: Subject): void {
    if (!this.subjects.includes(subject)) {
      this.subjects.push(subject);
    }
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
    const feedback = new Feedback(rating, comment, subject, subject.teacher, this);
    if (!this.feedbacks) this.feedbacks = [];
    this.feedbacks.push(feedback);
    return feedback;
  }
}