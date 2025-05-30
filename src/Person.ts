export abstract class Person{
    constructor(
        public id: number,
        public name: string,
        public age: number,
        public email: string,
        public phoneNumber: number
    ) {}
    abstract getRole(): string;
}