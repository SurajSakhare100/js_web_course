// ADVANCED JAVA SCRPIT
// let rating=document.getElementById('rating');
// let form=document.getElementById('form');
// class generatePassword{

//     passwordRating(input){
//         function containsNumbers(str) {
//             return Boolean(str.match(/\d/));
//           }
//         let containsNumber= containsNumbers(input)
//         if(input=='password' ||input=='hello' ||input== 'password123' || input=='user123' || input== 'xyz'){
//             rating.innerText='funny password'
//             console.log(input);
//         }
//         else if((input.includes('@')) && (input.charAt(0).toUpperCase()== input.charAt(0))&& containsNumber){
//             rating.innerText='very strong password'
//             console.log(input);
//         }
//         else if((input.includes('@'))||input.charAt(0).toUpperCase()== input.charAt(0) || containsNumber){
//             rating.innerText='strong password'
//             console.log(input);
//         }
//         else{
//             rating.innerText='good password'
//             console.log(input);
//         }
//     }
// }
// let p=new generatePassword();
// form.addEventListener('submit',(e)=>{
//     e.preventDefault()
//     let input=document.getElementById('input').value;
//     p.passwordRating(input);
// })

// IIFE

// const a=()=>{
//  return new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('abc')
//   }, 1000);
// });
// }
// let d=12;
// console.log(d);
// (async()=>{
//  let b=await a();
//  console.log(b);
//  let c=await a();
//  console.log(c);
//  let d=await a();
//  console.log(d);
// })()

// Destrucring

// let arr=[12,6,34,5,6,43,7,4,11]
// let [a,b,,d,...rest]=arr;
// console.log(a,b,d,rest);

// let obj={h:'blur',d:'getComputedStyle'}
// let {h,d}=obj;
// console.log(h,d);

//

// let ar1=[12,3,4];
// let obj={...ar1}
// console.log(obj);

// let o1={
//     name:'daly',
//     job:'driver',
//     add:'xyz123'
// }
// console.log({s_name:'roy',...o1});

// console.log(b);
// console.log(a);
// console.log(c);
// var b=3;
// let a=9;
// const c=8;

// function c(){
//     var name='message'
//     function d(){
//         console.log(name);
//     }
//     name='f'
//     name='f'
//     name='f3'
//     return d
// }
// let q=c();
// q()

// function a(){
//     var name='asg'
//     function b(){
//         console.log(this);
//     }
//     b()
// }
// a()

// const a=async (text,n)=>{
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//            resolve(text);
//         }, 1000*n);
//     });
// }
// (async ()=>{
//     let t=await a('hello',2);
//     console.log(t);
//     let p=await a('world',3);
//     console.log(p);
// })()

// const source = document.querySelector("div.source");

// source.addEventListener("copy", (event) => {
//   const selection = document.getSelection();
//   event.clipboardData.setData("text/plain", selection.toString().toUpperCase());
//   event.preventDefault();
// });
var audio=new Audio('https://freesound.org/data/previews/316/316847_4939433-lq.mp3')
let form =document.getElementById('form')
let timer =document.getElementById('timer')
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    setTimeout(() => {
            audio.play();
            console.log('object');
    }, 1000);
})
