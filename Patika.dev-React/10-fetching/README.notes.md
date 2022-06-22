# Fetching

- jsonplaceholder fake api 'ını kullanacağız.

## Native Fetch

- Users 'ımız mounth edildiği anda veriyi çekelim.

- Bu yüzden useEffect Hook 'unu kullanacağız.

- Component ilk yüklendiği zaman sadece 1 kere fetch işlemi yapmak için useEffect kullanıyoruz. useEffect dışında yaparsa component her render olduğunda yapar. Bunun önüne geçmek için useEffect Kullanıyoruz.

- verileri ekrana yazdırmak için useState 'i kullancağız.

- Veriler yükleniyor ibaresi ekleyelim.

``   const [isLoading, setIsLoading] = useState(true); ``  başlangıçta true

- fetch işlemi bittikten sonra isLoading ifadesinin false olması lazım.

- fetch işleminin sonuna

`` .finally( () => setIsLoading(false)); ``

- Bu şekilde then - catch içine de düşse yakalayıp işlemi false yapıyoruz.

## Axios

- fetch ile ek kütüphane kurmadan yaptığımız işlemleri ek kütüphaneler kurarak da yapabiliriz.

- Axios kütüphanesi bunlardan biridir. Fetch ile yaptıüımız her şeyi axios ile de yapabiliriz.

- Axios verileri obje olarak döner, Fetch gibi stringify şeklinde dönmez. Yani verileri json 'a el ile döndürmeye gerek yok.

- Axios ile bir isteği iptal edebilr ya da timeout verebiliriz. Fetch 'de bu yok.

- Axios daha geniş browser desteği sağlar.



