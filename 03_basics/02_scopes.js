var c = 300
let a=300
// this is block scope
// if(true){
//     let a = 10
//     const b =20
//     var c = 30
//     console.log(a)
// }
// console.log(a); //300 is printed because of var because its scope is outside the block

function one(){
    const username = "tanishq"
    function two(){
        const website = "youtube"
        console.log(username); //will work
        
    }
    // console.log(website); //will give error
    two()
}
one()

if(true){
    const a="hitesh"
    if(a==="hitesh"){
        const web=" youtube"
        console.log(a + web)
    }
}

// +++++++++++interesting+++++++ 
// hoisting
addOne(5)
function addOne(num){
    return num+1;
}

const addTwo=function(num){
    return num+2;
}

const addThree = function(num){
    return num + 3;
}

addTwo(5)