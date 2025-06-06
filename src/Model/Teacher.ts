import { Assignment } from "./Assignment";
import { Subject } from "./Subject";
import { Material } from './Material';
import { Person } from "./Person";


export class Teacher extends Person {
  constructor(id: number, name: string, email: string) {
    super(id, name, email, "Teacher");
  }

  uploadMaterial(subject: Subject, material: string) {
    subject.materials.push(material);
  }

  uploadAssignment(subject: Subject, assignment: Assignment) {
    subject.assignments.push(assignment);
  }
}