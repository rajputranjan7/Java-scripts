const marvel_heros = ["Ironman","Thor","Hulk"]
const dc_heros = ["Batman","Superman","flash"]

//concat

// const all_heros = marvel_heros.concat(dc_heros) // add two array give new array

// console.log(all_heros);

//spread
 const allnheros = [...marvel_heros,...dc_heros]
//  console.log(allnheros);

 
 const another_array = [1, 2, 5 ,[ 5, 6, 9 ],7, 2, 8, [8, 9, 9, 5]]
 const real_another_array = another_array.flat(Infinity) // all array in one array

 console.log(real_another_array);


 console.log(Array.isArray("Ranjan"));
 console.log(Array.from("Ranjan"));// converting into array
 console.log(Array.from({name:"Ranjan"})); // it will give empty array
 
 let score1 = 100
 let score2 = 200
 let score3 = 300
  console.log(Array.of(score1, score2, score3));//.of also make things in array
  
