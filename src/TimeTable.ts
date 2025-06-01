export class TimeTable {
  constructor(
    public day: string,
    public startTime: Date,
    public endTime: Date
  ) {}

  getSchedule(): string {
    return `${this.day}: ${this.startTime} - ${this.endTime}`;
  }
}