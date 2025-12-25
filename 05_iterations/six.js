const coding = ['js', "ruby", "java", "python", "cpp"]

// const values = coding.forEach( (item) => {
//     // console.log(item);
//     return item
// })

// console.log(values);


const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newnums = myNums.filter( (num) => num > 4)

const newnums = []
myNums.forEach( (num) => {
    if(num > 4) {
        newnums.push(num)
    }
} )
// console.log(newnums);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, 
        edition: 2004},
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1985, edition: 2008},
    { title: 'Book Three', genre: 'History', publish: 2003, edition: 2009},
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1928, edition: 2010},
    { title: 'Book Five', genre: 'Science', publish: 1999, edition: 2005},
    { title: 'Book Six', genre: 'Fiction', publish: 2000,
         edition: 2006},
    { title: 'Book Seven', genre: 'History', publish: 2005, edition: 2010}
];

// const userBooks = books.filter( (bk) => bk.genre === 'History') //Syntax of filter

let userBooks = books.filter( (bk) => {  
  return  bk.publish >= 1995 && bk.genre === 'History'
})
console.log(userBooks);

