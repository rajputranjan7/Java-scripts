// Immediatley Invoked Function Expressions(IIFE)

(function chai(){
    //NAMED IIFE
    console.log(`DB CONNECTED`)
})();//this semicolon is used to terminate the work

((name) => {
    console.log(`DB CONNECTED succesfully ${name}`)
})("ranjan");
