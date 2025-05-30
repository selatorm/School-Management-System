<<<<<<< HEAD
import { Person } from "./Person";

export class Admin extends Person{
   
    constructor(id: number, name: string, age: number, email: string, phoneNumber: number){
        super(id, name, age, email, phoneNumber);
    }
    public assignTeacher(){
        
    }
   
    public assignSubject() {
        
    }
     getRole(): string {
        return'Im Admin';   
    }

}
=======
>>>>>>> c9a2279f5ba66178554e71ccf0b5b46b109c012b
