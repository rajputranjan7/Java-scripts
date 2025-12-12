// Primitive types

// 7 types : String, Number,Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = true
const outsidetemp = null
let userEmail;

const id = Symbol('351')
const anotherId = Symbol('351')
console.log(id === anotherId);
const bigNumber = 6546464354135346465n// convert into bigInt


// Refernce (Non Primitve)

// Array ,Objects, Functions

const heros = ['shaktiman', 'nagraj', 'doga'];
let myObj = {
    name : "Ranjan",
    age : 21,
}

const myFunction =function(){
    console.log("Hello");
    
}

// **********************memory*************
// Stack (Primitive), Heap (Non-Primitive)

// let mYoutubename = "codesnap"
// let anothername = mYoutubename
// anothername = "ranjan"
// console.log(mYoutubename);
// console.log(anothername);


let userOne = {
    email: " user@gmail.com",
    upi : "user@ibl"
}

let userTwo = userOne

userTwo.email = "ranjan@google.com"
console.log(userOne.email);
console.log(userTwo.email);

