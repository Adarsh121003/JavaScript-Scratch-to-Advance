// There are two type of datatype (they divided on the basis of how they store in memory and how they can access)
// 1 Primitive Data types => 7 types (they all are call by value)
// String, Number, Boolean, null, undefine, symbol, big int
let Name = "Adarsh";
let age = "22";
const score = 100;
const scoreValue = 100.3;
// console.log(typeof(scoreValue));
// console.log(typeof(score));
const isOutsideTemp = null;
const isLoggedIn = true;
let userEmail;
const id = Symbol('123');
const userId = Symbol('123');
// console.log(id === userId);

// 2. Non-Premitive or Refrence type(call by reference)
// Array, Objects, Functions
const fruites = ["Apple", "grapes", "Banana"]; //Array
let myObject = {
    Name: "Adarsh Tiwari",
    Age: 22,
    RollNo: 1205
}

const myFunction = function(){
    console.log("Hello World");
}
// console.log(typeof (isOutsideTemp))
// myFunction();
// https://262.ecma-international.org/5.1/#sec-11.4.3
// =======================================================================
// Stack And Heap Memory
// In stack all the values are Primitive data types === In heap all the values are non-primitive types they provide reference only. 
// In stack it makes the copy of the value and make changes in that but in heap only original values change.
// Example of stack 
let userName = "Adarsh"
let changeUserName = userName;
changeUserName = "Adarsh Tiwari";
console.log(userName);
console.log(changeUserName);
// As we can see in the example that if we print userName and changeUserName then it gives both output.

// Example of Heap

let userOne = {
    email: "adarsh@mail.com",
    name: "Adarsh",
    age: 22
}


let userTwo = userOne;
userTwo.email = "adarshtiwari@mail.com";
console.log(userOne.email);
console.log(userTwo.email);

let myName = "Adarsh";
let completeName = myName;
completeName = "Adarsh Tiwari";
console.log(myName);
console.log(completeName);

let myTest = {
    name: "Adarsh",
    age: 22
}
let myTestTwo = myTest;
myTestTwo.age = 23;
console.log(myTest.age);
console.log(myTestTwo.age);
