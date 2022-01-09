//* ======= Function Signature =========== *//
var greet;
greet = function () { return console.log("hello"); };
var groot;
groot = function (name, age) {
    return console.log("".concat(name, " is ").concat(age, " years old"));
};
groot("groot", "9999");
var printStdu;
printStdu = function (student) {
    console.log("".concat(student.name, " - ").concat(student.age));
};
printStdu({ name: "Vien", age: 30 });
