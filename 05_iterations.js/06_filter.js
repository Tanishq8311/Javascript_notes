// filter method is used to filter out the elements from an array based on a condition. It returns a new array with the elements that satisfy the condition.
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const value = myNums.filter((num) => {
    return num % 2 === 0;
});
// console.log(value);

const newNums=[]
myNums.forEach((num)=>{
    if(num%2===0){
        newNums.push(num)
    }
})
// console.log(newNums);

