export abstract class Person {
  
  constructor(
    private id: number,
    protected name: string,  // change private to protected
    private age: number,
    private email: string,
    private phoneNumber: number,
    private role: string
  ) {}

  public getRole(): string {
  return this.role;
}


  public getName(): string {
    return this.name;
  }
  public getEmail():string{
    return this.email;
  }
}
