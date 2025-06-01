import { Person } from "./Person";
import { Subject } from "./Subject";
import { Material } from "./Material";
import { Assignment } from "./Assignment";

export class Teacher extends Person {
  constructor(id: number, name: string, age: number, email: string, phoneNumber: number, role:string) {
    super(id,name,age,email,phoneNumber,role);
  }
  
  public subjects: Subject[] = [];

  getRole(): string {
    return "Teacher";
  }
  getName(): string {
    return this.name;
  }

  uploadMaterial(subject: Subject, material: Material): void {
    subject.materials.push(material);
  }

  uploadAssignment(subject: Subject, assignment: Assignment): void {
    subject.assignments.push(assignment);
  }
}

