let myName="tanishq    "
function trueLength(name){

}
// console.log(myName.trueLength);

let myHero = ["thor","spiderman"]
let heroPower = {
    thor:"hammer",
    spiderman:"sling",

    getSpiderPower:function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}
Object.prototype.tanishq=function(){
    console.log(`hitesh is present in all objects`);
    
}
// heroPower.tanishq()
// myHero.tanishq()

// inheritance
const user = {
    name:"chai",
    email:"chai@google.com"
}
const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}
const TASupport = {
    makeAssignment:'JS Assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__=user

// modern syntax
Object.setPrototypeOf(TeachingSupport,Teacher)

let anotherusername="tanishqgupta   "
String.prototype.trueLength= function(){
    console.log(`true length is : ${this.trim().length}`); 
}

anotherusername.trueLength()