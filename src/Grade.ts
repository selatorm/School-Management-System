import { Subject } from './Subject';

export class Grade {
    constructor(
        public subject: Subject,
        public score: number
    ) {}

    // Get letter grade
    getLetterGrade(): string {
        if (this.score >= 90) return 'A';
        if (this.score >= 80) return 'B';
        if (this.score >= 70) return 'C';
        if (this.score >= 60) return 'D';
        return 'F';
    }

    // Check if the student passed the subject
    isPassed(): boolean {
        return this.score >= 60;
    }

    // Convert grade to readable string
    toString(): string {
        return `${this.subject.name}: ${this.score} (${this.getLetterGrade()})`;
    }
}
