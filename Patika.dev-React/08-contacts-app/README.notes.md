# Contacts list app

Bu bölüme kadar öğrendiklerimiz ile bir **contact list app** geliştireceğiz.

* cmd ```npx create-react-app .```


* contacts componentimizi çağırdığımızda kullanacağımız dosyalarımızı oluşturalım

  create in src folder --> ```components/Contacts/index.js```

* List ve Form componentleri oluştur.

* List ve Form componentleri Contects componentinin altında kullanılacağı için, bu klasörler dizin olarak Contact klasörü altında oluşturulabilir.

## Form

* Form içine inputları ekle.

* onChangeInput function (Inputları yakalamak için)

* onSubmit funtion (Inputları Göndermek için)

* Elde edilen kayıtları bir state 'e eklemek gerekir.

* Bu sayede List component 'inde kayıtları listeleyebiliriz.

* Kullanıcı kayıtlarını Form Component 'i içinde tutarsak, bu state 'i List Component 'ine nasıl taşırız?

* Bu bir sıkıntı çıkartacağı için kayıtları contacts component 'i içinde tutabiliriz. 

## Kayıtların Listelenmesi

* Girilen kayıtları List Component 'imizde listeleyeceğiz.

* Eklenen kayıtları Contacts 'de prop olarak gönderiyoruz.

* Sonra List Component 'i içinde gerekli listeleme işlemlerini yapıyoruz.

## Filtreleme İşlemleri

* Eklenen kayıtlar arasından filtreme işlemini yapabilmek için input kısmı ekleyeceğiz. (List Component)

* Input 'a bir veri girildiği anda bunu state 'imize yazmamız lazım. Bunun için useState Hook 'unu List Componentimize indiriyoruz.

  ```const [filterText, setFilterText] = useState("");``` 

* Kayıtlar arasında input alanına girilen değeri bulabilmek için "filter" metodunu kullanacağız.

```
  const filtered = contacts.filter( (item) => {
    return Object.keys(item).some( (key) => 
    item[key].toString().toLowerCase().includes(filterText.toLocaleLowerCase()));
  });

```

* **filter** metodu hedef array içindeki verileri teker teker alır. 

* Mevcut arrayimizde object tipi verilerimiz olduğu için **Object.keys** metodunu kullanabiliriz. 

* **keys** seçili objemizdeki değerleri içerir.

* **some** ile obje iindeki birden fazla key 'in aynı anda dikkate alınmasını ve filtreleme işlemi yaparken tüm değerlere bakılması gerektiğini ifade ediyoruz.

## Style

--> app.css (app.js)

--> create style.css (Contacts Folder) (index.js)




