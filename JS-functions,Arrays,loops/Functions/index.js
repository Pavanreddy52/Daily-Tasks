// Functions ==> A Block of code to perform a certain task and  returns the value 

function Hello(){ // parameters 
    
}
Hello() // function calling , arguments

function add(a,b){
    return a+b;

}
console.log(add(25,2))
// we can define function in 2 ways
// 1. Function Declaration
// 2. Function Expression

 // 1.function Declaration
function functionname(){
    }
 functionname() // calling the function


// 2. Function Expression
// i,named function ii,Anonymous Function iii,Arrow Function

// Named Function 
// named function has name and we can call it from anywhere after it defined
function add(a, b) { //name--> add()
  return a + b;
}

console.log(add(3, 4));

// Anonymous Function
//A function without a name.
// Usually assigned to a variable or used as a callback.
const subtract = function(a, b) { 
  return a - b;
};

console.log(subtract(7, 2));  // 5

// Arrow Function (Anonymous by nature )
// this is introduced in ECMAscript6
// shorter Syntax and used for callbacks

let multiply = (a, b) => a * b;

console.log(multiply(3, 5));

const greet = (name) => {
  return "Hello " + name;
}
console.log(greet(name))

// Recursive function
// Function call it self is known as Recursive

//                       var    | let              | Const
// Redeclare             Yes    |  No              | No
// Reassingment          Yes    |  Yes             | NO
// Initialization        Yes    |  Yes             | No
// Hoisting ---> Acessing the Memory Value before its execution
// 










// two phases of js code will run
// 1. memory creation
// 2. Code Execution

//variable can be accesed outside , inside the function
// let, const are block scope
// var is global scope, function Scope

// Function var, let , const
// var--> can be accessed  outside of function
// let, const----> cant able to accesed outside the Function

// Block var ,let, Const
// var can accessed outside the function
// let, const cannot be accesed outside the function



// Recursive Function
// a function which is calling itself is known as rcursive function

let sum=0
let one = function rec(a){
  if(a==0){
    return 0
  }
  //sum += a
  return a+rec(a-1)
}
console.log(one(10))

// IIFE (Immediately Invoked Function Expression)
// It runs only once
// It creates its own scope
// Helps avoid global variable pollution
// Syntax:
//(function () {
  //console.log("IIFE")
//})();

// Function Currying 
// we have the many parameters in the same function

function functionname(a,b,c,d){
  console.log(a+b+c+d);

} 
functionname(10,20,30,40)

function add(a){
  return function(b){
    console.log("Secoend Function 20");
  }
}
var M= add(10)
console.log(M)

// Login Function
function login(username, password) {
  if (username === "admin" && password === "1234") {
    return "Login Successful";
  }
  return "Invalid Credentials";
}

console.log(login("admin", "1234"));



// Arrow Function
const cart = [
  { name: "Shirt", price: 500 },
  { name: "Shoes", price: 1000 }
];

const total = cart.reduce((sum, item) => sum + item.price, 0);

console.log(total); // 1500

// Closures
function counter() {
  let count = 0;

  return function() {
    count++;
    return count;
  };
}

const c = counter();

console.log(c()); 
console.log(c()); 

