const arr = [1, 2, 3, 4, 5, 6]
// forEach -> returns a new array, on the basis of callback

const array = arr.filter((elem) => {
    return elem % 2 === 0
})

console.log(array);

let sum = 0

arr.forEach((elem, index) => {
    sum += elem
    // console.log(`Element ${elem} is at ${index} position`)
})
console.log(sum)

// map -> returns a new array

const newArr = arr.map((elem, idx) => {
    return `${elem} : ${idx}`;
})

console.log(arr);
console.log(newArr);
