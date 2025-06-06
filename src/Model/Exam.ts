import { Student } from "./Student";
import { Subject } from "./Subject";

export class Exam {
  private results: Map<Student, number> = new Map(); 

  constructor(
    private examRoom: string,
    private examDate: Date,
    private subject: Subject,
    private students: Student[] = []
  ) { }

  getExamRoom(): string {
    return this.examRoom;
  }

  getExamDate(): string {
    return this.examDate.toDateString(); 
  }

  getSubject(): Subject {
    return this.subject;
  }

  getStudents(): Student[] {
    return this.students;
  }

  addStudent(student: Student): void {
    if (!this.students.includes(student)) {
      this.students.push(student);
      console.log(`${student.name} added to the exam.`);
    } else {
      console.log(`${student.name} is already enrolled.`);
    }
  }

  removeStudent(student: Student): void {
    this.students = this.students.filter(s => s !== student);
    console.log(`${student.name} removed from the exam.`);
  }

  recordResult(student: Student, score: number): void {
    if (this.students.includes(student)) {
      this.results.set(student, score);
      console.log(`Score recorded for ${student.name}: ${score}`);
    } else {
      console.log(`${student.name} is not enrolled in this exam.`);
    }
  }

  getResults(): Map<Student, number> {
    return this.results;
  }
}