# Tuple

```js
//*======== TUPLE - Giong nhu la Array ===== *//

let arr = ["henry", 30, false];
// => Kieu du lieu: string | number | boolean
console.log(arr);
arr[0] = 25;
arr[1] = "Vien";
arr[2] = true;
console.log(arr);

//? Tuple
const tup: [string, boolean, number] = ["Vien", true, 23];
// Phai khai bao trung vs thu tu khai bao kieu du lieu
//! const tup: [string,boolean,number] = ['Vien',23,true] // => loi

const myStudent: [string, number] = ["Vien", 20];
console.log(myStudent);
```

# Generics

## Basic

```ts
//*======== Generics ===== *//

type myArr = Array<string>; //khai bao du lieu cho myArr la string
type numArr = Array<number>;
const num: numArr = [2, 3, 4, 5]; // OK
// const nume:myArr =[23,4,5,3]// Loi vi kieu du lieu la string

const last = (arr: Array<number>) => arr[arr.length - 1]; // Dang du lieu tra ve la number

const l1 = last([3, 4, 5, 3, 2]);
console.log(l1);

// const l2 = last(['a','b'])

const lastT = <T>(arr: Array<T>) => arr[arr.length - 1];
//! Kieu du lieu cua Arr phu thuoc vao T. Neu T la string thi tra ve string
console.log(lastT(["1", "b"]));
console.log(lastT([, 3, 4, 5, 3]));

const makeArr = (x: number) => [x];
console.log(makeArr(4)); //OK
// console.log(makeArr("4"));//Loi

const makeArrT = <T>(x: T) => [x];
console.log(makeArrT(4)); //OK
console.log(makeArrT("4")); //OK

const makeArrXY = <X, Y>(x: X, y: Y) => [x, y]; // Neu chua biet truyen kieu du lieu nao cho X Y => <X,Y>
// Kieu tra ve la Arr
console.log(makeArrXY("d", 3));
console.log(makeArrXY("3", "4"));
console.log(makeArrXY(4, 5));

const makeTuple = <X, Y>(x: X, y: Y): [X, Y] => [x, y]; // Kieu tra ve la Tuple
console.log(makeTuple("3", 4));
console.log(makeTuple("3", "3"));

const makeTupleWithDefault = <X, Y = number>(x: X, y: Y): [X, Y] => [x, y];
console.log(makeTupleWithDefault("d", 3)); // Bat buoc tham so thu 2 phai la number
```

## Generics Extends

```ts
//! ---- GENERICS EXTENDS

// const makeFullName =obj => ({ // Se bao loi
//     ...obj,
//     fullname: `${obj.firstName} ${obj.lastName}`
// })

const makeFullNameConstraint = (obj: {
  firstName: string;
  lastName: string;
}) => ({
  ...obj,
  fullname: `${obj.firstName} ${obj.lastName}`,
});
const vien = makeFullNameConstraint({
  firstName: "Hoang",
  lastName: "Vien",
});
console.log(vien.fullname);

// const makeFullNameConstraintWithGenerics = <T>(obj:T) =>({
//     ...obj,
//     fullname: `${obj.firstName} ${obj.lastName}`, // Bao loi vi firstName va lastName k la property cua T
// })

const makeFullNameConstraintWithGenerics = <
  T extends { firstName: string; lastName: string } // co 2 property la bat buoc, tuy nhien co the truyen them
>(
  obj: T
) => ({
  ...obj,
  fullname: `${obj.firstName} ${obj.lastName}`,
});

console.log(
  makeFullNameConstraintWithGenerics({
    firstName: "Huynh",
    lastName: "Vien",
    age: 20,
    gender: "Male",
  })
);

const addNewEmployee = (employee: object) => {
  const uid = Math.floor(Math.random() * 100);
  return {
    ...employee,
    uid,
  };
};

const empOne = addNewEmployee({ name: "Vien", age: 20 }); // Khi chi vao empOne chi tra ve object chi co moi uid
console.log(empOne); //{ name: 'Vien', age: 20, uid: 59 }
// console.log(empOne.name) // Loi

const addNewEmployeeT = <T extends object>(employee: T) => {
  // Khi chi vao empOne se hien ra kieu tra ve la T + uid
  const uid = Math.floor(Math.random() * 100);
  return {
    ...employee,
    uid,
  };
};

const empTwo = addNewEmployeeT({ name: "Vien", age: 20, gender: "Male" });
console.log(empTwo); // { name: 'Vien', age: 20, gender: 'Male', uid: 66 }
console.log(empTwo.age); //20

const addNewEmployeeTWithConstraint = <T extends { name: string }>(
  employee: T
) => {
  //Bat buoc phai co 1 property la name kieu du lieu string
  const uid = Math.floor(Math.random() * 100);
  return {
    ...employee,
    uid,
  };
};

const empThree = addNewEmployeeTWithConstraint({ name: "Vien", age: 30 }); //Ok
// const empFour = addNewEmployeeTWithConstraint({  age: 30 }); // Loi
```

## Generics Interface

```ts
//! Generics Interface

interface Resource<T> {
  uid: number;
  name: string;
  data: T;
}

const resourceOne: Resource<string> = {
  uid: 1,
  name: "Person",
  data: "as321dfsa",
};
console.log(resourceOne);

// const resourceTwo:Resource ={ //Se bao loi => yeu cau dinh nghia kieu du lieu
//     uid: 2,
//     name:"Animal",
//     data:312312321
// }

const resourceThree: Resource<object> = {
  uid: 1,
  name: "Person",
  data: { name: "Avenger" },
};
console.log(resourceThree);

const resourceFour: Resource<string[]> = {
  uid: 1,
  name: "Skills",
  data: ["css", "html"],
};
console.log(resourceFour);

type NumberResource = Resource<number[]>;

const numbers: NumberResource = {
  uid: 1,
  name: "Numbers",
  data: [3, 4, 5, 5],
};
console.log(numbers);
```
