import { Subject } from "./Subject";

export class Assignment {
  constructor(
    public title: string,
    public dueDate: Date,
    public subject: Subject
  ) {}
}
