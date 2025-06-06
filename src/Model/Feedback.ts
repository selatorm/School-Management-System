import { Subject } from "./Subject";
import { Teacher } from "./Teacher";
import { Student } from "./Student";

export class Feedback {
  private static feedbackList: Feedback[] = []; // Store all feedback instances

  constructor(
    public rating: number,
    public comments: string,
    public subject: Subject,
    public teacher: Teacher,
    public student: Student,
    public dateGiven: Date = new Date(),
    public anonymous: boolean = false
  ) {
    Feedback.feedbackList.push(this); // Store feedback upon creation
  }

  public static getAllFeedback(): Feedback[] {
    return this.feedbackList;
  }

  getSummary(): string {
    const reviewer = this.anonymous ? "Anonymous" : this.student.name;
    return `${reviewer} rated ${this.teacher.name} (${this.subject.name}) ${this.rating}/5: "${this.comments}"`;
  }

  public static giveFeedback(student: Student, teacher: Teacher, subject: Subject, rating: number, comments: string, anonymous = false): void {
    if (rating < 1 || rating > 5) {
      console.log("Invalid rating. Must be between 1 and 5.");
      return;
    }

    if (comments.trim().length < 3) {
      console.log("Feedback comments should be at least 3 characters long.");
      return;
    }

    if (teacher.name === student.name) {
      console.log("A student cannot rate themselves.");
      return;
    }

    new Feedback(rating, comments, subject, teacher, student, new Date(), anonymous);
    console.log(`Feedback recorded for ${teacher.name}: "${comments}"`);
  }
}