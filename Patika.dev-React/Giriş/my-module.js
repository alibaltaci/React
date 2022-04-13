// iki değer alıp bunları toplayan bir fonksiyon yazalım

// function total (a, b){

//     return a + b;
// }

// Aynı fonksiyonu arrow function ( => ) ile tanımlayalım

const total = (a, b) => a + b;
 
// Bu fonksiyonu burada değil de index.js içinde kullanmak istersek.

// export default total;  // sadece bir tane default kullanılabilir.


// 2. bir fonksiyon tanımlayalım ve 2 fonksiyonu da dışa aktarmaya çalışalım.
// bunun için default ile dışa aktardığımız total 'i iptal edip her iki fonksiyonun başına da export yazacağız.

const hello = () => {
    console.log("Hello");
}

// birden fazla export için başka bir yöntem
// fonksiyonlarımızın başından export ifadelerini kaldırıyoruz.

export {hello, total};

// default ile dışa aktarılacak bir fonksiyon yazalım

// const minus = (a, b) =>  a - b;

// export default minus;

// default olan çıktı tanımlamanın olduğu yerde const yerine yazılarak da kullanılabilir.

export default (a, b) =>  a - b;


