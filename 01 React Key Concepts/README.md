# React Key Concepts

## Declerative vs Imperative


Programlama paradigmaları temel bir kodlama stilidir. Çok kullanılan **4 tane programlama paradigması var**; 
* object-oriented, 
* imperative, 
* declarative, 
* fonksiyonel (declarative programlamanın bir alt kümesi olarak görülebilir).

---

* **Imperative** Türkçede emir, buyruk, zorunluluk anlamına geliyor. 
* **Declarative** ise bildiren, açıklayan anlamındadır. 
* Yabancılar ise *imperative* işlemi nasıl yapacağını anlattığın, *declarative* ise ne yapacağını anlattığın programlama şekli olarak tanımlıyorlar.

**Javascript Örneği**

*Declarative*
```
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((n) => {
  return n * 2;
});

console.log(doubled); // => [2,4,6,8,10]
```

*Imperative*
```
const numbers = [1, 2, 3, 4, 5];
const doubled = [];
 
for (let i = 0; i < numbers.length; i += 1) {
  const newNumber = numbers[i] * 2;
  doubled.push(newNumber);
}

console.log(doubled); // => [2,4,6,8,10]
```

* ES6+ ile gelen JS özellikleri Declerative ve Functional özelliktedir.
---
* *https://medium.com/frontend-development-with-js/imperative-declarative-programlama-242e3dce26e#:~:text=Imperative%20T%C3%BCrk%C3%A7ede%20emir%2C%20buyruk%2C%20zorunluluk,anlatt%C4%B1%C4%9F%C4%B1n%20programlama%20%C5%9Fekli%20olarak%20tan%C4%B1ml%C4%B1yorlar.*

* *https://mehmetkose.com.tr/tr/blog/declarative-imperative-farki/*
---

## Components Architecture (bileşen mimarisi)

Değiştirilebilir bileşenlere dayalı bir mimaridir . Bileşen Mimarileri bağımsız, değiştirilebilir, modüler bileşenlere dayandığından, karmaşıklığın yönetilmesine ve yeniden kullanımın teşvik edilmesine yardımcı olur.

Bileşen tabanlı mimarinin değer önerisi, uygulama geliştirme süresini artırması ve kod parçalanmasını azaltmasıdır.

Daha büyük bir kullanıcı arayüzünün (diğer bir deyişle bileşenler) tek tek parçalarını kendi kendini idame ettiren, bağımsız mikro sistemlere kapsüllemek için bir yöntem.


**React Developer Tools Eklentisi** 
* *https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi*

Bu eklenti uygulamada oluşturdupumuz bileşenleri (components) görmemizi sağlar.

* *https://swi.cs.vsb.cz/RUPSmall/core.base_rup/guidances/supportingmaterials/use_component_architectures_CBC2F6B5.html#:~:text=A%20Component%20Architecture%20is%20an,complexity%20and%20encourage%20re%2Duse.*
---

## One Way Data Flow (Tek Yönlü Veri Akışı)

**Virtual DOM**

Gerçek DOM’a karşılık gelen sanal bir DOM nesnesidir, yani render edilen DOM’un bir kopyasıdır. React her state değişikliğinde render edilen gerçek DOM’u bütünüyle tekrar oluşturmak yerine, state değişikliğini Virtual DOM’a yansıtmaktadır. Bu sayede gerçek DOM ile ve yeni sanal(virtual) DOM arasındaki farklılıkları tespit ederek, gerçek DOM’da yapılacak değişikleri hesaplar ve tek seferde sadece gerçek DOM’da değişen elemanları yeniden render eder. 

* *https://medium.com/@muratbalci1/virtual-dom-nedir-8e3c95dcde5c*

* *https://medium.com/kodcular/vi%CC%87rtual-dom-nedi%CC%87r-react-i%CC%87le-kullanimi-9cfdee76adad*

## UI Library 