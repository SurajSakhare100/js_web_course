let time=document.getElementById("time");
let score=15;
let a=setInterval(() => {
    score--;
    time.innerText=score;
}, 1000);
setTimeout(() => {
    clearInterval(a);
    document.body.innerHTML=`<div class="timeover"><h1>TIME OVER!!!</h1></div>`;
}, 16000);
let ans=document.getElementsByTagName("span");
let no=document.querySelectorAll(".ans")
let answer=["red","blue","green","black"];
let correct_ans=["blue"];
for (let i = 0; i < answer.length; i++) {
    ans[i].innerText=answer[i];}