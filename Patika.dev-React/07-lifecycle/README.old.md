# useEffect

Componetler DOM 'a Mount olduğu anda (componetlerin DOM üzerinde oluşturulduğu an), componet üzerindeki bir state, aldığı bir prop değiştiği anda veya unmount olduğu anda (DOM 'dan kaldırıldığı an) bu değişiliklerin yakalanıp bir takım işlerin yaptırılabilmesi.

useEffect Hook 'unu kullnarak yaşam döngümüzdeki (life cycle) eventleri yakalayabiliriz.    

useState, useEffect gibi Hook 'lar if yapısının içinde kullanılmamalıdır.

Component 'in tepesinde bulunmalıdır. Herhangi bir kontrole tabi olmamalı.

UseEffect birden fazla kullanılabilir.

Arrow functiondan sonra ikinci parametre olarak **dependency array ( [] )** girilir.

    useEffect( () => {
        console.log("Component Mount Edildi")
    }, [] )

[] içi boş bırakılırsa, component mount edildiği anı yakalansın demektir.

Seçili state 'i dinlemek için

      useEffect( () => {
        console.log( "Number State Güncellendi!");
    }, [number] );

bu sayede sadece number state 'i dinlnecek. Diğer state 'lerin güncellenmesi takip edilmeyecek.

# Component Unmount

* create components folder

* Create Counter.js (in component folder)

* Not: isVisible = true - görünür

  isVisible = false - görünmez ( !isVisible )

* Sayaç işlemini buton aracılığı ile kaldırıldığında (unmount) console bölümünde hata alırız (setInterval 'den dolayı).

  Hatalardan kurtulmak için işlem kaldırıldığında setInterval durdurulmalıdır.

  Component 'in unmount edildiğini analamak için;

        return () => console.log("Component unmount edildi!");

  ifadesi Couter fonksiyonumuzdaki useEffect içine yazılabilir. ( bkz. Counter.js )

  Şimdi setInterval işlemini interval adında bir değişkene atayalım ve return ( unmount ) kısmında da clearInterval 'i kullanalım.

* interval değişken ataması

```const interval = setInterval( () => { 
    console.log("Component mount edildi!");

    setNumber( (n) => n + 1);

    }, 1000);
```

- component unmount

```
    return () => clearInterval(interval);
```


  