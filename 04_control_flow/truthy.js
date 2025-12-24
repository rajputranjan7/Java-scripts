const userEmail = []

if (userEmail){
    console.log("Got user email");
} else {
    console.log("Don't have user name");
    
}

//falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values

// "0", 'false', " ", [], {}, function(){} 

// if(userEmail.length === 0){
//     console.log("Array is empty");
    
// } //+++++Array checking+++
const emptyObj = {}
if(Object.keys(emptyObj).length === 0){
    console.log("object is empty");
    
}

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20

console.log(val1);

// Terniary operator

//condition?true : false
const iceateapr = 100
iceateapr <=80 ? console.log("less than 80") : console.log("more than 80");



