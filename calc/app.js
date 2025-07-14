console.log("page was neww")

const display=document.getElementById("displayDiv")
let btnAll=document.querySelectorAll(".btn");
const operators=["/" , "X" , "-" , "+"]

let firstNum=null;
let operator=null;
let shouldReset=false;


btnAll.forEach(btn=>{
    btn.addEventListener("click",()=>{
        val=btn.innerText


        if(val==="AC"){
            display.innerText=0
            firstNum=null;
            operator=null;
            return;
        }

        if(!isNaN(val)){
            if(val==="0" || shouldReset){
                display.innerText=val;
                shouldReset=false;
            }
                
            else{
                display.innerText+=val
            }
        }

        else if (operators.includes(val) ){
            let current=display.innerText; 

            if(current && !operators.includes(current.slice(-1))){
                display.innerText+=val
                opt=val;
            }
        }
        if(val==="="){
            if (firstNum && operator ){
                display.innerText=calc();
                let present=display.innerText;
                pre1=present.split(opt);
                console.log(pre1)
            }
           
        }
        
        console.log(display.innerText)
    })
})


let a,b;
calc=(a,b,opt)=>{
    if(opt==="+"){
        return a+b
    }
    if(opt==="-"){
        return a-b
    }
    if(opt==="X"){
        return a*b
    }
    if(opt==="/"){
        if (b!="0"){
            return a/b
        }
        else{
            return "Error";
        }
    }
}

