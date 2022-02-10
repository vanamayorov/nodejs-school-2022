// Write a function-wrapper, that will cache the result of any other function
"use strict"

const add = (a, b) => +a + +b;

const getCacheKey = (cache, key) => {
    return cache[key];
}

const wrapper = (callback) => {
    const cache = {};
    return function (...args) {
        const keyArgs = JSON.stringify(args);
        if (!getCacheKey(cache, keyArgs)) {
            cache[keyArgs] = callback(...args);
        }
        return getCacheKey(cache, keyArgs);
    }
};

const objEx = {
    val: 2,
    toString() {
        return `${this.val}`;
    }
};

const objEx2 = {
    val: 3,
    toString() {
        return `${this.val}`;
    }
};

const cachedAdd = wrapper(add);
console.log(cachedAdd(objEx, objEx2));
console.log(cachedAdd(objEx2, objEx2));
console.log(cachedAdd(3, 2));
console.log(cachedAdd(2, 3));