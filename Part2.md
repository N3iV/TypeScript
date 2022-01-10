# Optional and NON NULL

```js
//*======= Optional and NON NULL ========= *//
// ----> ?: - Tham so khong bat buoc
const add = (a: number, b?: number) => (b ? a + b : a);
console.log(add(1, 2));
console.log(add(3));

const addNonNull = (a: number, b?: number) => a + b!;
// Dau " ! " co nghia la non null
console.log(addNonNull(2));
console.log(addNonNull(3, 4));

```

# Class

```js
//*========= Class ========= *//

class employee {
  // public name: string;
  // private age: number;
  // readonly male: boolean;
  // constructor(a: string, b: number, c: boolean) {
  //   this.name = a;
  //   this.age = b;
  //   this.male = c;
  // }
  constructor(
    public name: string,
    private age: number,
    readonly male: boolean
  ) {}
  print() {
    return `Name: ${this.name}, Age: ${this.age}, Gender: ${
      this.male ? "Male" : "FeMale"
    }`;
  }
}

const vien = new employee("Vien", 20, true);

///////////////////////////////
//////////////////////////////
// console.log(vien.name);
// // console.log(vien.age); // Bao loi - Vi age la private
// console.log(vien.male);

// vien.name = "Ti";
// console.log(vien.name);
// //! Tuy nhien male la READONLY
// // => Khong the thay doi --- vien.male = false
// console.log(vien.print());

///////////////////////////////
//////////////////////////////

const bob = new employee("Bob", 44, true);

let employees: employee[] = [];

employees.push(vien);
employees.push(bob);
employees.forEach((empl) => console.log(empl.print()));

```

# Modules

```js
//*========= MODULES ========= *//
import { employee } from "./employees";

const nam = new employee("Nam", 20, true);
console.log("HIHI");
console.log(nam.print());
```
