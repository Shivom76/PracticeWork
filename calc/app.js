let string="";

console.log("page was neww")

const display=document.getElementsByClassName("disp")
let btnAll=document.querySelectorAll(".btn");
let input =document.querySelector("input")


Array.from(btnAll).forEach(btn=>{
    btn.addEventListener("click",(e)=>{
        val=btn.innerText
        console.log(e.target.innerText);


        if(val=="="){
            string=eval(string)
            input.value=string
        }
        else{
            string+=val
            input.value=string;
        }
        
        if(val==="AC"){
            input.value=0
            string=0
        }
    })
})



// let errorDiv=document.getElementsByClassName("errorDiv")
// let errBtns=document.queruSelectorAll("error-btn");

// Array.from(errBtns).forEach((errBtn)=>{
//     errBtn.addEventListener("click",()=>{
//         errorMsg.classList.remove("hidden");

//         // Restart animation (to allow re-trigger)
//         errorDiv.classList.remove("errorDiv"); // remove class
//         void errorDiv.offsetWidth;             // force reflow
//         errorDiv.classList.add("errorDiv");    // re-add class
//     })
// })

// setTimeout(() => {
//     errorDiv.classList.add("hidden");
//   }, 3000);






// const operators=["/" , "X" , "-" , "+"]

// let firstNum=null;
// let operator=null;
// let shouldReset=false;



//         if(!isNaN(val)){
//             if(display.innerText==="0" || shouldReset){
//                 display.innerText=val;
//                 shouldReset=false;
//             }
                
//             else{
//                 display.innerText+=val
//             }
//         }

//         else if (operators.includes(val) ){
//             let current=display.innerText; 

//             if(current && !operators.includes(current.slice(-1))){
//                 display.innerText+=val
//                 opt=val;
//             }
//         }
//         if(val==="="){
//             if (firstNum && operator ){
//                 display.innerText=calc();
//                 let present=display.innerText;
//                 pre1=present.split(opt);
//                 console.log(pre1)
//             }
           
//         }
        
//         console.log(display.innerText)
//     })
// })


// let a,b;
// calc=(a,b,opt)=>{
//     if(opt==="+"){
//         return a+b
//     }
//     if(opt==="-"){
//         return a-b
//     }
//     if(opt==="X"){
//         return a*b
//     }
//     if(opt==="/"){
//         if (b!="0"){
//             return a/b
//         }
//         else{
//             return "Error";
//         }
//     }
// }
