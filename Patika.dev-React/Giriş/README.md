# React Nedir Ne Zaman İhtiyaç Duyarız?

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











