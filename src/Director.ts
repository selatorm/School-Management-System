import { Person } from "./Person";

export class Director extends Person {
  

   constructor(public id:number, public name: string, public age: number, email: string, public phoneNumber: number) {
    super(id,name, age, email, phoneNumber);
  }

 
}