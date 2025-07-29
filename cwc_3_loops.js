const array = [1, 2, 3, 4, 5];

// for of 
// for of does not iterate over objects, it is used for iterable objects like arrays, strings, maps, sets, etc.

for (const value of array) {
    console.log(value); // 1 2 3 4 5
}

const map = new Map();
map.set('a', 1);
map.set('b', 2);
map.set('c',3);

for( const [key, value] of map){
    console.log(`${key} = ${value}`)// a = 1 b = 2 c = 3
}


// FOR IN => for arrays  // for in iterates over the enumerable properties of an object, including those in the prototype chain.
const obj = {
    a : 'aam',
    b : 'baam',
    c : 'caam'
}

for (const key in obj) {
    console.log(key);  // will print a, b, c      
}

for (const key in obj) {
    console.log(obj[key]);  // will print aam, baam, caam      
}

//for in => for arrays

const arr = ["ram", "shyam", "radhe"];

for(const key in arr){
    console.log(key); // 0 1 2
    console.log(arr[key]); // ram , shyam , radhe
}


// forEach

const array1 = ["adam", "random", "harsh", "sparsh"];

array1.forEach((value) => {
    console.log(value);
})

array1.forEach((value, index, array) => {
    console.log(value, index, array);
})


// Array of objects

const array2 =[
    {
        languageName : "java",
        languageVersion : "1.8",
    },
    {
        languageName : "python",
        languageVersion : "3.9",
    },
    {
        languageName : "c++",
        languageVersion : "11",
    }
]

//forEach on array of objects
array2.forEach((value) => {
    console.log(value.languageName);
})