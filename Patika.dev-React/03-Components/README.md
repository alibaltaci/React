# Bir React Projesini Ayağa Kaldırmak (create-react-app)

* Burada facebook 'un bize verdiği create-react-app reposunu kullanacağız.

* Bu repo hızlıca bir react projesi geliştirmeye yardımcı olur.

* *https://github.com/facebook/create-react-app*

## npx 

* Npx nedir; npm, geliştiriciler tarafından sıklıkla kullanılan paket yönetim aracıdır.

* NPX’de aynı NPM gibi NodeJS ile birlikte kurulur.

* npm i --global npx (bu şekilde kurulum yapılırsa daha sağlıklı olacaktır.)

### **Kurulum**

    cmd -->  npx create-react-app hello-react (projenizin ismi opsiyonel)

* Bu işlemden sonra hello-react adında bir dosya oluşturur.

* Karşımıza aşağıdaki gibi bir çıktı gelir.

        npm start
            Starts the development server.

        npm run build
            Bundles the app into static files for production.

        npm test
            Starts the test runner.

        npm run eject
            Removes this tool and copies build dependencies, configuration files
            and scripts into the app directory. If you do this, you can’t go back!

     
* We suggest that you begin by typing:

        cd hello-react
        npm start

* `cd hello-react` ile projemizin içine giriyoruz.

* `npm start` ile bizi browsera yönlendirir.

* Artık aşağıdaki porttan çalışmamızı görüntüleyebiliriz.

      Local:            http://localhost:3000        


# Component Nedir?

* React 'in en temel yapıtaşıdır.

# Component Oluşturmak - Kullanmak

* Oluşturacağımız bütün componentleri `hello-react --> src --> app.js --> app()` altında birleştireceğiz.

* Bu kökdizin bize kurulum sırasında otomatik olarak oluşturulur.

* app() bizim ana componentimiz olacak.

* Component oluştururken react 'in html etiketleri ile ayırt edebilmesi için ilk harfi büyük olarak yazılmalıdır.

* `src--> index.js --> react-dom/client` kütüphanesi normal react kütphanesinden ayrılarak oluşturlmuş bir kütüphanedir.
Web projeleri için kullanılır. Mobil uygulamalar için gereksiz olduğu için ana kütüphaneden ayrılmıştır.

### **Kendimiz bir component oluşturup kullanmaya çalışalım**

`src --> components --> header.js` klasör ve js dosyası oluştur.

* Tanımlanan fonksiyonu `src --> app.js` 'de indir ve çalıştır. bkz. app.js

# JSX ve Temel Kuralları

* HTML yazar gibi JS yazmamıza olanak sağlar.

* Componentler kapsayıcı bir etikete sahip olmalıdır.

* JSX yazarken özel tanımlı key word 'leri kullanmamamız gerekir. (if, for, class ...)

    --> for --> htmlFor

    --> class --> className





