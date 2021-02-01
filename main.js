const myModule = require("./myModule");
const myOtherModule = require("./myOtherModule");
const myThirdModule = require("./myThirdModule");
console.log("hello world");

Hello = (name)=>{
    console.log(`Hello, ${name}`);
}

Hello("Leo");

console.log(myModule.add(2,2));
console.log(myModule.subtract(2,1));
myOtherModule.welcomeToNode();
console.log(myThirdModule.mult(3,3));