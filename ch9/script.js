// let c= Math.floor(Math.random()*3)
// let arr=["s","g","w"];
// let a=arr[c];
// console.log(a);
// let b=prompt("enter s g w");
// let match =(a,b)=>{
//     if(a==="s"&&b==="s"){
//         return "match draw no one is winner";
//         }
//     else if(a==="g"&&b==="s"){
//         return "comp";
//         }
//     else if(a==="w"&&b==="s"){
//         return "user";
//         }
//     else if(a==="g"&&b==="g"){
//         return "match draw no one is winner";
//         }
//     else if(a==="w"&&b==="g"){
//         return  "comp";
//         }
//     else if(a==="s"&&b==="g"){
//         return  "user";
//         }
//     else if(a==="w"&&b==="w"){
//         return "match draw no one is winner";
//         }
//     else if(a==="s"&&b==="w"){
//         return "comp";
//         }
//     else if(a==="g"&&b==="w"){
//         return "user";
//         }
//     else{
//         return "invalid";
//         }
// }
// let result=match(a,b);
// document.write(`cpu: ${a} player: ${b} \n winner is:${result}`)

// game of chance
// 
let c= Math.floor(Math.random()*3)
let arr=["s","p","sc"];
let a=arr[c];
console.log(a);
let b,result;
var score=0;
let stone =document.getElementById("STONE");
let paper =document.getElementById("PAPER");
let scissor=document.getElementById("SCISSOR");
let winner=document.getElementById("win_box");
let scores=document.getElementById("score");
let replay=document.getElementById("replay");
let restart=true;
let stone_check=(a)=>{
    if(a=="sc"){ 
        score++;
        scores.innerText=score;
        return "user"
    }
    else if(a=="p"){
        return "comp";
    }
    else {
        return "match draw no one";
    }
}
let paper_check=(a)=>{
    if(a==="s"){
        score++;
        scores.innerText=score;
        return "user";
    }
    else if(a==="sc"){
        return "comp";
        }
    else {
        return "match draw no one";
    }
}
let scissor_check=(a)=>{
    if(a==="p"){
        score++;
        scores.innerText=score;
        return "user";
    }
    else if(a==="s"){
        return "comp";
        }
    else {
        return "match draw no one";
    }
}
let chance=true;

stone.addEventListener("click",()=>{
    if(chance){
    b="s";
    result=stone_check(a);
    winner.innerText=result +" is winner"
    chance=false;
    }
})
paper.addEventListener("click",()=>{
    if(chance){
    b="p";
    result=paper_check(a);
    winner.innerText=result +" is winner"
    chance=false;
    }
})
scissor.addEventListener("click",()=>{
    if(chance){
    b="sc";
    result=scissor_check(a);
    winner.innerText=result +" is winner"
    chance=false;
    }
})


