import { Person } from "./Person";

export class Director extends Person {



    constructor(id: number, name: string, age: number, email: string, phoneNumber: number) {
        super(id, name, age, email, phoneNumber);
    }
    getRole(): string {
        return ("I'm Director");
    }


}