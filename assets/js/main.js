let roundResult=document.getElementById('rounds-result')
let roundMin=document.getElementById('rounds-min')
let roundsMax=document.getElementById('rounds-max')
let number=document.getElementById('number')
let result=document.getElementById('result')
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
           number.onkeyup = function () {
            
               roundsMax.innerHTML=number.value
           }
        
         }
         return valuee;
       }
    //    x = Math.floor(Math.random() * 100);
    //    console.log(x);
    result.addEventListener("click" , () =>{
           x = Math.floor(Math.random() * 100);
       console.log(x);
       for (let index = 0; index <= manyRunde(); index++) {
        //    console.log(index);
           roundMin.innerHTML = index++;
       }
    })
    