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
