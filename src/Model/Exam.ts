import { Student } from "./Student";
import { Subject } from "./Subject";

export class Exam {
  private results: Map<Student, number> = new Map(); // Store student scores

  constructor(
    private examRoom: string,
    private examDate: Date,
    private subject: Subject,
    private students: Student[] = []
  ) { }

  public getExamRoom(): string {
    return this.examRoom;
  }

  public getExamDate(): string {
    return this.examDate.toDateString(); // Format date
  }

  public getSubject(): Subject {
    return this.subject;
  }

  public getStudents(): Student[] {
    return this.students;
  }

  public addStudent(student: Student): void {
    if (!this.students.includes(student)) {
      this.students.push(student);
      console.log(`${student.name} added to the exam.`);
    } else {
      console.log(`${student.name} is already enrolled.`);
    }
  }

  public removeStudent(student: Student): void {
    this.students = this.students.filter(s => s !== student);
    console.log(`${student.name} removed from the exam.`);
  }

  public recordResult(student: Student, score: number): void {
    if (this.students.includes(student)) {
      this.results.set(student, score);
      console.log(`Score recorded for ${student.name}: ${score}`);
    } else {
      console.log(`${student.name} is not enrolled in this exam.`);
    }
  }

  public getResults(): Map<Student, number> {
    return this.results;
  }
}