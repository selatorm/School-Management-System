export abstract class Person {
  constructor(
    private id: number,
    private name: string,
    private age: number,
    private email: string,
    private phoneNumber: number
  ) {}

  abstract getRole(): string;
}
