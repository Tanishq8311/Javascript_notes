// use of this -> refers to current context
const user = {
    username:"tanishq",
    price:999,
    welcomeMessage: function(){
        console.log(`${this.username} ,welcome to website`);
        console.log(this);
        
    }
}

// user.welcomeMessage()
// user.username ="tan"
// user.welcomeMessage()

// console.log(this); //window object

// can't use this in function
// function fun(){
//     let username="hitesh"
//     console.log(this.username);
// }
// fun()

// this-> cannot be used in arrow function as well as normal function
// const fun = () => {
//     let username="tanishq"
//     console.log(this.username);
// }
// fun() //window object

// arrow function
// const addTwo=(num1,num2)=>{
//     return num1+num2
// }

// implicit return
// curly braces mein wrap kiya to return statement likhna padega
// bracket nahi lagaya to return statement nahi likhna padega 
// const addTwo=(num1,num2)=>num1+num2
// const addTwo=(num1,num2)=>(num1+num2)
// console.log(addTwo(5,6)); //11


// const arr = [1,2,3,4,5]
// arr.forEach((num)=>{
//     console.log(num);
// })