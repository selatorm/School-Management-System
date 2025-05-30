import { Person } from "./Person";
import { Student } from "./Student";
import { Subject } from "./Subject";

export class Admin extends Person {
    constructor(
        id: number,
        name: string,
        age: number,
        email: string,
        phoneNumber: number
    ) {
        super(id, name, age, email, phoneNumber);
    }

    public assignTeacher(subject: Subject, teacher: any) {
        subject.setTeacher(teacher);
    }

    public assignSubject(student: Student, subject: Subject) {
        student.addSubject(subject);
    }

    public getRole(): string {
        return "I'm Admin";
    }
}