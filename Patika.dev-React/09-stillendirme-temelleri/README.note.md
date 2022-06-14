* Inline still tanımlarını obje olarak vermek gerekir.

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
