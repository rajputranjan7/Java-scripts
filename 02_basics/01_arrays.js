const myArr = [1,2,3,4,5]
const myHeroes = ["shaktiman", "naagaraj"]

const myArr2 = new Array(1,2,3,4)
// console.log(myArr[2]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop();

//myArr.unshift(9) //add number at starting in array
// myArr.shift() //remove number at starting in array

// console.log(myArr.includes(5)) // giving true/false answer
// console.log(myArr.indexOf(2))
const newArr = myArr.join()// convert in string

// console.log(myArr);
// console.log(typeof newArr)


//slice , splice

console.log("A ",myArr);
const myn1 = myArr.slice(1,3)

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3)
console.log("c ",myArr);
console.log(myn2);



    
