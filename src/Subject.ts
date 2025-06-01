import { Assignment } from "./Assignment";
import { Classroom } from "./Classroom";
import { Material } from "./Material";
import { SubjectType } from "./SubjectType";
import { Teacher } from "./Teacher";

export class Subject {
  public materials: Material[] = [];
  public assignments: Assignment[] = [];

  constructor(
    public name: string,
    public type: SubjectType,
    public teacher: Teacher,
    public classroom: Classroom
  ) {}

  setTeacher(teacher: Teacher): void {
    this.teacher = teacher;
  }
}
