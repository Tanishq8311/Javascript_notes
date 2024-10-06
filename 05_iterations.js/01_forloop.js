// for loop
// for(let i=0;i<5;i++){
//     if(i==3){
//         console.log("Reached 5");
//     }
//     console.log(i);
// }

// for (let i = 0; i < 10; i++) {
//     console.log(i);
//     for (let j = 0; j < 5; j++) {
//         console.log(j);
//     } 
// }

let array = [1,2,3,4,5,6,7,8,9,10];
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    // console.log(element);    
}

// break and continue keywords
// for(let i=1;i<=20;i++){
//     if(i==5){
//         console.log("Reached 5");
//         break;
//     }
//     console.log(`value of i is ${i}`);
// }

// break and continue keywords
for(let i=1;i<=20;i++){
    if(i==5){
        console.log("Reached 5");
        continue;
    }
    console.log(`value of i is ${i}`);
}

