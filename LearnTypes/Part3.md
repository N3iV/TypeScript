# Class with Interface

```js
import { Invoice, Payment } from "./CLassImplementInterFace";
import { HasPrint } from "./interfaceForClass";

const documentOne: HasPrint = new Invoice("Vinamilk", "Drink Milk", 400000);
const documentTwo: HasPrint = new Payment("VinFast", "Create Car", 20000000);
const allDocuments: HasPrint[] = [];
allDocuments.push(documentOne);
allDocuments.push(documentTwo);
console.log(documentOne);
console.log(documentTwo);
console.log(allDocuments);
```

> File CLassImplementInterFace

```js
import { HasPrint } from "./interfaceForClass";

export class Invoice implements HasPrint {
  constructor(
    readonly client: string,
    private work: string,
    public amount: number
  ) {}
  //Bat buoc phai implements ham` print
  print(): string {
    return `${this.client} owes ${this.amount}$ for this work: ${this.work}`;
  }
}

export class Payment implements HasPrint {
  constructor(
    readonly recipient: string,
    private job: string,
    public amt: number
  ) {}
  print(): string {
    return `i owe ${this.recipient}  ${this.amt}$ for this JOB: ${this.job}`;
  }
}

```

> File InterfaceForClass

```js
export interface HasPrint {
  print(): string;
}
```
