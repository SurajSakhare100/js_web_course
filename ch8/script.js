let joke=[
    {
        "joke": "The generation of random numbers is too important to be left to chance.",
    },
    {
        "joke": "How do you tell HTML from HTML5?\n- Try it out in Internet Explorer\n- Did it work?\n- No?\n- It's HTML5.",
    },
    {
        "joke": "\"We messed up the keming again guys.\"",
    },
    {
        "joke": "Have a great weekend!\nI hope your code behaves the same on Monday as it did on Friday.",
    },
    {   
        "joke": "Your momma is so fat, you need to switch to NTFS to store a picture of her.",
    },
    {
        "joke": "Your mama's so FAT she can't save files bigger than 4GB.",
    },
    {   
        "joke": "I have a joke about Stack Overflow, but you would say it's a duplicate.",
    },
    {
        "joke": "Debugging is like being the detective in a crime movie where you're also the murderer at the same time.",
    },
    {
        "joke": "A SQL statement walks into a bar and sees two tables.\nIt approaches, and asks \"may I join you?\"",
    },
    {
        "joke": "A programmer puts two glasses on his bedside table before going to sleep.\nA full one, in case he gets thirsty, and an empty one, in case he doesn't."
    }
]
// let index= Math.floor(Math.random()*10);
let jokes =document.getElementById("joke");
let index=0;
// jokes.innerHTML=joke[index].joke;
let nextbtn=document.getElementById("nextbutton");
nextbtn.addEventListener("click",()=>{
   index++;
   jokes.innerText=joke[index].joke;
})
let backbtn=document.getElementById("backbutton");
backbtn.addEventListener("click",()=>{
   index--;
   jokes.innerText=joke[index].joke;
})
