import { Subject } from "./Subject";
import { Teacher } from "./Teacher";
import { Student } from "./Student";

export class Admin {
  constructor(public id: number, public name: string, public email: string) {}

  assignTeacher(subject: Subject, teacher: Teacher): void {
    subject.teacher = teacher;
  }

  assignSubject(student: Student, subject: Subject): void {
    student.subjects.push(subject);
  }
}
