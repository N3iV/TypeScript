var vien = {
    name: "vien",
    age: 20,
    speak: function (text) {
        console.log(text);
    },
    spend: function (amt) {
        return amt;
    }
};
console.log(vien);
vien.speak("Tieng Viet");
console.log("Chi tieu hang thang: ".concat(vien.spend(200)));
