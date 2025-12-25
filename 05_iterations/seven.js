const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


// const nums = myNumbers.map ((num) => {return num+10})

const newNums = myNumbers
                    .map((num) => num*10)
                    .map((num) => num+1)
                    .filter((num) => num >= 40) // true false game
console.log(newNums);


//+++++using for each++++

// myNumbers.forEach(element => {
//     const nu = element+10;
//     console.log(nu);
    
// });

