import { Subject } from "../Model/Subject";


export class Material {
    constructor(
        private id: number,
        private subject: Subject, 
        private downloadMaterial: string
    ) {}

    public getDownloadMaterial(): string {
        return this.downloadMaterial;
    }
}
