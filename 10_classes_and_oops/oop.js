// Object Literal
const user={
    username:"tanishq",
    loginCount:8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from database");
        console.log(`Username: ${this.username}`); //this
    }
     
}

// console.log(user.getUserDetails());

// constructor
function User(username, loginCount, isLoggedIn){
    this.username=username
    this.loginCount-loginCount
    this.isLoggedIn=isLoggedIn

    this.greeting=function(){
        console.log(`Welcome ${this.username}`);
        
    }
    return this
}

const userOne=new User("tanishq",8,true); //new keyword - new object is created, constructor function call hota hai, arguments inject ho jaate  hai, return hojaate hain
console.log(userOne);
