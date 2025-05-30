export class School{
    private name: string;
    private address: string;
    private classrooms: Classroom[];
    constructor(name: string, address: string){
        this.name = name;
        this.address = address;
    }
}