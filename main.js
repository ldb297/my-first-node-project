// const myModule = require("./myModule");
// const myOtherModule = require("./myOtherModule");
// const myThirdModule = require("./myThirdModule");
// console.log("hello world");

// Hello = (name)=>{
//     console.log(`Hello, ${name}`);
// }

// Hello("Leo");

// console.log(myModule.add(2,2));
// console.log(myModule.subtract(2,1));
// myOtherModule.welcomeToNode();
// console.log(myThirdModule.mult(3,3));

// const fs = require("fs");
const moment = require("moment");
moment.suppressDeprecationWarnings = true;

// fs.readFile("nfl.txt", "utf8", function(error, data){
//     if (error){
//         console.log(`You have a problem reading this file`);
//     } else {
//         console.log(data);
//     }
// });

let myDate = moment("2021-2-01");
let addOneWeek = myDate.add(1, "week");
console.log(myDate.format("MM/DD/YYYY"));