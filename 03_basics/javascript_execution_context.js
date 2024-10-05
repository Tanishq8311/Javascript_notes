// javascript execution context
/**
 * 1. global execution context - {}
 * 2. functional execution context
 * 3. eval execution context
 */

/**
 * memory creation phase
 * execution phase
 */

let val1=10
let val2=5
function addNumbers(a,b){
    let sum = a+b
    return sum
}

let res1=addNumbers(val1,val2)
let res2=addNumbers(20,30)
console.log(res1);
console.log(res2);

/**how this works
 * global execution context - this
 * memory creation phase - val1=undefined, val2=undefined, addNumbers=fn,res1=undefined,res2=undefined
 * execution phase - val1=10, val2=5, addNumbers=fn, res1=15, res2=50
 */

