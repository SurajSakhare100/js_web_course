// async await
// async function func(){
//     let delhi=new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("27 deg");
//         }, 5000);
//     });
//     let pune=new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("34 deg")
//         }, 2000);
//     });
//     console.log("waiting delhi");
//     let dw=await delhi;
//     console.log("fulfilled delhi");
//     console.log("waiting pune");
//     let pw=await pune;
//     console.log("fulfilled pune");
//     return [dw,pw]
// }
// let a=func()
// a.then(alert)

//try catch
// try {
//     setTimeout(() => { 
//         console.log(rahul);
//     }, 1000);
//     console.log(rahul);
// } catch (error) {
//     console.log("erorr occurs "+error);
// }

//error object
// try {
//     let age=prompt();
//     if(age>20){
//     throw new SyntaxError("harry is not good")
//     }
// } catch (error) {
//     console.log(error);
//     console.log(error.name);
//     console.log(error.stack);
//     console.log(error.message);
//     console.log(object);
// }
// finally{
//     console.log("hello");
// }