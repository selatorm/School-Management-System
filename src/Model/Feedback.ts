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
  ) { }

  public getSummary(): string {
    const reviewer = this.anonymous ? "Anonymous" : this.student.name;
    return `${reviewer} rated ${this.teacher.name} (${this.subject.name}) ${this.rating}/5: "${this.comments}"`;
  }

  public updateFeedback(newRating: number, newComments: string): void {
    if (newRating < 1 || newRating > 5) {
      console.log("Invalid rating. Please provide a value between 1 and 5.");
      return;
    }

    if (newComments.trim().length === 0) {
      console.log("Feedback comments cannot be empty.");
      return;
    }

    this.rating = newRating;
    this.comments = newComments;
    this.dateGiven = new Date();
  }

  public isValid(): boolean {
    return this.rating >= 1 && this.rating <= 5 && this.comments.trim().length > 0;
  }
}