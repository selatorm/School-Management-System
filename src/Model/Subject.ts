import { Classroom } from "../Enum/Classroom";
import { Material } from "./Material";
import { SubjectType } from "../Enum/SubjectType";
import { Teacher } from "./Teacher";
import { Assignment } from "./Assignment";

export class Subject {
  public materials: Material[] = [];
  public assignments: Assignment[] = [];

  constructor(
    public name: string,
    public subjectType: SubjectType, // ✅ Fixed: Now assigned from constructor
    public teacher: Teacher,
    public classroom: Classroom
  ) {}

  setTeacher(teacher: Teacher): void {
    this.teacher = teacher;
  }
}
