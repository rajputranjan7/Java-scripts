
let a = 10
if(true){
    let a =20
    const b = 30
//    console.log("INNER: ",a);
   

}
// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username ="Ranjan"
    function two(){
        const website = "yt"
        console.log(username);
        
    }
    // console.log(website);
    //  two()
}

// one()

if (true){
    const username = "ranjan"
    if(username === "ranjan"){
        const website = " youtube"
        // console.log(username + website);
        
    }
}

// +++++++++++++INTERESTING++++++++++

console.log(addone(5));
 
function addone(num){
    return num+1
}

addTwo(5)
const addTwo = function(num){
    return num+2

}
