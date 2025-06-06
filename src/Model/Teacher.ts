import { Assignment } from "./Assignment";
import { Subject } from "./Subject";
import { Person } from "./Person";

export class Teacher extends Person {
  public subjects: Subject[] = [];

  constructor(id: number, name: string, email: string) {
    super(id, name, email, "Teacher");
  }

  uploadMaterial(subject: Subject, material: string) {
    if (!subject.materials.has(material)) {
      subject.materials.add(material);
    } 
  }

  uploadAssignment(subject: Subject, assignment: Assignment) {
    subject.assignments.push(assignment);
  }

  gradeAssignment(assignment: Assignment, score: number): void {
    assignment.grade = score;
  }
}
