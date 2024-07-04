window.onscroll=function() {myfunct()};
let head=document.getElementsByClassName("header")[0];
if(head){
var sticky= head.offsetTop;

function myfunct(){
    if(window.scrollY >sticky){
        head.classList.add("sticky");
    }
    else{
        head.classList.remove("sticky");
    }
}
}
else{
    console.error("Some mistake")
}
function highlight(){
    document.getElementById("vision").style.backgroundColor="white";
    document.getElementById("vision").style.fontSize="27px";
}
function highlight1(){
    document.getElementById("about").style.backgroundColor="white";
    document.getElementById("about").style.fontSize="27px";
}
function home(){
    document.getElementById("a1").style.fontSize="22px";
}
function learnmore(){
    document.getElementById("a2").style.fontSize="22px";
}
function out(){
    document.getElementById("about").style.fontSize="25px";
    document.getElementById("about").style.backgroundColor="rgb(224, 240, 239)";
}
function out1(){
    document.getElementById("vision").style.fontSize="25px";
    document.getElementById("vision").style.backgroundColor="rgb(224, 240, 239)";
}

