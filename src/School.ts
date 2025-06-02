import { Classroom } from "./Classroom";
import { Teacher } from "./Teacher";
import { Student } from "./Student";

export class School {
    public name: string;
    public motto: string;
    private address: string;
    private classrooms: Classroom[] = [];
    private teachers: Teacher[] = [];
    private students: Student[] = [];

    constructor(name: string, motto: string, address: string) {
        this.name = name;
        this.motto = motto;
        this.address = address;
    }

    addTeacher(teacher: Teacher): void {
        this.teachers.push(teacher);
    }

    addStudent(student: Student): void {
        this.students.push(student);
    }

    listTeachers(): Teacher[] {
        return this.teachers;
    }

    listStudents(): Student[] {
        return this.students;
    }
}