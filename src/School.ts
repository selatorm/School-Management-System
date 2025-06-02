import { Director } from "./Director";

export class School {
  constructor(
    private name: string,
    private address: string,
    private director: Director,
    private classrooms: string[]
  ) {}

  getName() {
    return this.name;
  }

  getAddress() {
    return this.address;
  }

  getClassrooms() {
    return this.classrooms;
  }

  getDirectorName() {
    return this.director.getName();
  }
}
