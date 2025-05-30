import { Subject } from "./Subject";
import { Teacher } from "./Teacher";
export class Feedback {
    constructor(
        public rating: number,
        public comments: string,
        public subject: Subject,
        public teacher: Teacher
    ) {}
}