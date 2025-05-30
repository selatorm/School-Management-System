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