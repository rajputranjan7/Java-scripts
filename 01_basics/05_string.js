const name = "ranjan"
const repoCount = 5

//  console.log(name + repoCount + " Value")

console.log(`Hello my name is ${name} amd my repoCount is ${repoCount}`)

const gameName = new String('ranjan-rr')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());


console.log(gameName.charAt(2));
console.log(gameName.indexOf('n'));

 const newString = gameName.substring(0, 4)
 console.log(newString);
 
const anotherString = gameName.slice(-5,6)
console.log(anotherString);
 const nString = '  ranjan   '
 console.log(nString);
 console.log(nString.trim());
 
const url = "https://ranjan.com/ranjan%20rajput"

console.log(url.replace('%20','-'))

console.log(url.includes('ranjan'));

console.log(gameName.split(' '));
