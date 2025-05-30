import { Student } from "./Student";
import { Subject } from "./Subject";

export class Exam{
    constructor(private examRom:string,  private examDate:Date, private subjects:Subject, private students:Student){}
}