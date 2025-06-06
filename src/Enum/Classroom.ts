export enum Classroom {
  B12 = "B12",
  B13 = "B13",
  B22 = "B22",
  B23 = "B23",
  B32 = "B32",
  Breakroom = "Breakroom",
}

// Fix: Use Object.keys() instead of Object.values()
export function getClassroomNames(): string[] {
  return Object.keys(Classroom);
}