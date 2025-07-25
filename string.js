let userName = "   Brocode";

console.log(userName.charAt(0));
console.log(userName.indexOf("o"));
console.log(userName.length); 
console.log(userName.trim());
console.log(userName.toUpperCase());

// to chcek the starting letter of string

console.log(userName.startsWith(" "));// it will return true or false
console.log(userName.endsWith(" "));
console.log(userName.includes(" "));// if strings contains something or not
console.log(userName.replaceAll(" ","*"));//


// Slicing

const fullName = "Ayush Singh"

let firstName = fullName.slice(0,5);
let firstChar = fullName.slice(0,1);
let lastName = fullName.slice(6);
let lastChar = fullName.slice(-1);

console.log(firstName);
console.log(lastName);
console.log(firstChar);
console.log(lastChar);

// indexOf=gives the index of a given char

const email = "ayushsingh@gmail.com";
let emmail = email.slice(0,email.indexOf("@"));
let comm = email.slice(email.indexOf("@")+1);
console.log(emmail);
console.log(comm) ;



//Method changing

let userNAME = window.prompt("Enter your name");

userNAME = userNAME.trim().charAt(0).toUpperCase() + userNAME.trim().slice(1).toLowerCase();
console.log(userNAME);

// logical operator
/*
and=&&
or=||
not=!

= assignment operator
== comparison opertor
=== strict comparison operator(compare if values and datatype are equal)
!= inequality operator
!== strict inequality operator

*/