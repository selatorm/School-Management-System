import { Subject } from "./Subject";

export class Material {
    constructor(
        private id: number,
        private subject: Subject, 
        private downloadMaterial: string
    ) {}
}