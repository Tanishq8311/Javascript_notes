// function

// function fun(){
//     console.log("hello world")
// }
// fun()

// function add(number1,number2){ //parameters=number1,number2
//     console.log(number1+number2)
// }

function add(number1,number2){ //parameters=number1,number2
    let res=number1+number2
    return res
}
const res=add(4,3); //arguments = 4,3
// console.log(res);

function loginUserMessage(username){
    if(!username){
        console.log("please enter a username")
        return;
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("tanishq"))
// console.log(loginUserMessage())

// ... - rest operator/spread operator
function calculateCartPrice(...num1){
    return num1;
}
// console.log(calculateCartPrice(200,400,500,600));

const user={
    username:"tanishq",
    prices:199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

// handleObject(user)
handleObject({
    username:"Sam",
    price:399
})