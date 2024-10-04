let mydate =  new Date()
// console.log(mydate.toDateString());
// console.log(mydate.toISOString());
// console.log(mydate.toJSON());
// console.log(mydate.toLocaleString());

// let d = new Date(2023,0,23)
// let d = new Date(2023,0,23,5,3)
let d = new Date("2023-01-14")
// console.log(d.toLocaleString());

let timeStamp= Date.now()
console.log(Math.floor(timeStamp/1000));

let x = new Date()
console.log(x.getDay());
console.log(x.getMonth()+1);

console.log(x.toLocaleString('default',{
    weekday : "short"
}))
