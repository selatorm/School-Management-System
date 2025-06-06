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

  public getName(): string {
    return this.name;
  }

  public getAddress(): string {
    return this.address;
  }

  public getClassrooms(): string[] {
    return this.classrooms;
  }

  public getDirectorName(): string {
    return this.director.name;
  }

  public addClassroom(classroom: string): void {
    this.classrooms.push(classroom);
  }

  public removeClassroom(classroom: string): void {
    this.classrooms = this.classrooms.filter(c => c !== classroom);
  }

  public enrollStudent(student: Student): void {
    this.students.push(student);
  }

  public hireTeacher(teacher: Teacher): void {
    this.teachers.push(teacher);
  }

  public getSchoolInfo(): string {
    return `${this.name}, established on ${this.establishedDate.toDateString()}, located at ${this.address}`;
  }
}