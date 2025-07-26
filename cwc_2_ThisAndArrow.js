// this keyword is used to refer  current context

const user = {
    name: "Ayush",
    price: 999,

    welcomeMeassage : function(){
        console.log(`${this.name}, welcome to website`);
        console.log(this);// it prints all values acc to current context
    }

}

user.welcomeMeassage();
user.name = "SAM";
user.welcomeMeassage();

/////////////
console.log(this); // this prints the empty object but in browser the global object is window and will print window
///////////

function chai(){
    const username = "ayush"; 
    console.log(this); // it will print so many values
    console.log(this.username);//  undefined
}
chai();


// simple/ explicit return
const arrowChai = () => {
    const username = "ayush"; 
    console.log(this); // {}
    console.log(this.username);//  undefined   
}

arrowChai();


// Implicit Return 
const impChai = (num1, num2) => num1 + num2;

console.log(impChai(3, 4));



// Immediately invoked function expressions (IIFE)
// IIFE is a function that runs as soon as it is defined and separates the scope from the global scope/ parent scope
// It is used to avoid polluting the global scope with variables and functions that are not needed
// named IIFE
(function One() {
    console.log(`DB Connected`);
})();  // must end with (); to invoke the function immediately

// anonymous IIFE
((name) => {
    console.log(`DB Connected 2 with ${name}`);
})("Ayush");