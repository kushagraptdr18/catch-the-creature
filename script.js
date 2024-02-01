var strbt=document.querySelector(".screen1 button");
var screen2=document.querySelector(".screen2");
var box=document.querySelectorAll(".screen2 .box")
var screen3=document.querySelector(".screen3");
var playground=document.querySelector("#playground")

strbt.addEventListener("click",function(){
    screen2.style.transform="translateY(-100%)";
})
var selected=""

box.forEach(function(el){
    el.addEventListener("click",function(){
        selected=el.childNodes[3].getAttribute("src");
        screen3.style.transform="translateY(-200%)";
        createimg();
    })
})

function createimg(){
    var newimg=document.createElement("img");
    newimg.setAttribute("src",selected);
    playground.appendChild(newimg);
    var num=getRandom();
    newimg.style.top=num.h+"%";
    newimg.style.left=num.w+"%";
    newimg.style.rotate=num.rot+"deg";
   
}

function getRandom(){
    var h=Math.random()*100;
    var w=Math.random()*100;
    var rot=Math.random()*360;
    return {h,w,rot};

}
