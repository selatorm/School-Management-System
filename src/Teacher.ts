import { Person } from "./Person";
import { Subject } from "./Subject";
import { Material } from "./Material";
import { Assignment } from "./Assignment";

export class Teacher extends Person {
  public subjects: Subject[] = [];

  getRole(): string {
    return "Teacher";
  }

  uploadMaterial(subject: Subject, material: Material): void {
    subject.materials.push(material);
  }

  uploadAssignment(subject: Subject, assignment: Assignment): void {
    subject.assignments.push(assignment);
  }
}
