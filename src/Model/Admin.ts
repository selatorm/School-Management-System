import { Person } from "./Person";
import { Student } from "./Student";
import { Subject } from "./Subject";
import { Teacher } from "./Teacher";

export class Admin extends Person {
  constructor(id: number, name: string, email: string) {
    super(id, name, email, "Admin");
  }

  assignTeacher(subject: Subject, teacher: Teacher) {
    if (subject.teacher) {
      console.log(`Subject ${subject.name} already has a teacher assigned.`);
      return;
    }
    subject.teacher = teacher;
    console.log(`Assigned ${teacher.name} to ${subject.name}`);
  }

  assignSubject(student: Student, subject: Subject) {
    if (student.subjects.includes(subject)) {
      console.log(`Student ${student.name} is already enrolled in ${subject.name}`);
      return;
    }
    student.subjects.push(subject);
    console.log(`Enrolled ${student.name} in ${subject.name}`);
  }
}