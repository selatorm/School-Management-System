import { Subject } from "./Subject";

export class Material{
    constructor(private id:number, private subjects:Subject, private downloadMaterial: string){}
}