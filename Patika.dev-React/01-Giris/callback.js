import axios from "axios";
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

// (async () =>{
//     const data = await (await fetch("https://jsonplaceholder.typicode.com/users")).json();

//     const post1 = await (await fetch("https://jsonplaceholder.typicode.com/posts/1")).json();

//     const post2 = await (await fetch("https://jsonplaceholder.typicode.com/posts/2")).json();

//     console.log("Users", data);
//     console.log("Post1", post1);
//     console.log("Post2", post2);
// })();


// axios fetch yerine kullanılablir.

// axios bize bir obje döner ve bunu altında bir data ifadesi vardır.
// Data ifadesini alabilmek için { data } şeklinde kullanılabilir.
// { data: newName } şeklinde yeniden isimlendirilebilir.

// import axios from "axios";

// (async () =>{
//     const { data: users } = await axios("https://jsonplaceholder.typicode.com/users");

//     const { data: post1} = await axios("https://jsonplaceholder.typicode.com/posts/1");

//     const { data: post2} = await axios("https://jsonplaceholder.typicode.com/posts/2");

//     console.log("Users", users);
//     console.log("Post1", post1);
//     console.log("Post2", post2);
// })
// ();


// Promises

// const getComments = () => {

//     return new Promise((resolve, reject) => {

//         resolve("comments");
//     });
// }
 
// getComments()
// .then( (response) => console.log(response))
// .catch( (e) => console.log(e))


// Promises, async - await ve axios kullanarak

const getUsers = () => {

    return new Promise( async (resolve, reject) => {

        const { data } = await axios("https://jsonplaceholder.typicode.com/users");

        resolve(data);

        reject("Users 'da bir sorun oluştu...");
    });
}

// getUsers()
// .then( data => console.log(data))
// .catch(e => console.log(e));


const getPosts = (post_id) => {

    return new Promise( async (resolve, reject) => {

        const { data } = await axios("https://jsonplaceholder.typicode.com/posts/" + post_id);

        resolve(data);

        reject("Posts 'da bir sorun oluştu...");
    })
}

// getPosts(98)
// .then(response => console.log(response))
// .catch(e => console.log(e));


// Yukarıdaki getUsers ve getPost fonksiyonlarını sıraya koymak istediğimizi varsayalım
// anonim fonksiyon ile bunu yapalım.

// ( async () => {

//     await getUsers()
//     .then( data => console.log(data))
//     .catch(e => console.log(e));

//     await getPosts(42)
//     .then(response => console.log(response))
//     .catch(e => console.log(e));

// })();


// then ve catch 'den kurtularak aynı fonksiyonu tanımlayalım
// hatayı yakalama için try catch yöntemini kullanalım.

// ( async () => {

//     try {
//         const users = await getUsers();

//         const posts = await getPosts(24);
    
//         console.log(users);
//         console.log(posts);

//     } catch(e) {

//         console.log(e);
//     }

// })();


// Promise.all ile fonksiyonlarımızı çalıştıralım.

Promise.all([getUsers(), getPosts(42)])
.then(response => console.log(response))
.catch(e => console.log(e));
