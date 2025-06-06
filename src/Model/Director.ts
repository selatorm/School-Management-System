import { Person } from "./Person";

export class Director extends Person {
  age: number;
  phoneNumber: number;
  constructor(
    id: number,
    name: string,
    age: number,
    email: string,
    phoneNumber: number
  ) {
    super(id, name, email, "Director");
    this.age = age;
    this.phoneNumber = phoneNumber;
  }

  displayInfo() {
    return `Director ${this.name}, Email: ${this.email}, Phone: ${this.phoneNumber}`;
  }
}