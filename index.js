"use strict";
//Basic types
let age = 25;
let hobby = "Soccer";
let isAdult = true;
let fruit = "apple";
let fruits = ["Apple", "Ornages"];
let numArry = [[1], [2]];
let employees = [
    [2, "sarrag"],
    [3, "tgfdcs"],
];
let newcar = {
    brand: "lexus",
    year: 2003
};
function copyArr(arr) {
    return [...arr];
}
//Enums
var Eyecolor;
(function (Eyecolor) {
    Eyecolor["brown"] = "Common eye color";
    Eyecolor["blue"] = "rare eye color";
    Eyecolor["green"] = "very rare eye color";
})(Eyecolor || (Eyecolor = {}));
function displayStudent(student) {
    const info = student.name + "\n" + student.age + "\n" + student.eyeColor;
    document.body.innerText = info;
}
displayStudent({
    name: "jack",
    age: 20,
    eyeColor: Eyecolor.brown
});
