
// filter vs forEach
// filter returns a new array with the elements that pass the test implemented by the provided function
// forEach executes a provided function once for each element in an array
// filter is used for filtering data, while forEach is used for performing an operation on each element in


const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//const newNums = myNums.filter((num) =>  num > 5 );
//console.log(newNums)

// if we use curly brackets then we have to use return keyword
const newNums = myNums.filter((num) =>  {
    return num > 5 }
);
console.log(newNums)


// map
// map creates a new array populated with the results of calling a provided function on every element in 
// the calling array

const myNums2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums2 = myNums.map((num) => num * 2);
console.log(newNums2);

// reduce 
// reduce executes a user-supplied "reducer" callback function on each element of the array (
// starting from the first element) in order to reduce it to a single output value.
// reduce is used to calculate the sum of an array, or to concatenate strings, or to count
// the number of elements in an array, etc.

const myNums3 = [1, 2, 3, 4];

const newNums3 = myNums3.reduce(function (accumulator, current) {
    console.log(`acc: ${accumulator}, current: ${current}`);
    return accumulator + current;
},0)

console.log(newNums3);