//Basic types
let age: number = 25;
let hobby: string = "Soccer";
let isAdult: boolean = true;
let fruit: any = "apple";

let fruits: string[] = ["Apple", "Ornages"];
let numArry: number[][] = [[1], [2]];

let employees: [number, string][] = [
  [2, "sarrag"],
  [3, "tgfdcs"],
];

type car = {
    brand: string,
    year: number
}

let newcar: car = {
    brand: "lexus",
    year: 2003
}

function copyArr<T>(arr: T[]): T[]{
    return [...arr]
}

//Enums
enum Eyecolor {
    brown = "Common eye color",
    blue = "rare eye color",
    green = "very rare eye color"
}

interface Student {
    name: string,
    age: number,
    eyeColor: Eyecolor
}

function displayStudent(student: Student):void {
    const info: string = student.name + "\n" + student.age + "\n" + student.eyeColor
    document.body.innerText = info
}

displayStudent({
name:"jack",
age:20,
eyeColor: Eyecolor.brown
})