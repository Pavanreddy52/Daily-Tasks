// Arrays 
// Array is a collection of homogenous and heterogenous data 
// mainly we store the data in [] ,in square braces
var arr0=["hi",91606,["pavan ",9345,'nyb '],"navayuva"]
console.log(arr0);

// Multidimensional arrays :
// it is having array inside the another array.
var arr0=["hi",91606,["pavan ",9345,'nyb '],"navayuva"]

var arr1 =["1",2,3,4]
console.log(arr1);

// we can add the data elements into the array by push
// push()
// In push all elements in the end of an array
arr1.push(5);
function add(){
    arr1.push(6);
}
add()
console.log(arr1)

// Unshift it also add elements into an array in the first 
// It adds the elements beginning of an array 
arr1.unshift(7);
console.log(arr1)

// Splice(indexvalue,deletecount,new)
// In splice we can add anywhere in the array
// we can acces the specific element by the help of index values
// it starts from 0 and end at n-1
arr1.splice(2,1,"Hello");
console.log(arr1);

let arr4 = [1, 2, 5];
arr4.splice(2, 0, 3, 4);
console.log(arr4);

let arr3 = ["apple", "banana", "orange"];
arr3.splice(1, 1, "mango");
console.log(arr3); // replacing the elements 

let arr5 = [10, 20, 30, 40];
arr5.splice(-2, 1);//if we use negative values it starts from end
console.log(arr5);// -2 means second element from end


// removing element from an array 
//pop(), shift()
arr1.pop();
console.log(arr1); //pop(): it removes the last element of an array 

// shift() : shift removes the beginning element of an array 

arr1.shift();
console.log(arr1);

let numbers = [10, 20, 30];
numbers.push(40);
console.log(numbers); 
numbers.unshift(50);
console.log(numbers); 
numbers.pop();
console.log(numbers); 
numbers.shift();
console.log(numbers); 


let names = ["Pavan", "rajesh"];
names.push("Anil");
console.log(names); 
names.unshift("Kiran");
console.log(names); 
names.pop();
console.log(names);
names.shift();
console.log(names); 


// indexof is used for selecting an element from an array
let arr8=[1,2,3,4,5,6]
console.log(arr8[3])
console.log(arr8.indexOf(2));

// Includes ---> it returns the true & false

console.log(arr8[3])
console.log(arr8.includes(2)); // true 
console.log(arr8.includes(0)); // false : o is not there in the array


// lastIndexof()
// lastIndexOf() is used to find the LAST position of a value in an array or string.
let arr9= [1, 2, 3, 2, 4]
console.log(arr9.lastIndexOf(2)); // 3
 
let a= [2,4,5,6,7];
console.log(a.lastIndexOf(1));

let logins = ["user1", "user2", "user1", "user3"];
let lastLogin = logins.lastIndexOf("user1");
console.log(lastLogin);


// splice()
let num1=[1,34,56,67];
console.log(num1.length)
num1.splice(0,num1.length) // making array  value to 0
console.log(num1.length)


// concatination
//concat() is used to join (merge) values without changing the original data.
let b= [1, 2];
let b0 = [3, 4];
let result = a.concat(b);
console.log(result); // [1, 2, 3, 4]

let ar1 = ["a"];
let ar2 = ["b"];
let ar3 = ["c"];
let result1= ar1.concat(ar2, ar3);
console.log(result1); // ["a", "b", "c"]

let first = "Hello";
let second = "World";
let message = first.concat(" ", second);
console.log(message); // "Hello World"

// spread operator(...)
let ar4 = [1, 2, 3];
let ar5 = [...ar4];
console.log(ar5); // [1, 2, 3]

let a1 = [1, 2];
let b1 = [3, 4];
let result2 = [...a, ...b];
console.log(result2); // [1, 2, 3, 4]


