const promiseOne = new Promise((resolve, rejecct) => {
    // do an async operation here
    // DB calls, cryptography, network
    setTimeout(() => {
        console.log('Promise 1 resolved');
        resolve();
    },2000);
});

promiseOne.then(function(){
    console.log('promise consumed');
})

//////// OR ////////

new Promise(function(resolve, reject){
    setTimeout(() => {
        console.log('Async task 2');
        resolve();
    }, 2000);
}).then(() => {
    console.log('task 2 resolved');
})


const promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            name: 'John',
            age : 30
        })
    }, 1000);
})

promiseThree.then((user) => {
    console.log(user);
})


const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false;
        if(!error){
            resolve({
                carName: 'Toyota',
                year: 2015
            });
        }else{
            reject('Syntax error');
        }
    }, 1000)
})

promiseFour.then((user) => {
   console.log(user);
   return user.carName;
})
.then((carName) => {
    console.log(carName);
})
.catch((error) => {
    console.log(error)
}).finally(() => {
    console.log("The promise is either resolved or rejected");
})



const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false;
        if(!error){
            resolve({
                userName: 'JavaScript',
                password: '123456'
            });
        }else{
            reject('ERROR: JavaScript error');
        }
    }, 4000);
})

async function handlePromiseFive(){
    try{
        const user = await promiseFive;
        console.log(user);
    }catch(error){
        console.log(error);
    }
}
handlePromiseFive();




// async function getAllUsers(){
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         const data = await response.json();
//         console.log(data);
//     }catch(error){
//         console.log('E: erorrrrrr');
//     }
// }
// getAllUsers();

///// OR////

fetch('https://jsonplaceholder.typicode.com/users').then((response) => {
    return response.json();
})
.then((userName) => {
    console.log(userName);
})
.catch((error) => {
    console.log('handlingggg error');
})