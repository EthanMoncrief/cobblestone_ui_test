// Filter Example
function removeDuplicates(fruits) {
    // If first index of value != index, then condition will fail, filtering fruit out if fruit already exists
    let uniqueFruits = fruits.filter((value, index) => fruits.indexOf(value) === index)
    return uniqueFruits;
} 
  
// Set Example
function removeDuplicates0(fruits) {
    // Spread fruit array into unique item constrained set, convert to indexed collection type.
    let uniqueFruits = [...new Set(fruits)]
    return uniqueFruits;
}
  
// True Unique Elements Example (exclude items and their duplicates).
function removeDuplicates1(fruits) {
    // If element exists only once in array, indexOf(first occurance) and lastIndexOf(last occurance) will be equal.
    let uniqueFruits = fruits.filter((value, index) => fruits.indexOf(value) === fruits.lastIndexOf(value))
    return uniqueFruits;
}

let fruits = ['apple', 'banana', 'apple', 'orange', 'banana'];

// Please uncomment to test solutions
let uniqueFruits = removeDuplicates(fruits); // Filter Example

// let uniqueFruits = removeDuplicates0(fruits); // Set Example

// let uniqueFruits = removeDuplicates1(fruits); // True Unique Element Example 

console.log(uniqueFruits); 
  