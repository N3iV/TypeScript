# Type Basic

> Khi thay doi du lieu can phai dung voi kieu du lieu dc dinh nghia

```js
// * Type basic
let myName = "Vien";
let age = 20;
let isStudent = false;

// myName = 50; => loi datatype

myName = "Hoang";
console.log(myName, age, isStudent);
```

# Function

```js
//* Function

const square = (side: number) => side * side;
//Khai báo tham số hàm cần định nghĩa thêm kiểu dữ liệU
console.log(square(3));

//? Tao 1 function
let greet: Function;
greet = function () {
  console.log("I'm groot");
};
greet();

const add = (a: number, b: number, c: number) => a + b + c;

// console.log(add(2,3,'c')) => Lỗi
console.log(add(4, 5, 6));

const add2 = (a: number, b: number, c: number | string) => {
  // tham số C có thể vừa là number vừa là string
  console.log(a + b);
  console.log(c);
};
add2(1, 2, "c");

const add3 = (a: number, b: number, c?: number | string) => {
  // Tham so C co the co hoac ko
  console.log(a + b);
  console.log(c);
};

add3(2, 3);

const addWDefaultPar = (a: number, b: number, c: number | string = 10) => {
  console.log(a + b);
  console.log(c);
};
addWDefaultPar(2, 3);

// const minus = (a: number, b: number): number => "abc"; //Loi => yeu cau ket qua tra ve cua ham phai la number
// console.log(minus(4, 3));
const minus2 = (a: number, b: number): number => a - b;
console.log(minus2(4, 3));
```

# Array

```js
//* ========= Array ========= *//

const names = ["ti", "vien", "hoang"]; // Toan bo deu la string => names kieu string
names.push("son");
console.log(names);
//! Khong the push 1 phan tu la so
// names.push(2); //Loi

const nums = [2, 3, 4, 5];
nums.push(10);
console.log(nums);
// nums.push('VIen') => loi

let mixed = [1, "vien", false];
// O day co the push, thay doi de lieu thoai mai'
//Tuy nhien khong the push 1 object
```

# Object

```js
//* ========= Object ========= *//

let person = {
  name: "Vien",
  age: 20,
  isStudent: true,
};

// person.name = 20  // => loi
person.name = "Ti Chuot";
console.log(person);

// Khong the them cac property moi
// person.crush = ' hehe' => loi

person = {
  name: "Vien",
  age: 81,
  isStudent: false,
};
//Co the thay doi object, tuy nhien phai du 3 key, khong the them hoac thieu
```

# EXPLICIT TYPES

```ts
//* ========= EXPLICIT TYPES ========= *//

let myName: string = "Hoang";
let age: number;

myName = "vien"; //OK
// myName = 20 // Loi
console.log(myName);

// Arrays

let students: string[] = ["nam", "hung"];

//Union
let mixed: (string | number | boolean)[];
mixed = [4, "Vien Hoang", true]; // => That's OK

let id: string | number;
id = "123";
id = 123;

let hobbies: "Book" | "Music"; // Chi dc chon 1 trong 2

hobbies = "Book"; // OK
// hobbies = 'Cook' // Loi

//Object

let person: object;
person = {
  name: "Vien",
  age: 30,
};

let student: {
  name: string;
  age: number;
  isGood: boolean;
};
student = {
  name: "Ven",
  age: 20,
  isGood: true,
};
```

# Any Types

```js
//* ======= Any Types =========== *//

let age: any = 25;
age = "Vien"; // OK
age = { a: "b" }; // Ok
// Any => Y het JS thong thuong
```

# Type Alias

```js
//* ======= Type Alias =========== *//
//Tao ra type moi tu nhung type co san

type StringOrNumber = string | number;
type Student = { name: string, id: StringOrNumber }; // Day khong phai la Object

const studentDetails = (id: StringOrNumber, studentName: string): void => {
  console.log(`Student ${studentName} has id: ${id}`);
};
studentDetails(31232, "Vien");

const groot = (user: Student) =>
  console.log(`${user.name} with id ${user.id} say bye :D`);

groot({ name: "Groot", id: 130303 });
```
