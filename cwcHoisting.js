
addOne(5);
// Function declarations are hoisted, so this will work
function addOne(num){
    return num + 1;
}

//addTwo(5);
// Function expressions are not hoisted, so this will throw an error
const addTwo = function(num){
    return num + 2;
}
addTwo(5); 