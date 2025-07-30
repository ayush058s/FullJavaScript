const title1 = document.getElementById("title");
title1.textContent = "Hello, World!";

// textContent shows all the content of the element, including HTML tags
// innerText shows all the content of the element, excluding HTML tags ,like it can hide some text if any display tag is used
// innerHTMl shows all the content of the element, including HTML tags

// document.getElementsByClassName('bg-black').style.backgroundColor= 'black';
// document.querySelector('.bg-black').style.backgroundColor = '#000000'




document.querySelector('h1').style.color = 'blue'; // selects the first h1 tag in the document

document.querySelector('#title'); // selects the element with the id "title"
document.querySelector('.heading'); // selects the first element with the class "heading"
document.querySelector('input[type="password"]'); // selects the first input element with the type "password"


const lisel = document.querySelector('ul'); 
lisel.querySelector('li').style.backgroundColor ="black";


const allLisel = document.querySelectorAll('li'); // returns a NodeList of all the li elements in the document
allLisel[0].style.color ="white"; 
// as querySelectorAll returns a NodeList, we can't use the dot notation to access the elements
// we have to use the bracket notation to access the elements in the NodeList

// 
allLisel.forEach((list) => {
    list.style.backgroundColor = "purple";
})


const allListClass = document.getElementsByClassName('list-class'); // returns a HTMLCollection of all the elements with the class "list-class"
// we need to convert the HTMLCollection to an array before we can use the forEach method
Array.from(allListClass);