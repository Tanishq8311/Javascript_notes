// const decripter=Object.getOwnPropertyDescriptor(Math, "PI")
// console.log(decripter);

const chai = {
    name:'ginger',
    price: 250,
    isAvailable: true
}
console.log(Object.getOwnPropertyDescriptor(chai,'name'));
Object.defineProperty(chai,'name',{
    writable:false,
    enumerable: false
})
console.log(Object.getOwnPropertyDescriptor(chai,'name'));
