const form=document.querySelector("form")

form.addEventListener('submit',function(e){
    e.preventDefault()  //stops default value
    const height = parseInt(document.querySelector('#height').value)  
    const weight = parseInt(document.querySelector('#weight').value)  
    const results = document.querySelector('#results')   
    if(height==='' || height<0 || isNaN(height)){
        results.innerHTML = "Please give a valid height"
    }else if(weight==='' || weight<0 || isNaN(weight)){
        results.innerHTML = "Please give a valid weight"
    }else{
        const bmi = (weight/((height*height)/10000)).toFixed(2)
        if(bmi<18.6){
            results.innerHTML=`You are underweight:${bmi}`
        }else if(bmi>24.9){
            results.innerHTML=`You are overweight:${bmi}`
        }else{
            results.innerHTML=`You are normal:${bmi}`
        }
    }

})
