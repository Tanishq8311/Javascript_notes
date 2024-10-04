// singleton - ek hi object hai
// Object.create

// object literals -can define key and value both

const mySymm = Symbol("key1")
const JsUser={
    name:"tanishq",
    [mySymm]:"mykey1",
    age:"20",
    location:"jaipur",
    email:"tanishq@gmail.com",
    isLoggedIn:false
}

//these 2 methods to access objects 
// console.log(JsUser.age) // used when key is in json format
// console.log(JsUser["age"]) // used when key is in string format
// console.log(JsUser[mySymm]); //used to print symbol

// change the value
// JsUser.email = "tanishq123@gmail.com"

// will freeze the value 
// Object.freeze(JsUser) 


//call a funnction 
// JsUser.greeting = function(){
//     console.log("hello js user");
    
// }
// console.log(JsUser.greeting());
 
// JsUser.greeting2 = function(){
//     console.log(`hello js user, ${this.name}`);
    
// }
// console.log(JsUser.greeting2());