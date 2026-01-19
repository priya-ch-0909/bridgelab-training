// Start with an array
let fruits = ["apple", "banana", "cherry"];

console.log("Original:", fruits);

// PUSH → adds to the END
fruits.push("mango");
console.log("After push:", fruits); 
// ["apple", "banana", "cherry", "mango"]

// POP → removes from the END
fruits.pop();
console.log("After pop:", fruits); 
// ["apple", "banana", "cherry"]

// UNSHIFT → adds to the BEGINNING
fruits.unshift("orange");
console.log("After unshift:", fruits); 
// ["orange", "apple", "banana", "cherry"]

// SHIFT → removes from the BEGINNING
fruits.shift();
console.log("After shift:", fruits); 
// ["apple", "banana", "cherry"]