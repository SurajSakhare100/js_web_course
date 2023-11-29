const loadscript=async(src)=>{
    return new Promise((resolve, reject) => {
        let script=document.createElement("script")
        script.src=src;
        document.head.appendChild(script)
        script.onload(
        resolve(alert("script loaded: "+src)))
    });
}
const mainc=async ()=>{
    console.log(new Date().getSeconds());
    let a=await loadscript("https://cdn.sdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js")
    console.log(a);
    console.log(new Date().getSeconds());
}
mainc();
q2

const a= async()=>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return reject(new Error("rejection buri cheez hai!!"))
        }, 3000);
    });
}
const mainc=async ()=>{
        try {
            let b= await a();
            console.log(b);
        }
catch (error) {
    console.log(error);
}}
mainc();

let p1=async()=>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(3)
        }, 3000);
    });
}
let p2=async()=>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(2)
        }, 1000);
    });
}
let p3=async()=>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(1)
        }, 2000);
    });
}
let b=async()=>{
    console.time("time");
    let a1=await p1()
    console.log(a1);
    let a2=await p2()
    console.log(a2);
    let a3=await p3()
    console.log(a3);
    console.timeEnd("time");
}
b();
