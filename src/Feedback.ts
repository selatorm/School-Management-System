import { Subject } from "./Subject";
import { Teacher } from "./Teacher";
import { Student } from "./Student";

export class Feedback {
    constructor(
        public rating: number,
        public comments: string,
        public subject: Subject,
        public teacher: Teacher,
        public student: Student, // Who gave the feedback
        public dateGiven: Date = new Date(), // Auto-set to now
        public anonymous: boolean = false // Optionally anonymous
    ) {}

    // Method to summarize feedback
    getSummary(): string {
        const reviewer = this.anonymous ? "Anonymous" : this.student.name;
        return `${reviewer} rated ${this.teacher.name} (${this.subject.name}) ${this.rating}/5: "${this.comments}"`;
    }

    // Method to update feedback
    updateFeedback(newRating: number, newComments: string): void {
        this.rating = newRating;
        this.comments = newComments;
        this.dateGiven = new Date(); // Update date to now
    }

    // Method to validate feedback content
    isValid(): boolean {
        return this.rating >= 1 && this.rating <= 5 && this.comments.trim().length > 0;
    }
}
