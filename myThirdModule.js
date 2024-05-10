// Export multiple things
function calcSub(p1,p2)
{
    return p1-p2;
}
function calcMul(p1,p2)
{
    return p1*p2;
}
function calcDiv(p1,p2)
{
    return p1/p2;
}

// Using module.exports --export one thing; thing - var or function or object
module.exports={
    calcDiv:calcDiv,
    calcMul:calcMul,
    calcSub:calcSub
}