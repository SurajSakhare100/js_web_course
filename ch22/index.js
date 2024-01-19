// class complex{

//     // constructor(real,img){
//     //     this.real=real;
//     //     this.img=img;
//     // }
//     display(){
//         console.log(this.real+" + "+this.img+"i");
//     }
//     add(){
//         let add=new complex(0,0);
//         add.real=num1.real+num2.real;
//         add.img=num1.img+num2.img;
//         add.display();
//     }
//     sub(){
//         let sub=new complex(0,0);
//         sub.real=num1.real-num2.real;
//         sub.img=num1.img-num2.img;
//         sub.display();
//     }
//     get complexpart(){
//         return this.real;
//     }
//     set complexpart(real){
//         this.real=real
//     }
//     get complexpart(){
//         return this.img;
//     }
//     set complexpart(img){
//         this.img=img
//     }
// }
// let num1=new complex();
// let num2=new complex();
// num1.real=15;
// num1.img=24;
// num2.real=5;
// num2.img=9;

// num1.add();
// num1.sub();

// let obj={
//     name:"suraj",
//     class:14,
//     roll_no:25048
// }
// let arr=[1,2,3,10,5];
// let a="hello";
// for (const key in obj) {
//     console.log(obj[key]);
// }

// for (const iterator of a) {
//     console.log(iterator);
// }

// const sum=(a,b)=>{
//     let c=a+b;
//     return c;
// }

// console.log(sum(9,3));

// console.log(typeof(arr));
// console.log(arr.toString());
// console.log(arr.join(" "));
// console.log(arr.push(6));
// console.log(arr.push(7));
// console.log(arr.pop());
// console.log(arr.push(8));
// console.log(delete arr[1]);
// console.log(arr.join(" "));
// console.log(a.slice(1,2));
// console.log(arr.slice(1,4));
// console.log(arr.splice(1,2,"hello","bye"));
// console.log(arr.reverse().join(" "));
// arr.forEach((e)=>{
//     console.log(e);
// })

// const newArr=arr.map((value)=>{
//     return value*value;
// })
// function iseven(num){
//     return num%2==0;
// }
// console.log(arr.join(" "));
// const result=arr.filter((i)=>i==2);
// console.log(result.join(" "));
// console.log(arr.join(" "));
// console.log(arr.filter(iseven));
// console.log(newArr.join(" "));
// let m=0;
// const r=arr.reduce((p,n)=>Math.max(p,n));
// console.log(r);
// console.log(m==0);
// setInterval(() => {
//     setTimeout(() => {
//         box.classList.toggle('red')
//         box.classList.toggle('yellow')
//     }, 500);
//     setTimeout(() => {
//         box.classList.toggle('yellow')
//         box.classList.toggle('green')
//     }, 1000);
//     setTimeout(() => {
//         box.classList.toggle('green')
//         box.classList.toggle('red')
//     }, 1500);
// }, 1500);

// let box =document.getElementById('box');
// box.addEventListener('click',(e)=>{
//     console.log(e.target);
//     console.log(e.clientX);
//     console.log(e.clientY);
// })
// function load(src,callback){
//     let script=document.createElement('script')
//     script.src=src;
//     script.onload=()=>{
//         callback(src);
//     }
//     document.head.append(script);
// }

// load('https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js',(src)=>{console.log(src);})

// let p= new Promise((resolve,reject) => {
//     let script=document.createElement('script')
//     let src='https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js';
//     script.src=src;
//     let data="hello";
//     script.onload = ()=> {
//         resolve("src : "+src)
//     };
//     document.head.append(script);
// });
// p.then((res)=>{console.log(res);})

// let promise=new Promise((resolve,reject)=>{
//     let src='https://www.google.com';
//     fetch((src)=>{
//         resolve(src);
//     })
//     console.log("my app:");
// })
// promise.resolve()
// try {
//     const a=2;
//     const b=0;
//     const c=a/b;
// } catch (error) {
//     console.log(error);
// }

// let p1=new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('hello1') ;
//     }, 4000);
// });
// let p2=new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject(new Error('i am funny')) ;
//     }, 2000);
// });
// let p3=new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('hello3') ;
//     }, 3000);
// });

// p1.then((value)=>console.log(value))
// p2.then((value)=>console.log(value))
// p3.then((value)=>console.log(value))
// let p=Promise.allSettled([p1,p2,p3]);
// p.then(value=>console.log(value));

// let pe=Promise.resolve('dfs');
// let pf=Promise.reject('dfs');
// pe.then((value)=>console.log(value))
// pf.then((value)=>console.log(value))

// async function hello(){
//     let p6= new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("27");
//         }, 3000);
//     });
//     let p7= new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("29");
//         }, 1000);
//     });
//     let pw=await p6;
//     let pg=await p7;
//     return [pw,pg]
// }
// console.log("welcome");
// let p=hello()
// p.then((value)=>console.log(value))
// function fun(){
//     try {
//         let i=prompt("i=");
//         i=Number.parseInt(i);
//         return
//         if(i>0){
//             throw new ReferenceError("i is not negative")
//         }
//     } catch (error) {
//         console.log(error.name);
//         console.log(error.message);
//         console.log(error.stack);
//         console.log([object]);
//     }
//     finally{
//         console.log("EFNEN");
//     }
// }
// fun()

// const fun = async()=>{
//     return new Promise((resolve, reject) => {
//         let script=document.createElement('script')
//         let src='https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js';
//         script.src=src;
//         script.onload=()=>{
//             resolve('scrpit load successfully!')
//         }
//         script.onerror=()=>{
//             reject(new Error())
//         }
//         document.head.appendChild(script)
//     });
// }
// let a=async ()=>{
// try {
//     let c= await fun()
//     console.log(c)
// } catch (error) {
//     console.log("error");
// }
// }
// a()

// const p1=async()=>{
//     return new Promise((resolve,reject)=>{
//        setTimeout(() => {
//         resolve("intilasing hack program")
//        }, 2000);
//     })
// }
// const p2=async()=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve("hacking program username")
//         }, 3000);
//     })
// }
// const p3=async()=>{
//     return new  Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve("username found ajay")
//         }, 2000);
//     })
// }
// const p4=async()=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve("found it!")
//         }, 1000);
//     })
// }

// let fun=async()=>{
//     let a= await p1();
//     console.log(a);
//     let b= await p2();
//     console.log(b);
//     let c= await p3();
//     console.log(c);
//     let s= await p4();
//     console.log(s);

// }
// fun()
// let opt = {
//     method: 'POST',
//     body: JSON.stringify({
//       title: 'kingmaker',
//       body: 'suraj',
//       userId: 1,
//       id:100
//     }),
//     headers: {
//       'Content-type': 'application/json; charset=UTF-8',
//     },
// };
// let p = fetch("http://127.0.0.1:5500/ch22/index.html", opt);
// p.then((response) => {
//   console.log(response.status);
//   console.log(response.ok);
//   console.log(response.headers);
//   return response.blob();
// }).then((data) => {
//   console.log(data);
// });
// fetch('https://jsonplaceholder.typicode.com/posts',opt)
//       .then(response => response.json())
//       .then(json => console.log(json))

// let getrequest=async()=>{
//     let a=prompt()
//     a=Number.parseInt(a);
//     await fetch('https://jsonplaceholder.typicode.com/posts/'+a)
// .then(response => response.json())
// .then(json => console.log(json))

// }
// getrequest()

//local storage

// form.onsubmit = (e) => {
//     e.preventDefault()
//     const mainfunc = async () => {
//     let input = document.getElementById("input").value;
//     const url = "https://goweather.herokuapp.com/weather/" + `${input}`;
//     const response = await  fetch(url);
//     const result =  await response.json();
//     console.log(result);
//     temp.innerText = result.temperature;
//     wind.innerText = result.wind;
//     description.innerText = result.description;
//   };
//   mainfunc();
// };

