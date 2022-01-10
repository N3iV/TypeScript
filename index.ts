//*========= INTERFACE ========= *//
interface Person {
  name: string;
  age: number;
  speak(language: string): void;
  spend(amount: number): number;
}

const vien: Person = {
  name: "vien",
  age: 20,
  speak(text: string): void {
    console.log(text);
  },
  spend(amt: number): number {
    return amt;
  },
};

console.log(vien);
vien.speak("Tieng Viet");
console.log(`Chi tieu hang thang: ${vien.spend(200)}`);
