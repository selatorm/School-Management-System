import { Classroom } from "./Classroom";

export class School {
  private classrooms: Classroom[] = [];

  constructor(
    private name: string,
    private address: string
  ) {}

  getName(): string {
    return this.name;
  }

  getAddress(): string {
    return this.address;
  }

  getClassrooms(): Classroom[] {
    return this.classrooms;
  }

  addClassroom(classroom: Classroom): void {
    this.classrooms.push(classroom);
  }

  findClassroom(roomNumber: string): Classroom | undefined {
    return this.classrooms.find(room => room === roomNumber);
  }
}