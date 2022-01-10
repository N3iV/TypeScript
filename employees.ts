export class employee {
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
// employees.forEach((empl) => console.log(empl.print()));
