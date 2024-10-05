// (IIFE) immmediately invoked function expression
// to reduce global space pollution
// (defintion)(execution)
(function fun1() {
    console.log('fun1');
})();
// arroe function
((name)=> {
    console.log(`fun2, ${name}`);
})('tanishq');

