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

