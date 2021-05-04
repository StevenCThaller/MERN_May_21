// for(var i = 0; i < 10; i++) {
//     console.log(i);
// }

// console.log("Value of i after for loop: " + i);


// What the code shows
myFunction();


function myFunction(){
    var x = 25;
    console.log(x);
}

// How the code executes
function myFunction(){
    var x = 25;
    console.log(x);
}

myFunction();

// console.log(x);

// let sum;
// console.log(sum);
// for(let i = 0; i < 10; i++) {
//     sum = i + 5;
//     console.log(i);
// }

// console.log(sum)
// console.log("Value of i after the for loop: " + i);


// const x = [1,2,3,4,5];
// x.push(6);
// console.log(x);

// Hoisting var
console.log(x);

var x = 25;

// What the code shows
console.log(x);

var x = 25;

var y = 18;
var w = "bird";
// How the code is actually executed:
var x;
var y;
var w;
console.log(x);

x = 25;

y = 18;
w = "bird";


// Hoisting let 
// Spoiler: it does not
console.log(x);

let x = 10;

// Neither will const
console.log(x);

const x = 10;

const myObj = {
    name: "Cody",
    email: "sthaller@codingdojo.com"
}
// destructuring allows us to extract specific portions of reference data types
// for objects, we can use destructuring to target specific key/value pairs,
// as well as have a blanket statement for everythign else inside the object

const user = {
    name: "Cody",
    email: "sthaller@codingdojo.com",
    age: 30,
    stacks: ["C#", "MERN", "Java", "Python", "Web Fund"],
    password: "codingizkool",
    ccn: "1234123412341234",
    ssn: "123121234"
}

// const userToReturn = {};
// userToReturn.name = user.name;
// userToReturn.email = user.email;
// this is tedious and annoying and i hate it

// // hypothetical: i JUST want the ccn and ssn
// // normally: 
// let userCCN = user.ccn;
// let userSSN = user.ssn;
// // using destructuring:
// let { ccn, ssn } = user;


// console.log(ccn);
// console.log(ssn);

// // hypothetical: i want an object with everything EXCEPT password, ccn, and ssn
// // normally:
// const userToReturn = {};
// userToReturn.name = user.name;
// userToReturn.email = user.email;
// userToReturn.age = user.age;
// userToReturn.stacks = user.stacks;

// using destructuring and the spread operator:
const { password, ccn, ssn, ...nonSensitiveUser } = user;
const { name, email, age, stacks } = user;

const myArray = [1,2,3,4,5,6,7];

// if i want just the 3rd, 4th, and 6th elements:
// let [first,second,third,fourth,fifth,sixth,seventh] = myArray;
// console.log(first);

// Challenge: remove the first element of an array
let [first, ...firstRemoved] = myArray;
// console.log(firstRemoved);



// Swapping 2 values
let x = 25;
let y = 2;

// let temp = x;
// x = y;
// y = temp;

// using destructuring
[x, y] = [y, x]
console.log(x);
console.log(y);

// But what if i have a variable already with one of the key names and don't want to overwrite it?
const user = {
    name: "Cody",
    email: "sthaller@codingdojo.com",
    age: 30,
    stacks: ["C#", "MERN", "Java", "Python", "Web Fund"],
    password: "codingizkool",
    ccn: "1234123412341234",
    ssn: "123121234"
}
let email = "someuserinput@gmail.com";

let { name: userName, email:userEmail, age: userAge } = user;
// console.log(toenail);
console.log(email);

