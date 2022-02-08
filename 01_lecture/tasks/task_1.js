// Write function, which takes two strings, and returns true if they are anagrams of one another.
"use strict"

const checkStringsAnagrams = (str1, str2) => {
    str1 = str1.trim().toLowerCase()
    str2 = str2.trim().toLowerCase()

    if (str1.length !== str2.length) return false

    str1 = str1.split("").sort()
    str2 = str2.split("").sort()

    for (let i = 0; i < str1.length; i++) {
        if (str1[i] !== str2[i]) return false
    }

    return true
}

console.log(checkStringsAnagrams('listen', 'silent'))
console.log(checkStringsAnagrams('sun', 'son'))