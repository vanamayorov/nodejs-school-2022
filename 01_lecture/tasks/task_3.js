// Write a function-wrapper, that will cache the result of any other function
"use strict"

const add = (a, b) => a + b

const wrapper = (args) => {
    const cache = {}
    return function (a, b) {
        if (!cache[`${a}+${b}`]) {
            cache[`${a}+${b}`] = args(a, b)
        }

        return cache[`${a}+${b}`]
    }
};

const cachedAdd = wrapper(add)
console.log(cachedAdd(2, 2))
console.log(cachedAdd(2, 2))
console.log(cachedAdd(3, 3))