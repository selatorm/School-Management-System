import { Subject } from "./Subject";

export class Grade {
  constructor(public subject: Subject, public score: number) {
    if (score < 0 || score > 100) {
      throw new Error("Invalid score. Must be between 0 and 100.");
    }
  }

  getGradeLetter(): string {
    if (this.score >= 90) return "A";
    if (this.score >= 80) return "B";
    if (this.score >= 70) return "C";
    if (this.score >= 60) return "D";
    return "F";
  }

  displayGrade(): string {
    return `Subject: ${this.subject.name}, Score: ${this.score}, Grade: ${this.getGradeLetter()}`;
  }
}