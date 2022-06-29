# Memoization 

- React componentlerimizdeki gereksiz renderların önüne geçerek, bu componentleri daha performanslı hale getirmeye çalışalım.

# React.memo

src --> create components folder --> Header.js

- Çalışmamaızda Header componentimiz sabit kalacağı için yeniden render edilmemesi lazım. Fakat ediliyor. Yenien render edilmesinin sebebi, buttona her bastığımzda App fonksiyonu yenien render edildiği için ve Header componentimiz de App içinde olduğu için yeniden render edilir.

- Bu bizin için bi problemdir. Gereksiz render işlemi. 

- Bunun önüne geçmek için Header 'ı export ederken `` React.memo(Header) `` şeklinde export etmeliyiz.

```
export default React.memo (function Header() {

    console.log("Header component Re-Rendered!");

  return (
    <div>
      Header
    </div>
  )
})
```

- Header 'a geçtiğimiz propertyler (props) ne zaman değişirse, artık o zaman tekrardan render adilir.

`` <Header number={ number < 5 ? 0 : number} /> `` number 5 'den küçük olduğu sürece Header render edilmeyecek. 5 'e eşit ve büyük olduğunda render edilecek.

# useMemo

- App.js 'de yeni bir obje tanımlayalım.

``   const data = {name: "Ali"}; ``

- Header componentimiz sayı 5 'den küçük ve abje değişmese dahi render edilecektir. Bunun sebebi JS 'de primative veri türlerinde farklı olarak, objeler aynı görünse dahi denk kabul edilmemesinden kaynaklanmaktadır. Çünkü objelerin bellek üzerindeki referansları farklıdır (arrayler için de bu durum geçerli).

`` {} === {} `` --> `` false `` aynı olamadığı için render işlemi uygualanır.

`` [] === [] `` --> `` false ``

**primative**

`` false === false  `` --> `` true `` 

`` true === true  `` --> `` true ``

`` 5 === 5  `` --> `` true ``

`` " " === " "  `` --> `` true ``

- Yani button 'a bastığımızda App render edilecek bu sırada React.memo işlevi gereği propları kontrol edecek. Bu sırada data objesi yeniden hesaplanırken denk mi diye sorulacak, fakat objeler içeriği aynı olsa dahi denk kabul edilmediği için değişmiş gibi algılanacak. Bu durumda Header componentimiz yeniden render edilmek durumunda kalacak.

## Yöntem - 1

- En basit yöntem. Datayı componentin dışında tanımlamak.

*Eski*

```
function App() {

  const [number, setNumber] = useState(0);

  const data = {name: "Ali"};

  return (
    <div className="App">

      <Header number={ number < 5 ? 0 : number} data={data} />

      <hr /> 

      <h1>{number}</h1>

      <button onClick={() => setNumber(number + 1)}>Click</button>

    </div>
  );
}
 ```

*Yeni* -->

 ``` 
 const data = {name: "Ali"};

 function App() {

  const [number, setNumber] = useState(0);

  return (
    <div className="App">


      <Header number={ number < 5 ? 0 : number} data={data} />

      <hr /> 

      <h1>{number}</h1>

      <button onClick={() => setNumber(number + 1)}>Click</button>

    </div>
  );
}
  ```

## Yöntem - 2 (useMemo)

- Tanımlamayı component içinde yapmamaız gerekliyse...

`` import {useMemo} from "react"; ``

``` 
  const data = useMemo( () => {
    return {name: "Ali"};
  }, []);
 ```
- Dependency arraye girdiğimiz değer her değiştiğinde hesaplama işlemi yapılır.
- Array içinde kullanılabilir.

``` 
  const data = useMemo( () => {
    return [{name: "Ali", number}];
  }, [nember]);
 ```

 **Dışarıdan bir fonksiyon ile**

 - calculateObject fonksiyonunu tanımlayalım

 ```
 function calculateObject(){

  console.log("Calculating...");

  for(let i = 0; i < 1000000000; i++ ){

  }

  console.log("Calculating completed!")

  return {name: "Ali"};
};
 ```

- useMemo içinde fonksiyonu kullanalım

 ``` 
  const data = useMemo( () => {
    return calculateObject();
  }, []);
 ```

 - Butanumuzun altıanda bir input tanımlayalım ve girdi almaya çalışalım.

``<input value={text} onChange={ ({target}) => {setText(target.value)}} />``

- input alanındaki her değişiklikte fonksiyon çalışacapı ve render işlemi olacağı için işlemimiz çok yavaşlayacaktır.

- Fonksiyomuz ile input 'un ortak bir işlevi olmamasına rağmen render işlemi uygulanmaktadır. 

- Bunu önlemek için useMemo kullanmak gerekir.

- Artık fonksiyon sadece did mount olduğu anda ve dependency arraye girilen değer değiştikçe çalışacaktır.

``` 
  const data = useMemo( () => {
    return calculateObject();
  }, [number]);
 ```

 - number 'ı göstermek için

 ``` 
  const data = useMemo( () => {
    return calculateObject(number);
  }, [number]);
 ```

```
 function calculateObject(number){

  console.log("Calculating...");

  for(let i = 0; i < 1000000000; i++ ){

  }

  console.log("Calculating completed!")

  return {name: "Ali", number};
};
 ```