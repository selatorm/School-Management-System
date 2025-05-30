import { Assignment } from "./Assignment";
import { Classroom } from "./Classroom";
import { Material } from "./Material";
import { SubjectType } from "./SubjectType";
import { Teacher } from "./Teacher";

export class Subject {
  materials: Material[] = [];
  assignments: Assignment[] = [];

  constructor(
    public name: string,
    public code: string,
    public type: SubjectType,
    public teacher: Teacher,
    public classroom: Classroom
  ) {}
}
