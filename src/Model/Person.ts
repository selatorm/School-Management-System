export class Person {
  constructor(
    public id: number,
    public name: string,
    protected email: string, 
    public role: string
  ) { }
}