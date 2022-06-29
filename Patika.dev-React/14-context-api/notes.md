# Context API

# Context Nedir?

- State yönetimi yapabilmek için React 'in bize verdiği yapı.

- State yönetimi yapabilmek için birden fazla araç bulunmaktadır.

- Öğrenimi ve kullanımı en temiz olanı Contex API 'dir.

- Yapılacak işe göre tercih edilecek state yönetim aracı da değişebilir.

# Context Oluşturmak

- Light ve dark mode değerlerini tutan bir context oluşturacağız.

- Context altında render edilmiş tüm componentlerden bu dataya erişip modu değiştirebilmek istiyoruz.

- create context folder.

--> ThemeContext.js 

```
import {createContext} from 'react'

const ThemeContext = ThemeContext();

export default ThemeContext;

```
--> App.js

```
import ThemeContext from './context/ThemeContext';

import Button from './components/Button';

function App() {
  return (

    <ThemeContext.Provider value="dark" >

      <Button />

    </ThemeContext.Provider>
    
  );
}

```

- Provider (sağlayıcı) altında child olarak bulunan (render edilen) bütün componentlere provide edilen bütün dataları gönderir.

- value ile hangi datadın provide edileceği belirtilir.

- Amaç button componentinden `` value="dark `` datasına ulaşmak.

- Öncelikli yapılması gereken kullanılacak contexti kullanılacağı componentin içine eklemek. (Button.js içine ThemeContext 'i eklemek)

- Sonra React altınaki useContext ifadesini import ediyoruz. useContext 'i kullanarak ThemeContext 'in sağladığı dataya erişebiliriz.

--> Button.js

```
import {useContext} from 'react';

import ThemeContext from '../context/ThemeContext';

export default function Button() {

    const data = useContext(ThemeContext);

    console.log(data);

  return (
    <div>
      Button ({data})
    </div>
  )
}
```





