console.log("My first module");
var i=10;
i++;
console.log("Value of i",i);
function calcSum(p1,p2)
{
    return p1+p2;
}
var result=calcSum(10,20);
console.log("Result of function call",result);
// export the stuff which is required in other modules
// exporting a function definition
module.exports=calcSum;

// all variables and funtion declarations(other than those exported) are local to module 
