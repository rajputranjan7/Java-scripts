// Singleton
// object.create

//object literals

const mySym = Symbol("key1")
const JsUser = {
    name : "Ranjan",
    "full name" : "Rajput Ranjan",
    [mySym] : "mykey1",
    age: 18,
    location: "Vaadodara",
    email: "golusin110@gmail.com",
    isLoggedIn: false,
    lastLoginDay: ["Monday", "Sunday"]

}
// ACESS OBJECT

// console.log(JsUser.email);// method 1
// console.log(JsUser["email"]);// method 2 //Use this only
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym])

JsUser.email = "ranjan72525@gmail.com"
// Object.freeze(JsUser)
JsUser.email = "ranjan@google.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
