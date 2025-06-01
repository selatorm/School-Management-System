export class TimeTable {
  constructor(
    public day: string,
    public startTime: string,
    public endTime: string
  ) {}

  getSchedule(): string {
    return `${this.day}: ${this.startTime} - ${this.endTime}`;
  }
}