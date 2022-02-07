export {};
interface Square {
  color: string;
  width: number;
}

let square: Square = { color: "red", width: 100 };

interface Student {
  name: string;
}
let 학생: Student = { name: "kim" };
interface Teacher extends Student {
  age: number;
}
let 선생: Teacher = { name: "kim", age: 20 };
