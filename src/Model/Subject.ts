import { Assignment } from "./Assignment";
import { Teacher } from "./Teacher";

export class Subject {
  public materials: Set<string> = new Set();
  public assignments: Assignment[] = [];

  constructor(
    public name: string,
    public classroom: string,
    public code: string,
    public teacher?: Teacher
  ) { }

  public addAssignment(assignment: Assignment): void {
    this.assignments.push(assignment);
  }
}