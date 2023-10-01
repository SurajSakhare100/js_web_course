// introduction to call-back

// sychronus programming

// console.log("start");
// let a="hi ";
// let b="how ";
// let c ="are you?";
// console.log(a+b+c);

// asychronus programming

// setTimeout(() => {
//     console.log("good i am fine");
// }, 2000);
// console.log("end");

//call back
function loadScript(src,call){
    let script=document.createElement("script");
    script.src=src;
    script.onload=function(){
        console.log("your script is loaded src:"+src);
    }
    script.onerror=function(){
        console.log("your script has some error to load:"+src);
        call(new Error("src got some error"),);

    }
    document.head.appendChild(script);
}
function hello(error,src) {
    if(error){
        console.log(error);
    }
    alert("hello "+src);
}
loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js",hello)