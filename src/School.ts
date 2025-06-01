import { Classroom } from "./Classroom";

export class School {
    private name: string;
    private address: string;
    private classrooms: Classroom[] = [];

    constructor(name: string, address: string) {
        this.name = name;
        this.address = address;
    }

    getName(): string {
        return this.name;
    }

    getAddress(): string {
        return this.address;
    }

    getClassrooms(): Classroom[] {
        return this.classrooms;
    }

    addClassroom(classroom: Classroom): void {
        this.classrooms.push(classroom);
    }

    findClassroom(roomNumber: string): Classroom | undefined {
        return this.classrooms.find((room) => room === roomNumber);
    }
}
