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
