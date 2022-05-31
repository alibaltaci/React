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

* Input 'a bir veri girildiği anda bunu state 'imize yazmamız lazım. Bunun için useState Hook 'unu List Componentimize İndiriyoruz.

  ```const [filterText, setFilterText] = useState("");``` 



