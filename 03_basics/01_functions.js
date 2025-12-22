//function syntax

function sayMyName (){
    console.log("R");
    console.log("a");
    console.log("n");
    console.log("j");
    console.log("a");
    console.log("n");
    
}
// sayMyName//reference
// sayMyName()//execution

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
    
// }
function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result
    return number1 + number2
    
}
const result = addTwoNumbers(2, 6)
// console.log("Result : ",result);

function loginUserMessage(username = "Rajput"){// if undefine then print this
    if(username === undefined){//(!username) also
        console.log("Please enter username: ");
        return
   }
   return `${username}just logged in`

}
// console.log(loginUserMessage("Ranjan "));
function cartprice(...num1) {
    return num1
    
}
// console.log(cartprice(200,400,500,200));


const user = {
    username: "ranjan",
    prices: 255
}

function handleobject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}
// handle
// object(user)

handleobject({
    username : "Rajput",
    price : 645
})
const myNewArray = [200,400,100]
function returnsecnvalue(getArray){
    return getArray[1]
}
// console.log(myNewArray);
