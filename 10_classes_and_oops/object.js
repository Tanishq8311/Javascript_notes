function multiplyBy5(num){
    return num*5;
}
multiplyBy5.power=2
// console.log(multiplyBy5.power);
// console.log(multiplyBy5.prototype);

function createUser(username,score){
    this.username = username
    this.score=score
}

createUser.prototype.increment=function(){
    this.score++ //jis matlab this 
}
createUser.prototype.printMe=function(){
    console.log(`price is ${this.score}`);
}
const chai =new createUser("chair",25)
const tea =new createUser("tea",250)

// chai.increment()
// chai.printMe()
 
/*
A new object is created : the new keyword initiates the creation of a new javascript object.
A prototype is linked: the newly created object gets linked to the prototype property of the constructor function
 This means that it can access to properties and methods defined on the constructor's prototype
The contructor is called 
The new object is returned
*/