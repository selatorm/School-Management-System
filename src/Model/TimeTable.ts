import { Subject } from "./Subject";

export class TimeTable {
  constructor(
    public day: string,
    public startTime: string,
    public endTime: string,
    public subject: Subject
  ) {}

  toString(): string {
    return `${this.day} | ${this.startTime} - ${this.endTime} | Subject: ${this.subject.name} | Room: ${this.subject.classroom} | Teacher: ${this.subject.teacher?.name ?? "TBD"}`;
  }
}
