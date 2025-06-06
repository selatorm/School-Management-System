import { Assignment } from "./Assignment";
import { Subject } from "./Subject";
import { Person } from "./Person";

export class Teacher extends Person {
  public subjects: Subject[] = [];

  constructor(id: number, name: string, email: string) {
    super(id, name, email, "Teacher");
  }

  public uploadMaterial(subject: Subject, material: string) {
    if (!subject.materials.has(material)) {
      subject.materials.add(material);
      console.log(` Material uploaded: "${material}" for ${subject.name}`);
    } else {
      console.log(` Material "${material}" already exists.`);
    }
  }

  public uploadAssignment(subject: Subject, assignment: Assignment) {
    subject.assignments.push(assignment);
    console.log(` Assignment uploaded: "${assignment.title}" for ${subject.name}`);
  }

  public gradeAssignment(assignment: Assignment, score: number): void {
    assignment.grade = score;
    console.log(` Assignment "${assignment.title}" graded: ${score}`);
  }
}