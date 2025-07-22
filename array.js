let fruits = ["apple" , "orange" , "banana" ];

fruits.push("coconut")
fruits.push("mango");//add at last index
fruits.pop();// delete from last index


fruits.unshift("pineapple");// add at 0 index
fruits.shift(); 

console.log(fruits);

fruits.sort().reverse();
console.log(fruits);


// Slice( ) : returns a piece of the array
// slice( startIdx, endIdx )

// Splice( ) : change original array (add, remove, replace)
// splice( startIdx, delCount, newEl1... )

const originalArray = [1, 2, 3, 4, 5];
const removedElements = originalArray.splice(1, 2, 6, 7); // Removes 2 and 3, adds 6 and 7
console.log(originalArray); // originalArray is now [1, 6, 7, 4, 5]
console.log(removedElements); // removedElements is [2, 3]




// Spread Operator = ... = allows an iterable such as an array or string to be expanded into separate elements(saare elements alag alag kar deta hai)

let number = [ 2,5,1,3];
let maximum = Math.max(...number);
console.log(maximum);

let userName = "Ayush Singh";
let letters = [...userName];

console.log(letters);

let fruit = ["apple", "mango"];
let vegetable = ["potato", "tomato"];

let food = [...fruit,...vegetable,"enjoy", "fun"];
console.log(food);

// spread = expands an array into separate elements
// rest = bundles separate elements into an array(...rest)

function openFridge(...games){
    console.log(games);
   // console.log(...games);
}

const game1 = "cricket";
const game2 = "football";
const game3 = "basketball";
const game4 = "hockey";

openFridge(game1,game2,game3,game4);


// FIND AVERAGE

function getAverage(...digits){
    let sum = 0;
    for(let digit of digits){
        sum += digit;
    }
    return sum/digits.length;
}
console.log(getAverage(1,2,3,4,5,6,7,8))

// rest for strings

function combineString(...strings){
    return strings.join(" ");
}

const fullName = combineString("Master", "Ayush","Singh","is","great.");

console.log(fullName);