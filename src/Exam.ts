import { Student } from "./Student";
import { Subject } from "./Subject";

export class Exam {
    constructor(
        private examRoom: string,  // Fixed typo: examRom -> examRoom
        private examDate: Date,
        private subject: Subject,
        private students: Student[]
    ) {}
}