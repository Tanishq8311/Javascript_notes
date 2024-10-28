const randomColor=function(){
    const hex="0123456789ABCDEF"
    let color='#'
    for(let i=0;i<6;i++){
        color+=hex[Math.floor(Math.random()*16+1)]
    }
    return color
}
let intervalId;
const startChanging=function(){
    if(!intervalId){
        intervalId=setInterval(changeBG,1000)
    }
    function changeBG(){
        document.body.style.backgroundColor=randomColor()
    }
}
const stopChanging=function(){
    if(intervalId){
    clearInterval(intervalId)
    intervalId=null
    }
}
document.getElementById('start').addEventListener('click',startChanging)
document.getElementById('stop').addEventListener('click',stopChanging)