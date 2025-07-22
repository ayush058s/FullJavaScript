// callBack = a function that is passed as an argument to another function(basically to call a function just after a function)


hello(wait);

function hello(callback) {
    console.log("Hello World");
    callback();
}

function bye() {
    console.log("Bye World");
}

function wait(){
    console.log("Plz Wait");
}

sum(displayPage,2,3);

function sum(callback,x,y){
    let result = x + y;
    callback(result);
}

function displayPage(result){
    ///document.getElementById("myH1").textContent = result;
}