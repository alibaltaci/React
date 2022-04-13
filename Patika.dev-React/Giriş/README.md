# React Nedir? Ne Zaman İhtiyaç Duyarız?

React kullanıcı arayüzleri oluşturmak için kullanılabilecek bir JavaScript kütüphanesidir.

Herhangi bir güncelleme işleminde bütün DOM 'u (DOM manipülasyonu) güncellemek yerine sadece güncellenmesi gereken alanı günceller.

Her yapıtaşı her birim birer bileşen (Component) olarak tasarlayalım ve o bileşen içinde bir değişiklik meydana geldiğinde sadece ilgili bileşen render edilsin.

React'i çok fazla DOM Manipülasyanu olmayan projelerde kullanmak over engineering 'e sebep olabilir.

---

# Real DOM / Virtual DOM - (Gerçek DOM - Sanal DOM)

Projemizin görürünümünü oluşruran hiyerarşik HTML etiketlerinin bütününe **Real DOM** denir.

**Virtual DOM**, Real DOM 'un bir kopyasıdır.

* Gerçek DOM’a karşılık gelen sanal bir DOM nesnesidir, yani render edilen DOM’un bir kopyasıdır.

Bu kopya React tarafında bir JS objesi olarak tutulur.

### Virtual DOM Ne Yapar?

* Ekranımızda bir güncelleme varsa, React Real DOM ve Virtual DOM 'u karşılaştırır.

* Eğer bunların arasında bir fark varsa sadece farklı olan kısmı (node) getirip Real DOM 'da ilgili yere yazar.

* React her state değişikliğinde render edilen Real DOM’u bütünüyle tekrar oluşturmak yerine, state değişikliğini Virtual DOM’a yansıtmaktadır. Bu sayede Real DOM ile virtual DOM arasındaki farklılıkları tespit ederek, Real DOM’da yapılacak değişikleri hesaplar ve tek seferde sadece Real DOM’da değişen elemanları yeniden render eder. 

---

# NODE JS

* Node js Kurulum işlemleri

* cmd --> npm init (modül oluşturmak için)

* index.js

* cmd --> node index.js (index dosyasını çalıştırmak için)

---

# ES6 Modül Sistemi

* Modül import etmek için require yerine import kullanılabilir.

        Bunun için; package.json --> "type":"module" tanımını yapmamız gerekir.

* my-module.js 

---

# Callback Function / Async - Await

* callback.js

* node 'da fetch olmadığı için node-fetch kütüphanesini indirmemiz gerek.

* cmd --> npm i node-fetch 

* Callback foksiyolar işlemleri sıraya koymak için kullanılır.

* Async - Await yapısı callback 'de ortaya çıkabilecek karışıklıkları önlemek ve daha okunur kodlar yazmak için kullanılır.

* Anonim fonksiyon: Fonksiyon tanımlamadan işlemleri yapabilmek için kullanılan bir yontem. --> ()();

---

# Promises

## Axios (Fetch yerine)

* axios kütüphanesi node-fetch kütüphanesi yerine kullanılabilir.

* React 'te bunu kullanacağız.

* Fetch 'e göre daha kolaydır.

* axios 'da json işlemi yapmaya gerek yoktur.

* axios bize bir obje döner ve bu obje altında asıl ulaşmak istediğimiz kısım data adı altında yer almakadır.

                  data: [
                                {
                                id: 1,
                                name: 'Leanne Graham',
                                username: 'Bret',
                                email: 'Sincere@april.biz',
                                address: [Object],
                                phone: '1-770-736-8031 x56442',
                                website: 'hildegard.org',
                                company: [Object]
                                }
                        ]

* Bu datayı çekebilmek için { data } şeklinde bir kullanım yapılmalıdır. --> bkz. callback.js

### **Axios kurulum**

cmd --> npm install axios

js --> import axios from "axios"; 

--> axios(url); --> bu bize data isminde bir data döner.

## **Promise vs Callback**

Callback, en basit haliyle herhangi bir fonksiyona parametre olarak verdiğimiz ve sonra geri çağıracağımız fonksiyonlara denir.

### **Callback 'de yaşanabilcek sorunlar**

* Callback’in beklenenden erken çağırılması

* Callback’in hiç çağırılmaması

* Callback’in beklenilenden az veya çok çağırılması

* Gerekli parametreleri doğru bir şekilde alamaması

* Hataların yutulması

### **Promise faydaları**

Promise, callback’lerin sıkıntılı yönlerini düzeltmek amacıyla önerilmiş bir yapıdır. 

* Promise istenilen görevi yerine getirdiğinde değeri değişmez (immutable)

* Sadece bir kere başarıya (resolved) ulaşır, veya başarısız (rejected) olur.

* Öngörülemeyen hatalar otomatik olarak Promise’i başarısız (rejected) sonuca götürür. Bu da hataları kontrol etme noktasında faydalıdır.

* Yapısı gereği, gelecekteki bir değerin göstergesi olduğundan daha güvenilirdir.

### **Promise.all**

 Bu metodun kullanılma amacını, paralel olarak gerçekleştirilen asenkron işlemlerin hepsinin bitip, bitmediği anlamak olarak tanımlayabiliriz. Birbirini beklemeyen asenkron işlemleri (promise’leri) zincirlersek toplam gerçekleşme süresini uzatmış oluruz. Hem bekleyen tüm işlemlerin bittiğinden emin olmak hem de bunu promise kullanarak yapabilmek Promise.all() ile mümkün. Dizideki tüm promise’ler başarılı(resolved) olduğunda tuttukları değerler de dizi halinde kullanıcıya döner. Eğer dizideki herhangi bir promise başarısız(rejected) olursa, Promise.all() sonucu oluşan promise de başarısız(rejected) olur.

https://medium.com/codefiction/javascriptte-promise-kullan%C4%B1m%C4%B1-ccca1123989a







