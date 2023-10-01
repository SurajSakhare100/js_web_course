let p1=new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(4);
    }, 1000);
});
let p2=new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(5)
        // reject(new Error("u are stupid"))
    }, 2000);
});
let p3=new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(6);
    }, 3000);
});

// p1.then((value)=>{
//     console.log(value);
// })
// p2.then((value)=>{
//     console.log(value);
// })
// p3.then((value)=>{
//     console.log(value);
// })

// let p=Promise.all([p1,p2,p3]);
// p.then((value)=>{
//     console.log(value);
//     value.forEach(e=>{
//         console.log(e);
//     })
// })

// let p=Promise.allSettled([p1,p2,p3]);
// p.then((value)=>{
//     // console.log(value);
//     value.forEach(e=>{
//         console.log(e);
//     })
// })

// let p=Promise.race([p1,p2,p3]);
// p.then((value)=>{
//     console.log(value);
// })

// let p=Promise.any([p1,p2,p3]);
// p.then((value)=>{
//     console.log(value);
// })
// let p=Promise.resolve(6);
// let f =Promise.reject("e")
// p.then((value)=>{
//     console.log(value);
// })
