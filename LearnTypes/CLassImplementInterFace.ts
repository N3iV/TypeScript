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
