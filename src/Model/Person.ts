export class Person {
  constructor(
    public id: number,
    public name: string,
    protected email: string, // Changed from private to protected
    public role: string
  ) { }
}