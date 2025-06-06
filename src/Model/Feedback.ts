import { Subject } from "./Subject";
import { Teacher } from "./Teacher";
import { Student } from "./Student";

export class Feedback {
  constructor(
    public rating: number,
    public comments: string,
    public subject: Subject,
    public teacher: Teacher,
    public student: Student,
    public dateGiven: Date = new Date(),
    public anonymous: boolean = false
  ) {}

//   getSummary(): string {
//     const reviewer = this.anonymous ? "Anonymous" : this.student.getName();
// return `${reviewer} rated ${this.teacher.getName()} (${this.subject.name}) ${this.rating}/5: \"${this.comments}\"`;

//   }

  updateFeedback(newRating: number, newComments: string): void {
    this.rating = newRating;
    this.comments = newComments;
    this.dateGiven = new Date();
  }

  isValid(): boolean {
    return this.rating >= 1 && this.rating <= 5 && this.comments.trim().length > 0;
  }
}