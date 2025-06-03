import { Subject } from "../Model/Subject";

export class Grade {
  constructor(
    public subject: Subject,
    public score: number
  ) {}
}
