// Write the clone function so that it can clone deeply the object passed as a parameter.
"use strict"

const cloneObj = obj => {
    return JSON.parse(JSON.stringify(obj))
}

const user = {
    username: "tricky",
    age: 20,
    address: {
        street: "Shevchenka",
        city: "Kyiv"
    }
}

const cloneUser = cloneObj(user)
console.log(cloneUser)
cloneUser.age = 22
cloneUser.address.city = "Khmelnytskiy"
console.log(cloneUser)