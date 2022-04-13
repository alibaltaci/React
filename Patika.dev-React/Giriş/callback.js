import fetch from "node-fetch";

// fetch("https://jsonplaceholder.typicode.com/users")
// .then(data => data.json())
// .then(users => console.log(users));

// fetch içinde fetch kullanarak işlemleri sıraya koymak

// fetch("https://jsonplaceholder.typicode.com/users")
// .then(data => data.json())
// .then(users => {
//     console.log("Users", users);
//     fetch("https://jsonplaceholder.typicode.com/posts/1")
//     .then(data => data.json())
//     .then(post => console.log("Post", post))
// });


// Async - Await ile ukarıdaki işlemi yapmak.

// async function getData(){
//     const data = await (await fetch("https://jsonplaceholder.typicode.com/users")).json();

//     const post1 = await (await fetch("https://jsonplaceholder.typicode.com/posts/1")).json();

//     const post2 = await (await fetch("https://jsonplaceholder.typicode.com/posts/2")).json();

//     console.log("Users", data);
//     console.log("Post1", post1);
//     console.log("Post2", post2);
// }

// getData();

// Ananim Fonksiyon
// fonksiyon tanımlamadan işlemleri yapmak için kullanılan bir yöntemdir.

// ()(); şeklinde anonim fonsiyon oluşturulabilir.