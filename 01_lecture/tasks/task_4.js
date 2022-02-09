// Create a function searchSerial, which takes two parameters: 1 - an array of string or numeric values, 2 - searched value. 
// The function should return a number - maximum count of serial entries of the given value.
"use strict"
const searchSerial = (arr, searchVal) => {
    let num = 0;
    if(!arr.includes(searchVal)) return num

    for(let item of arr) {
        if(item === searchVal) num++
    }

    return num
}

console.log(searchSerial([1, 2, 2, 3, 4, 5, 2], 2));
console.log(searchSerial([1, 2, 2, 3, 4, 5, 2], 10));