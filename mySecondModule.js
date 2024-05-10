// import a custom module -- pass a relative path; no need of extension if its a js file
var calcSum=require("./myFirstModule");
// requiring a module -- execute that module ; console.log will get displayed, function calls will happens
var n1=20,n2=30;

var res=calcSum(n1,n2);
console.log(`Result of sum of numbers ${n1} and ${n2} is ${res} `);
//console.log("I =",i);// error cls

var {calcDiv}=require("./myThirdModule");
var res1=calcDiv(10,2);
console.log("Division of 2 numbers",res1);
