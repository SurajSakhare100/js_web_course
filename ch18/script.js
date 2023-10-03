// let p1=fetch("https://api.rainviewer.com/public/weather-maps.json")
// let p2=fetch("https://goweather.herokuapp.com/weather/Ny",{
// headers:{
//     Authetication:"secret"
// }})
// p1.then((value1)=>{
//     console.log(value1.status);
//     console.log(value1.ok);
//     return value1.json()
// }).then((value)=>{
//     console.log(value);
// }
// )
// p2.then((value4)=>{
//     console.log(value4.ok);
//     console.log(value4.status);
//     return value4.json()
// }).then((value3)=>{
//     console.log(value3);
// }
// )

//post request

// let todos=async(todo)=>{

//     let opt={
//         method:"POST",
//         headers:{
//             "Content-type":"application/json"
//         },
//         body:JSON.stringify(todo),
//     }
//     let p= await fetch('https://jsonplaceholder.typicode.com/posts',opt)
//     let response=await p.json();
//     return response
// }
// const getTodo=async(id)=>{
//     let response=await fetch('https://jsonplaceholder.typicode.com/posts/'+id)
//     let r=await response.json()
//     return r;
// }
// const main=async()=>{
//     let todo={
//         title:'suraj',
//         body:'bar',
//         userId:123,
//     }
//     let todor=await todos(todo)
//     console.log(todor);
//     console.log(await getTodo(5));
// }
// main()

//cookies..

// let key=prompt();
// let value=prompt();
// document.cookie=`${encodeURIComponent(key)}=${encodeURIComponent(value)}`
// console.log(document.cookie);