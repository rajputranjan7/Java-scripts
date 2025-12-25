const myNum = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4

// const myTotal = myNum.reduce(function(accumlator, currentvalue){
//     console.log(`Acc ${accumlator}, Currval ${currentvalue}`);
    
//     return accumlator + currentvalue
// }, 0)// 0 is intial value

const myTotal = myNum.reduce( (acc, currval) => acc+currval,0 )

// console.log(myTotal);

const shoppingcart = [
    {
        itemName: "js course",
        price: 2889
    },
    {
        itemName: "py course",
        price: 289
    },
    {
        itemName: "java course",
        price: 2000
    },
    {
        itemName: "c++ course",
        price: 2999
    },

]

const pricetopay = shoppingcart.reduce((acc, item) => acc + item.price, 0)
console.log(pricetopay);

