import { Subject } from "./Subject";

export class Material {
  constructor(
    public id: number,
    public subject: Subject,
    public fileURL: string
  ) {}
}