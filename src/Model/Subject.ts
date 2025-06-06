import { Assignment } from "./Assignment";
import { Teacher } from "./Teacher";

export class Subject {
  teacher?: Teacher;
  materials: string[] = [];
  assignments: Assignment[] = [];

  constructor(public name: string, public classroom: string) { }
}