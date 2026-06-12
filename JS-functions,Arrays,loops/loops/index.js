// loops
// for loop
// while loop
// do while loop
// for in 
// for of 
// for each

// For Loop

//for (initiliaze;condition;increment){

//}
let grades=[8,10,7];
for ( let i=0;i<grades.length;i++){
    function  grade (g) {
        switch(g){
            case 10:
                console.log("Exellet");
                break;
            case 9:
                console.log("Good");
                break;
            case 8:
                console.log("Average");
                break;
            case 7:
                console.log("Better");
        }
    }
    grade(grades[i])
}


// String revese

let str = "hello";
let reversed = "";
for (let i = str.length - 1; i >= 0; i--) {
  reversed += str[i];
}
console.log(reversed);

// Largest Number
let nums = [10, 20, 5, 40];
let max = nums[0];
for (let num of nums) {
  if (num > max) {
    max = num;
  }
}
console.log(max);

// Count Even Numbers
let nums1 = [1, 2, 3, 4, 6];

let count = 0;

for (let num of nums1) {
  if (num % 2 === 0) count++;
}
console.log(count);


// Sum of Numbers
let sum = 0;

for (let i = 1; i <= 5; i++) {
  sum += i;
}
console.log(sum); // 15

// Countdown Timer
let count1 = 5;

while (count1 > 0) {
  console.log(count1);
  count1--;
}


let user = {
  name: "Pavan",
  age: 22
};
for (let key in user) {
  console.log(key, user[key]);
}

let nums2 = [1, 2, 3];

nums2.forEach((n, i, arr) => {
  arr[i] = n + 10;
});

console.log(nums2);