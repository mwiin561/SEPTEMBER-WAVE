console.log("hello world ")
var name;
let age;
const gender = "male";
// console.log(name); // error: Cannot access 'name' before initialization
console.log(`My name is ${name}`);
//const.kinda means constant so it dont change really
age = 28;
console.log(`${gender} and I am ${age}`);
//function greet() {
age = 16;
//primitive data types
//booleans,strings,symbols,big int, null,undefined
//referenced data types
/*arrays, objects,functions*/
/*other data types
NaN,infinity and -infinity,primitive wrappers*/
name = "walter";
console.log( name )

let firstNumber = 21;
let secondNumber = 12;

let sum = firstNumber+secondNumber;
console.log(sum)
let difference = firstNumber-secondNumber;
console.log(difference);
let quotient = firstNumber/secondNumber;
console.log(quotient);
let remainder = firstNumber%secondNumber;
console.log(remainder);


let num2=200;
num2 += 200;
console.log(num2);

//let country = null;
//country = "USA" || "Canada";
//console.log  (country);

let country = undefined;
country =  JAMAICA;
console.log(country);

let amIsane=true;
console.log(amIsane);

//object
const student = {
    name:"Walter",
    country:"jamaica",
    age:12,
    isblack:true,
    tution:3.45,
}
console.log(student)
//accessing an element of the object
console.log("the value of name in the object is "+student["name"]) //dot notation
//OR
console.log("the value of name in the object is ", student.name)

//template withdraws. add strings of text and variables (` text  `)
//`this is a template string ${variable}`