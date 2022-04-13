// iki değer alıp bunları toplayan bir fonksiyon yazalım

// function total (a, b){

//     return a + b;
// }

// Aynı fonksiyonu arrow function ( => ) ile tanımlayalım

const total = (a, b) => a + b;
 
// Bu fonksiyonu burada değil de index.js içinde kullanmak istersek.

export default total;


// 2. bir fonksiyon tanımlayalım

const hello = () => {
    console.log("Hello");
}