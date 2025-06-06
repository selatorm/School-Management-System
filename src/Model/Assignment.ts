export class Assignment {
  constructor(
    public title: string,
    public dueDate: Date,
    public studentName: string,
    public grade?: number,
    public isSubmitted: boolean = false
  ) { }

  submitAssignment() {
    this.isSubmitted = true;
    console.log(`Assignment "${this.title}" submitted by ${this.studentName}`);
  }

  assignGrade(grade: number) {
    if (!this.isSubmitted) {
      console.log("Cannot grade an assignment that hasn't been submitted.");
      return;
    }
    this.grade = grade;
    console.log(`Assignment "${this.title}" graded: ${grade}`);
  }
}