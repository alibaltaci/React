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


## Bootstrap 

--> cdnjs --> bootstrap --> twitter --> 

```<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.2.0-beta1/css/bootstrap.min.css" integrity="sha512-o/MhoRPVLExxZjCFVBsm17Pkztkzmh7Dp8k7/3JrtNCHh0AQ489kwpfA3dPSHzKDe8YCuEhxXq3Y71eb/o6amg==" crossorigin="anonymous" referrerpolicy="no-referrer" />```

--> Yukarıdaki linki index.html 'e yapıştırıyoruz.

Bu sayede bootstrap 'ı çalışmamızda kullanabiliriz.