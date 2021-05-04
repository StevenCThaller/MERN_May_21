// function someName(){
//     for(let i = 0; i < 10; i++) {
//         if(i % 2 == 1) {
//             console.log("That's odd")
//         } else {
//             console.log("Even more so");
//         }
//     }
// }

// var sayHello = function(name){
//     console.log("Hello " + name);
// }

// const evenOrOdd = () => {
//     for(let i = 0; i < 10; i++) {
//         if(i % 2 == 1) {
//             console.log("That's odd")
//         } else {
//             console.log("Even more so");
//         }
//     }
// }

// Single line
// traditionally
// function squareNum(num){ 
//     return num * num; 
// }

// arrow function
// const square = num => num * num

// console.log(square(3));


// Arrow function/callback combo 1
// setTimout: built in javascript function that takes 2 parameters:
// parameter 1: instructions on what to do when that timer is up
// parameter 2: time in milliseconds
setTimeout(function(){ alert("surprise!") }, 5000)
// these 2 will do the same thing, but one is cleaner
setTimeout(() => alert("surprise!"), 5000)

// Arrow function/callback combo 2
// filter: javascript built in array prototype method to filter an array
// parameter: callback function used in the filter process
const myData = [
    {
        name: "Cody",
        email: "sthaller@codingdojo.com",
        age: 30
    },
    {
        name: "Bill",
        email: "bgates@microsoft.com",
        age: 60
    },
    {
        name: "Elon",
        email: "emusk@tesla.com",
        age: 45
    }, 
    {
        name: "Warren",
        email: "wbuffet@berkshirehathaway.com",
        age: 98237498234
    }
]
// // i want an array with the objects with an age of less than 50
// let newData = [];
// for(let user of myData) {
//     if(user.age < 50){
//         newData.push(user);
//     }
// }
// console.log(newData);

// // filter!!
// console.log(myData.filter(user => user.age < 50))


// class Deck {
//     constructor(){
//         const suits = [ 'Hearts', 'Clubs', 'Aces', 'Diamonds' ];
//         const faces = [ 'Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King' ];

//         const deck = [];
//         // for(const suit of suits){
//         //     for(const face of faces){
//         //         deck.push(this.createCard(suit, face));
//         //     }
//         // }

//         suits.forEach(suit => faces.forEach(face => deck.push(this.createCard(suit, face))))

//         console.log(deck);
//     }

//     createCard(suit, face){
//         return face + " of " + suit;
//     }
// }

// let myDeck = new Deck();





// another array prototype method that we love is map!
// example: i have an array of users, and i want to say hi to each one
// for(let i = 0; i < myData.length; i++) {
//     console.log(i + ". Hello " + myData[i].name);
// }

console.log(myData.map((user, index) => index + ". Hello " + user.name ));