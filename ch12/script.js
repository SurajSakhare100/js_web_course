//promises
// console.log("hello");
// let promise=new Promise(function(resolve, reject){
    // alert('i am aleat in promise')
    // reject(97);
    // resolve(56);
// });
// console.log(promise);

//fetch google=>alert("google get")
//fetch data api
//fetch yt
//fetch picture
//print downloading
//rest of script

// let promise1=new Promise(function(resolve, reject){
//     setTimeout(() => {
//         resolve("success")
//         // reject("fell")
//     }, 4000);
// });
// promise1.then((value)=>{
// console.log(value)
// let promise2=new Promise(function(resolve, reject){
//    setTimeout(() => {
//     resolve("i am done")
//    }, 2000); 
// })
// return promise2;
// }).then((value)=>{
//     console.log(value);
//     console.log("we are done");
// })

//loadscript function using promise

// function loadScript(src){
//      return new Promise((resolve, reject) => {
//          let script=document.createElement("script");
//          script.src=src;
//          document.head.appendChild(script);
//          script.onload=function(){
//              resolve(1)
//          }
//          script.onerror=function(){
//             reject(new Error("error found"))
//     }});
// }
// let p=loadScript("https://cdn.sdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" )
// p.then(()=>{
// alert("well done")
// });
// p.catch((error)=>{
//     console.log("we are sorry");
// });

// let p=new Promise((resolve, reject) => {
//     resolve(2)
// });
// p.then(()=>{
//     return 4
// }).then((value)=>{
//     console.log("hello"+value);
// })
// p.then((value)=>{
//  console.log("bye")+value;
// })