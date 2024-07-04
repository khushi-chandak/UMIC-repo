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

function lmore(){
    window.location.href="Learnmore.html";
}
function home(){
    document.getElementById("a1").style.fontSize="22px";
}
function learnmore(){
    document.getElementById("a2").style.fontSize="22px";
}
