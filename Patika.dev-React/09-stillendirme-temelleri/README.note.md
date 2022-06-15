# Stillendirme

## Inline Style

* Inline style tanımlarını obje olarak vermek gerekir.

    ```<div style={ {color: "red"} } ``` {} --> objeyi ifade eder.

* Inline olarak çok fazla still tanımlaması yapmayız !!!

* CSS 'de bildiğimiz tüm tanımlar React 'te de kullanılabilir. 

* **UYARI!!**

    CSS ifadelerini JS içinde kullanırken "-" ifadesini kullanamayız. 

    JS içinde obje tanımlarken ve değişken oluştururken "-" ifadesi kullanılamaz.

    Bu yüzden tanımlama yaparken - ifadesini kullanmamak için camelCase kullanırız.

    ``` style = { {backgroundColor: "red"} } ```

    İlla ki - kullanıcam dersek :) 

    ``` style ={ {"background-color": "red"} } ```

    Şklinde de bir kullanım yapılabilir.
---

## Bootstrap 

--> cdnjs --> bootstrap --> twitter --> 

```<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.2.0-beta1/css/bootstrap.min.css" integrity="sha512-o/MhoRPVLExxZjCFVBsm17Pkztkzmh7Dp8k7/3JrtNCHh0AQ489kwpfA3dPSHzKDe8YCuEhxXq3Y71eb/o6amg==" crossorigin="anonymous" referrerpolicy="no-referrer" />```

--> Yukarıdaki linki index.html 'e yapıştırıyoruz.

Bu sayede bootstrap 'ı çalışmamızda kullanabiliriz.

---

## Module CSS

* Bu bölüm için gerekli dosyaları hazırlayalım.

    1- src altında components adınada bir dosya oluşturuyoruz.

    2- components klasörü altında A ve B adında klasörler oluşturuyoruz. (Component lerimiz için)

    3- Klasörlerin içine index.js ve style.css dosyalarını ekliyoruz.

    4- index.js dosyaları içine A ve B fonksiyonlarını yazıyoruz.

    5- CSS dosyalrı içinde aynı etikete (tittle) farklı değerler atıyoruz.

    6- App.js dosyasına A ve B fonksiyonlarını indirip render adiyoruz.

    7- Hatamızı alıyoruz. (Frklı değer atamaları yapılmasına rağmen, aynı isimde etikete sahip olan componentlerin tüm değerleri ortak görünüyor)

* Farklı componentler için, farklı stil dosyalarında (styles.css), benzer etiket isimleri kullanılarak işlemler yapılırsa, son eklenen özelliklik, öncekileri ezecek ve kendisi için tanımlanan değerler etiket ismini taşıyan tüm componentlerde kendi özelliğini göstermeye başlayacaktır. 

* Aynı etiketi kullanarak farklı stillendirmeler yapmak için componente özel stil dosyasının bir ID olması gerekmektedir.

* Bu özelliği kullanabilmek için stil css dosyaları isimlerilirken ``` styles.css ``` şeklinde değil, ``` styles.module.css ``` şeklinde bir isimlendirme yapılmalır.

* Bu isimlendirme her bir style dosyasına ayrı bir ID ataması yapacak ve aynı etiket ismi farklı özellikler atanarak farklı componentlerde kullanılabilecek.

* A componentinin index.js dosyasında console.log(styles) ile çıktıları yazdıralım.

         {title: 'styles_title__6SPKN'}
        title: "styles_title__6SPKN"
        [[Prototype]]: Object 

* Sayfayı incelediğimizde yukarıdaki gibi bir obje elde edeceğiz. Burada da görüldüğü gibi tittle etiketi bir ID ye sahiptir.

* Şimdi de aynı işlemi B componenti için yapalım.

    {title: 'styles_title__vRGC-'}
    title: "styles_title__vRGC-"
    [[Prototype]]: Object

* Görüldüğü burada aynı isimde bir etikete farklı bir ID ataması yapılmıştır.

* Bu sayede karışıklıkları önlüyoruz.