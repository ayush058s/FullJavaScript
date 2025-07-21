const decre=document.getElementById("dec");
const incre=document.getElementById("inc");
const rese=document.getElementById("re");
const zer=document.getElementById("zero");
let zeroo=0;

decre.onclick=function(){
    zeroo--;
    zer.textContent=zeroo;

}

incre.onclick=function(){
    zeroo++;
    zer.textContent=zeroo;

}

rese.onclick=function(){
    zeroo=0;
    zer.textContent=zeroo;

}