// Create a function searchSerial, which takes two parameters: 1 - an array of string or numeric values, 2 - searched value. 
// The function should return a number - maximum count of serial entries of the given value.
"use strict"

const searchSerial = (arr, searchVal) => {
    return arr.reduce((acc, curr) => searchVal === curr ? ++acc : acc, 0);
}

console.log(searchSerial([1, 2, 2, 3, 4, 5, 2], 2));
console.log(searchSerial([1, 2, 2, 3, 4, 5, 2], 10));