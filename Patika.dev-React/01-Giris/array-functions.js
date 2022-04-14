/*

push - map - find - filter - some - every - includes

*/

const users = ["İbrahim", "Ahmet", "Deniz"];

const users2 = [
    {name: "İbrahim"},
    {name: "Ahmet"},
    {name: "Deniz"}
];

// push 

// users.push("Ali");

// console.log(users);


// Map

// for (let i = 0; i < users.length; i++) {
//     console.log(users[i]);
// }

// for yerine map

// users.map(user => {
//     console.log(user);
// })


// find 

// console.log(users2.find( user => user.name === "İbrahim"));

// console.log(users.find( user => user === "Ahmet"));


// filter

const users3 = [
    {
        name: "İbrahim",
        age: 21
    },
    {
        name: "İbrahim",
        age: 42
    },
    {
        name: "İbrahim",
        age: 32
    },
    {
        name: "Ahmet",
        age: 38
    },
    {
        name: "Deniz",
        age: 33
    }
];

// console.log( users3.filter( users => users.age > 30 && users.name === "İbrahim"));

// farklı bir yöntem
// console.log( users3.filter( ({name, age}) => age > 30 && name === "İbrahim"));


//  some

// console.log( users3.some( ({age}) => age > 30 ));


// every 

// console.log( users3.every( ({age}) => age > 30));


// includes

console.log( users.includes("selim"));  // false

console.log( users.includes("İbrahim"));  // true