// for of loop
let array = [1,2,3,4,5,6,7,8,9,10];
for(const element of array){
    // console.log(element);
}

const greetings="hello World!"
for(const greet of greetings){
    // console.log(greet);
}

// maps
const map=new Map()
map.set('IN',"India")
map.set('US',"United States")
map.set('UK',"United Kingdom")

// console.log(map);

for (const [key,value] of map) {
    // console.log(`${key} and ${value}`);
}

const myObject = {
    "game1": "Cricket",
    "game2": "Football",
    "game3": "Basketball"
}

// for(const [it] : myObject){

// }

// for in loop - keys aati h iske andar
for (const key in myObject) {
    // console.log(`${key} and ${myObject[key]}`);
}

const progrmming=["Java","Python","JavaScript","C++"]
for(const index in progrmming){
    // console.log(progrmming[index]);
}

