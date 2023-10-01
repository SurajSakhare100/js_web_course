let c= Math.floor(Math.random()*3)
let arr=["s","g","w"];
let a=arr[c];
console.log(a);
let b=prompt("enter s g w");
let match =(a,b)=>{
    if(a==="s"&&b==="s"){
        return "match draw no one is winner";
        }
    else if(a==="g"&&b==="s"){
        return "comp";
        }
    else if(a==="w"&&b==="s"){
        return "user";
        }
    else if(a==="g"&&b==="g"){
        return "match draw no one is winner";
        }
    else if(a==="w"&&b==="g"){
        return  "comp";
        }
    else if(a==="s"&&b==="g"){
        return  "user";
        }
    else if(a==="w"&&b==="w"){
        return "match draw no one is winner";
        }
    else if(a==="s"&&b==="w"){
        return "comp";
        }
    else if(a==="g"&&b==="w"){
        return "user";
        }
    else{
        return "invalid";
        }
}
let result=match(a,b);
document.write(`cpu: ${a} player: ${b} \n winner is:${result}`)
