# numberOfInvasion
* Javascript ve HTML kullanılarak hazırlanmış web tabanlı iki boyutlu (2D) bir oyun projesidir.
* Oyun projemin demosuna erişmek için tıklayınız : http://invasionnumber.eu5.org/

## Oyun Başlangıcı
* numberOfInvasion, `2048` ve `radious-raid` oyunlarından esinlenmektedir.
* Oyun, sayfanın ortasında bulunan sayı baloncuğunun kendisine doğru gelmekte olan yüksek sayılı baloncukları kendisine ulaşmadan yok etmeye çalışmasını anlatmaktadır.
## Kurulum
Proje ön kurulum gerektirmez. Proje dosyalarına erişmek ve bunları yerel bilgisayarınızda çalıştırmak için aşağıdaki adımı uygulayabilirsiniz:
* Deponun sağ üst kısmında `Kod`, yazan yeşil butona tıkladıktan sonra ZIP İndir sekmesine tıklayıp yerel bilgisayarınıza proje kaynak kodlarını indirmiş olursunuz.
* Dizinin kaynak kodunu açtıktan sonra, `index.html`, dosyasını Google Chrome veya Mozila Firefox gibi bir web tarayıcısında çalıştırmanız yeterlidir.

## Nasıl oluştu?
* <a href="https://www.w3schools.com/js/default.asp">Javascript</a>, <a href="https://www.w3schools.com/html/">HTML</a>, <a href="https://www.w3schools.com/css/default.asp">CSS</a> kullanılarak hazırlanmış 2D bir oyun projesidir.
* <a href="https://www.w3schools.com/html/html5_canvas.asp">HTML Canvas<a/> yardımıyla şekiller oluşturulmuştur.
* Dairelerin birbirlerine dokunma ve oyuncuya olan uzaklığın hesaplanmasında geometrik formüllerden (Pisagor Teoremi) yararlanılmıştır.
## Oyun Fotoğrafları
>* Oyuna başlamak için tıklayınız:
>![start](https://user-images.githubusercontent.com/54938901/117811623-72aa3680-b269-11eb-9a59-d43f1bfc3157.png)
>* Farenizin sol tuşuyla ateş edebilir ve fare haraketi doğrultusunda ateş yönünü değiştirebilirsiniz.
>![1](https://user-images.githubusercontent.com/54938901/117811596-6920ce80-b269-11eb-8415-010e527839f3.png)
>* Oyun bitiminde en yüksek üç skoru ve kendi skorunuzu görebilirsiniz.<br/>
>![2](https://user-images.githubusercontent.com/54938901/117811606-6cb45580-b269-11eb-86ab-8e7f57cd326b.png)
>* Oyun boyunca skorunuzu takip edebilirsiniz.<br/>
>![3](https://user-images.githubusercontent.com/54938901/117811616-6faf4600-b269-11eb-8eac-a5463266d845.png)

##  Proje Detayı
>Proje iki klasörden (resimler, sesler) ve 3 dosyadan(index.html,game.css, game.js) oluşmaktadır. Oyun arkaplanında kullanılan görseller pictures klasörüne dahildir. Sounds klasörü, oyundaki ses efektlerini içerir. Proje üzerinde çalışmak veya geliştirmek isteyenler için kaynak kodda yer alan bazı fonksiyonların ve sınıfların neden kullanıldığı ve içerikleri ile ilgili bilgiler aşağıda listelenmiştir: <br/>
> * `class Circle() `: Sayı baloncuklarının ve mermileri oluşturur.
>   * ` draw()`: Mermilerin oluşumunu sağlar verilen yarıçap ve renklere göre.
>   * ` drawi()`: Sayı baloncuklarının verilen yarıçap ve renklere göre oluşumunu sağlar. Sayı baloncuklarının içerisine yarıçap boyutuna göre sayıları ekler.
>   * ` update()`: Sayı baloncuklarının ve mermilerin haraketini sağlar.
>   * ` remove()`: Sayı baloncuklarının ve mermilerin sayfadan çıktıktan sonra `bullets` ve `enemies` dizilerinden çıkarılmasını sağlar.
> * `class Player()`: Oyuncumuzu oluşturur.
>   * `draw()` :Oyuncumuzun verilen yarıçap ve rengine göre sayfanın ortasında çizilmesini sağlar.
> * `function addEnemy()`: Sayı baloncuklarının random belirlenen boyutla sayfanın her yanından gelmesini sağlar.
> * `function collision()`: Yuvarlakların birbirine değmelerini kontrol eder.
> * `function animate()`: Oyun başlar.
> * `function stop()` : Oyunda yanıldığında oyunun durup tekrar başlaması için panel oluşturan fonksiyondur.
> * `function init()` : Başlangıç butonuyla birlikte oyunumuz bu fonksiyonla başlar.
