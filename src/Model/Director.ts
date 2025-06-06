import { Person } from "./Person";

export class Director extends Person {
  getName() {
    throw new Error("Method not implemented.");
  }
  constructor(
    id: number,
    name: string,
    age: number,
    email: string,
    phoneNumber: number,
    role: string
  ) {
    super(id, name, age, email, phoneNumber, role);
  }
}
