// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "77rr"
tinderUser.name = "Ranjan"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email : "SOME@gmail.com",
    fullname:{
        userfullname: {
            firstname:"Ranjan",
            lastname: "Rajput"
        }
    }
}
// console.log(regularUser.fullname.userfullname.lastname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

const obj3 = {...obj1,...obj2}
// console.log(obj3);

const Users = [
    {
        id: 1,
        email: "hd@gmail.com"

    },
    {
        id: 1,
        email: "hd@gmail.com"

    },
    {
        id: 1,
        email: "hd@gmail.com"

    },
    {
        id: 1,
        email: "hd@gmail.com"

    },

]
Users[1].email
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "Ranjan"
}
//course.courseInstructor

const {courseInstructor : Instructor} = course //destructure object

// console.log(courseInstructor);
console.log(Instructor);
