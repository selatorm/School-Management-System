import { Subject } from "./Subject";

export class Assignment {
  constructor(
    public title: string,
    public dueDate: Date,
    public subject: Subject
  ) {}

  // Optional: Add useful helper methods
  isOverdue(currentDate: Date = new Date()): boolean {
    return currentDate > this.dueDate;
  }

  getSummary(): string {
    return `${this.title} (due: ${this.dueDate.toLocaleDateString()}) for ${this.subject.name}`;
  }
}
