console.log(`Hello Ayush`);
//window.alert(`I love Pizza`);

document.getElementById("Myh1").textContent=`hello`; 

// variables

let age=24;
let price=11.4;
let cgpa=9.7;

let names    = "Ayush";
console.log(`You are ${age} years old`);
console.log(`The price is ${price}`);66
console.log(typeof age);
console.log(typeof cgpa);

console.log(`My name is ${names}`);
console.log(typeof names);


// Take input through prompt

//let username =window.prompt(`What is your name`);
//console.log(username);





// Orginal Way

let Username;
document.getElementById("mysubmit").onclick= function(){
    Username=document.getElementById("mytext").value;
    console.log(Username);


}


document.getElementById("welcome").onclick= function(){
    document.getElementById("h1welcome").textContent=`${Username}`;
   


}

// TYPE CONVERSION


//let yourage=window.prompt("What us your age");

// it will take string input to convert it in number we are using below mentioned 
yourage=Number(yourage);
yourage+=1;
console.log(yourage);



// Circumference


const PI=3.141;
let radi;
let circum;

document.getElementById("click").onclick=function(){
   radi= document.getElementById("radii").value;
   radi=Number(radi);
   circum=2*PI*radi;
   document.getElementById("circumm").textContent= circum;

}