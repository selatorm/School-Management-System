import { Subject } from "./Subject";
import { Student } from "./Student";

export class Exam {
  constructor(
    private examRoom: string,
    private examDate: Date,
    private subject: Subject,
    private students: Student[]
  ) {}

  public getExamRoom(): string {
    return this.examRoom;
  }

  public getExamDate(): Date {
    return this.examDate;
  }

  public getSubject(): Subject {
    return this.subject;
  }

  public getStudents(): Student[] {
    return this.students;
  }

  public addStudent(student: Student): void {
    this.students.push(student);
  }

  public removeStudent(student: Student): void {
    this.students = this.students.filter(s => s.id !== student.id);
  }
}