const marvel_heros= ['Ironman', 'Spiderman', 'Thor', 'Hulk']
const dc_heros= ['Batman', 'Superman', 'Wonderwoman', 'Flash']

// marvel_heros.push(dc_heros);
// console.log(marvel_heros[3]);
 
//Concat method

//  const Allheros = marvel_heros.concat(dc_heros);
// console.log(marvel_heros);// it will not add the dc_heros to the marvel_heros array

//Spread operator
  
// const All_newHeros =[...marvel_heros, ...dc_heros];
// console.log(All_newHeros);

//Slice method

// const another_Heros= (marvel_heros.slice(1,3));
// console.log(another_Heros);

//Array.of method
let score1 = 100
let score2 = 200
let score3 = 300

 console.log(Array.of(score1, score2, score3));
