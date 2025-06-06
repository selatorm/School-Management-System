import { Subject } from "./Subject";
import { Student } from "./Student";
import { Teacher } from "./Teacher";
import { Person } from "./Person";


export class Admin extends Person {
  constructor(id: number, name: string, email: string) {
    super(id, name, email, "Admin");
  }

  assignTeacher(subject: Subject, teacher: Teacher) {
    subject.teacher = teacher;
  }

  assignSubject(student: Student, subject: Subject) {
    student.subjects.push(subject);
  }
}