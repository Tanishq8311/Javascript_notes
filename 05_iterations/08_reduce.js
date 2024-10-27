// reduce is a function that takes an array and reduces it to a single value
const myNums=[1,2,3]
// const myTotal = myNums.reduce(function(acc,curval){
//     console.log(acc,curval);
//     return acc+curval;
// },0)

const myTotal=myNums.reduce((acc,curval)=>acc+curval,0)
// console.log(myTotal);
const myCart=[
    {
        item:"milk",
        price:20
    },
    {
        item:"bread",
        price:10
    },
    {
        item:"butter",
        price:30
    }
]

const price=myCart.reduce((acc,item)=>acc+item.price,0)
console.log(price);
htAJpq929554