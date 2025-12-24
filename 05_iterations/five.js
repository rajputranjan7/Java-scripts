const coding  = ['js', 'ruby', 'java', 'python']

// coding.forEach(function (item) {
//     console.log(item);
    
// })

// coding.forEach( (item) => {
//     console.log(item);
    
// } )

// function printMe(item) {
//     console.log(item);
    
// }
// coding.forEach(printMe)

// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
    
// })

//array ke andr object
const myCoding = [
    {
        languageNam: "javascript",
        languageFileName: "js"
    },
    {
        languageNam: "java",
        languageFileName: "java"
    },
    {
        languageNam: "python",
        languageFileName: "py"
    },
]
myCoding.forEach((item) => {
    
    console.log(item.languageNam);
    
})