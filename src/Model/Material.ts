import { Subject } from "../Model/Subject";

export class Material {
    constructor(
        private id: number,
        private subject: Subject,
        private title: string,
        private description: string,
        private downloadMaterial: string,
        private fileType: string,
        private uploadDate: Date = new Date()
    ) { }

    public getDownloadMaterial(): string {
        return this.downloadMaterial;
    }

    public getSummary(): string {
        return `Material: ${this.title} (${this.fileType}) for ${this.subject.name}. Uploaded on: ${this.uploadDate.toDateString()}`;
    }
}