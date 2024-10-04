// const tinderuser = new Object()  //this is singleton object
const tinderUser={}
tinderUser.id="123abc"
tinderUser.name = "tanishq"
tinderUser.isLoggedIn=false

// console.log(tinderUser);

const regularUser={
    email:"somme@gmail.com",
    fullname:{
        userfullname:{
            firstname:"tanishq",
            lastname:"gupta"
        }
    }
}

// console.log(regularUser.fullname.userfullname.lastname);

const obj1={
    1:"a",
    2:"b"
}
const obj2={
    3:"a",
    4:"b"
}

// const obj3 = {obj1,obj2}
// conct 2 objects
// const obj3= Object.assign({},obj1,obj2)

// const obj3={...obj1,...obj2} spread
// console.log(obj3);

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// // to check if object has this property or not
// console.log(tinderUser.hasOwnProperty('isLogged'));

// destructuring
const course  = {
    coursename:"js in hindi",
    price:"999",
    courseinstructor:"tanishq"
}
// const {courseinstructor: instructor,price} = course
// console.log(instructor);





