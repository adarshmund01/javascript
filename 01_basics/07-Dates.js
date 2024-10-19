const mydata = new Date
// console.log(mydata.toString());
// console.log(mydata.toISOString())
// console.log(mydata.toJSON())
// console.log(mydata.toLocaleString())
// console.log(mydata.toLocaleTimeString())

const mynewData = new Date(2014 , 0 ,13)
// console.log(mynewData.toDateString());

const myTimeData = new Date(2014 , 0 ,13,3 , 13) // it will time along with date
// console.log(myTimeData.toLocaleString());

//how to get it in DD/MM/YY
const mynewDataformat = new Date("2024-01-13")
//console.log(mynewDataformat.toLocaleString());

//TimeStamp

let myTimeStamp = Date.now() // date is a object
//console.log(myTimeStamp);

//console.log(mynewDataformat.getTime());
console.log(Math.floor(Date.now()/1000)); //with secound








// 0 - contains month here 
// day is comes autometacally