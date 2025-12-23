const user ={
    username: "Ranjan",
    price: 446,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        //this used for current context
        console.log(this);
        
    }

}
// user.welcomeMessage()
// user.username = "Rajput"
// user.welcomeMessage()

// console.log(this);

// function happydent(){
//     console.log(this.username);
    
// }
// happydent()

// const chai = function(){
//     let username = "Ranjan"
//     console.log(this.username);
    
// }
// chai()

// +++++Arrow FUNCTION++++++++
const chai = () => {
    let username = "Ranjan"
    console.log(this);
    
}
// chai()

// ++++BASIC ARROW FUNCTION++++

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// +++++implicit return++++++

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) =>  (num1 + num2)

const addTwo = (num1,num2) => ({username: "Ranjan"})

console.log(addTwo(4,3));
