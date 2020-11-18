let roundResult=document.getElementById('rounds-result')
let roundMin=document.getElementById('rounds-min')
let roundsMax=document.getElementById('rounds-max')
let custom_num=document.getElementById('cust-number')
let number=document.getElementById('number')
let result=document.getElementById('result')
let text = document.getElementById('text')
mall = 0
x = Math.floor(Math.random() * 100 ) +1;
let i = 0
let form = document.getElementById('show')
 


const manyRunde = () => {
    let round4 = document.getElementById("four");
   let round5 = document.getElementById("five");
   let round6 = document.getElementById("six");
   let custom = document.getElementById("custom");
   valuee=0
       if (round4.checked) {
           valuee=4
           roundsMax.innerHTML=4
       }else if (round5.checked) {
           valuee = 5;
           roundsMax.innerHTML=5
         } else if (round6.checked) {
           valuee = 6;
           roundsMax.innerHTML=6
         } else if (custom.checked) {
            valuee =0 ;
            custom_num.onkeyup = function () {
            
               roundsMax.innerHTML=custom_num.value
           }
        
         }
         return valuee;
       }
       
       result.addEventListener("click" , () =>{
           
        //    let mall = 0
        
        // number.value= text.innerHTML
        
        console.log(x);
        roundsMax.innerHTML = manyRunde();
        ++mall;
        if (mall < manyRunde()) {
            roundMin.innerHTML = mall;
        } else if (mall <= manyRunde()) {
            roundMin.innerHTML = mall++;

        }
        custnumber = custom_num.value
        usernumber=number.value
        
        
        if (usernumber == x) {
            
            text.innerHTML += `<h3>Congratulatios! You won after  rounds. <a href="index.html">Play again!</a></h3>`
        } else if (mall >= custnumber) {
            text.innerHTML += `<h3>Sorry, you lost. Your number was . <a href="index.html">Play again!</a></h3>`
        } else if (usernumber > x) {
            text.innerHTML += `<h3>. You need to guess lower than .</h3>`
        } else {
            text.innerHTML += `<h3>. You need to guess higher than .</h3>`
        }

})
    //    x = Math.floor(Math.random() * 100);
    //    console.log(x);
    // {
    //        x = Math.floor(Math.random() * 100);
    //    console.log(x);
       
    //    for (let index = 1; index <= manyRunde(); index++) {
    //     //    console.log(index);
    //        roundMin.innerHTML = ++index;
    //    }
    // })
    
    