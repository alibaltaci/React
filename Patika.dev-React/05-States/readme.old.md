# States Nedir? Nasıl Oluşturulur? 

Component 'lerimiz üzerinde değerinin değişme potansiyeli olan bütün verileri tutan bir JS objesidir.

Componet 'in herhangi bir anında değeri değişme potansiyeli olan bir veri state olarak tanımlanır ve bu state değiştiği an ilgili component render edilerek değişim ekrana yazdırılır.

    npx create-react-app . 

Şeklindeki yazım ek olarak bir dosya açmadan bulunduğumuz dizine proje kurulumunu yapar.

NOT: Dosyanın büyük harf içermemesi lazım.

### **ERROR**

npm ERR! code ECONNRESET

npm ERR! syscall read

npm ERR! errno ECONNRESET

npm ERR! network Invalid response body while trying to fetch https://registry.npmjs.org/electron-to-chromium: read ECONNRESET

npm ERR! network This is a problem related to network connectivity.

npm ERR! network In most cases you are behind a proxy or have bad network settings.

npm ERR! network

npm ERR! network If you are behind a proxy, please make sure that the

npm ERR! network 'proxy' config is set properly.  See: 'npm help config'

npm ERR! A complete log of this run can be found in:

npm ERR!     C:\Users\TOSHIBA\AppData\Local\npm-cache\_logs\2022-04-24T13_02_51_419Z-debug-0.log

### **SOLUTION**

https://stackoverflow.com/questions/18419144/npm-not-working-read-econnreset

cmd --> `npm config get proxy`  (proxy ayarlarını görüntülemek için kullanılmasa da olur.)

`null`

cmd --> `npm config rm proxy`

cmd --> `npm config rm https-proxy`


artık `npm start` diyerek projemizi çalıştırabiliriz.

---

## State Tanımlamak

react 'in altında useState adında bir hook bulunur. Bu hook 'u import ediyoruz. (bkz. app.js)

    import { useState } from "react";
---
    const [name, setName] = useState("Ali");

- name : state 'imizin adı.

- setName : state 'e atama yapacak olan fonksiyonun ismi

State 'ler tüm veri tipleri ile tanımlanabilirler.

State değişikliginde component baştan render edilir.

# Array State

state array olarak da tanımlanabilir.

    const [friends, setFriends] = useState(["Deniz", "İbrahim", "Hasan", "Tuncay"]);

State 'lerde atama işlemi yaparken ilk bakılması gereken, tanımlanan state 'in başlangıç veri tipi neydi?

Array 'lere yeni eleman eklenirken eski verilerin korunlasına dikkat edilmelidir.

Mevcut verilerilerin korunması için

    [...vales, newValue]

şeklinde bir tanımlama yapılmalıdır.

- values içinde değerleri barındıran orijinal array 'imizdir.

- newValue ise value array 'ine eklenmesini istediğimiz yeni değeri ifade eder.

**Yeni Değeri Başa Eklemek İçin**

    [newValue, ...vales]

# Object States

State 'i bir obje olarak tanımlayıp güncelleme. 

    const [address, setAddress] = useState({title: "Manisa", zip: 42133});

---
    () => setAddress( {...address, title: "Ankara", zip: 42428} )

# Sayaç Uygulaması (counter app)

bkz. Patika.dev-React --> 06-counter-app

# Re-Render Mantığını Anlamak (React vs jQuery)

--> src --> jquery-example.html

## jQuery 

jQuery 'i html sayfamızda kullanabilmek için;

--> cdnjs --> jQuery --> html (paste)

https://cdnjs.com/libraries/jquery

