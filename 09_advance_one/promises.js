// const promiseOne=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log('Async task is complete');
//         resolve()
//     },1000)
// })  
// promiseOne.then(function(){
//     console.log('Promise Consumed');
// })

// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Async task 2");
//         resolve()
//     },1000)
// }).then(function(){
//     console.log("Async 2 resolved");   
// })

// const promiseThree=new Promise(function(resolve,reject){
//     setTimeout(function(){
//     resolve({username:"Tanishq",email:"tanishqgupta8311@gmail.com"})
//     },1000)
// })
// promiseThree.then(function(user){
//     console.log(user);
// })

// const promiseFour=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error=false;
//         if(!error){
//             resolve({username:"tanishq"})
//         }else{
//             reject("ERROR: Soemthing went wrong")
//         }
//     },1000)
// })
// promiseFour
// .then(function(user){
//     console.log(user);
//     return user.username
// })
// .then((username)=>{
//     console.log(username);
    
// })
// .catch(function(err){
//     console.log(err);
    
// })
// .finally(()=>{
//     console.log("Finally promise is resolved or rejected");
    
// })

// const promiseFive=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error=true; //check for true or false
//         if(!error){
//             resolve({username:"javascript"})
//         }else{
//             reject("ERROR: JS went wrong")
//         }
//     },1000)
// })

// async function handlePromiseFive(){
//     try {
//         const response = await promiseFive
//         console.log(response);
//     } catch (err) {
//         console.log(err);
//     }
// }

// handlePromiseFive()

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://api.github.com/users/Tanishq8311')
//         // console.log(response);
//         const data = await response.json()
//         console.log(data);
//     } catch (err) {
//         console.log(err);
//     }
// }

// getAllUsers()

fetch ('https://api.github.com/users/Tanishq8311')
.then((res)=>{
    return res.json()
})
.then((data)=>{
    console.log(data);
    
})
.catch((err)=>{
    console.log(err); 
})