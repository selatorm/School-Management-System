import { Subject } from "./Subject";

export class TimeTable {
  constructor(
    public day: string,
    public startTime: string,
    public endTime: string,
    public subject: Subject
  ) { }

  getDuration(): string {
    const start = new Date(`2000-01-01T${this.startTime}`);
    const end = new Date(`2000-01-01T${this.endTime}`);
    const duration = (end.getTime() - start.getTime()) / (1000 * 60); // Convert to minutes
    return `${duration} minutes`;
  }

  conflictsWith(other: TimeTable): boolean {
    if (this.day !== other.day) return false; // Only check conflicts on the same day

    const thisStart = new Date(`2000-01-01T${this.startTime}`);
    const thisEnd = new Date(`2000-01-01T${this.endTime}`);
    const otherStart = new Date(`2000-01-01T${other.startTime}`);
    const otherEnd = new Date(`2000-01-01T${other.endTime}`);

    return (
      (thisStart < otherEnd && thisEnd > otherStart) || // Overlapping condition
      (otherStart < thisEnd && otherEnd > thisStart)
    );
  }

  toString(): string {
    return `${this.day} | ${this.startTime} - ${this.endTime} | Subject: ${this.subject.name} | Room: ${this.subject.classroom} | Teacher: ${this.subject.teacher?.name ?? "TBD"} | Duration: ${this.getDuration()}`;
  }
}