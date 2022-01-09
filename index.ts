//* ======= Function Signature =========== *//

let greet: Function;
greet = () => console.log("hello");

let groot: (a: string, b: string) => void;

groot = (name: string, age: string) =>
  console.log(`${name} is ${age} years old`);
groot("groot", "9999");

type Student = { name: string; age: number };
let printStdu: (student: Student) => void;
printStdu = (student: Student) => {
  console.log(`${student.name} - ${student.age}`);
};
printStdu({ name: "Vien", age: 30 });
