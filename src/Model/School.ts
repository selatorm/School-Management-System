import { Director } from "./Director";
import { Student } from "./Student";
import { Teacher } from "./Teacher";

export class School {
  private students: Student[] = [];
  private teachers: Teacher[] = [];

  constructor(
    private name: string,
    private address: string,
    private director: Director,
    private classrooms: string[],
    private establishedDate: Date = new Date()
  ) { }

  getName(): string {
    return this.name;
  }

  getAddress(): string {
    return this.address;
  }

  getClassrooms(): string[] {
    return this.classrooms;
  }

  getDirectorName(): string {
    return this.director.name;
  }

  addClassroom(classroom: string): void {
    this.classrooms.push(classroom);
  }

  removeClassroom(classroom: string): void {
    this.classrooms = this.classrooms.filter(c => c !== classroom);
  }

  enrollStudent(student: Student): void {
    this.students.push(student);
  }

  hireTeacher(teacher: Teacher): void {
    this.teachers.push(teacher);
  }

  getSchoolInfo(): string {
    return `${this.name}, established on ${this.establishedDate.toDateString()}, located at ${this.address}`;
  }
}