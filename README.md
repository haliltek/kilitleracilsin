# Şifreyi Kır Oyunu (v6.2)

**Şifreyi Kır** oyununa hoş geldiniz! Bu proje, oyuncuların rastgele oluşturulmuş bir şifreyi belirli sayıda denemede tahmin etmeye çalıştığı eğlenceli ve etkileşimli bir tarayıcı tabanlı oyundur.

## Canlı Demo
Oyunu oynamak için: [https://sifreyibul.vercel.app](https://sifreyibul.vercel.app)

## Yenilikler (v6.2)
- **Tekrar Oyna:** Oyunu kazandıktan sonra aynı kullanıcı adıyla tekrar oynayabilirsiniz.
- **Skor Güncelleme:** Aynı kullanıcı tekrar oynadığında skoru güncellenir.
- **Arayüz Temizliği:** Roket animasyonu ve cevap gösterme butonu kaldırıldı.
- **Kullanıcı Adı Girişi:** Oyuna başlamadan önce isminizi girebilirsiniz.
- **Zamanlayıcı:** Şifreyi ne kadar sürede çözdüğünüzü takip edin.
- **Skor Tablosu:** En iyi 10 skoru görüntüleyin.

## İçindekiler
- [Giriş](#giriş)
- [Özellikler](#özellikler)
- [Nasıl Oynanır](#nasıl-oynanır)
- [Kurulum](#kurulum)
- [Kullanım](#kullanım)
- [Proje Yapısı](#proje-yapısı)

## Giriş

**Şifreyi Kır**, mantıksal düşünme ve örüntü tanıma becerilerinizi test etmek için tasarlanmıştır. Oyun gizli bir şifre oluşturur ve oyuncular her denemeden sonra sağlanan ipuçlarını kullanarak bu şifreyi tahmin etmelidir.

## Özellikler

- Her oyun oturumu için rastgele oluşturulan şifreler.
- Sezgisel kullanıcı arayüzü.
- Oyuncuyu yönlendirmek için her tahminde geri bildirim.
- Masaüstü ve mobil kullanıcılar için duyarlı tasarım.
- Skor takibi ve liderlik tablosu.

## Nasıl Oynanır

1. Oyunu tarayıcınızda açın.
2. Kullanıcı adınızı girin ve "BAŞLA" butonuna basın.
3. Giriş alanına tahmininizi girin.
4. İpuçlarını kullanarak doğru şifreyi bulmaya çalışın:
   - Doğru rakam doğru yerde.
   - Doğru rakam yanlış yerde.
5. Şifreyi en kısa sürede kırarak skor tablosuna girin!

## Kurulum

Projeyi yerel olarak kurmak için şu adımları izleyin:

1. Depoyu klonlayın veya indirin.
2. Proje dizinine gidin.
3. `index.html` dosyasını tarayıcınızda açın.

## Kullanım

Oyunu özelleştirmek için:

- Kod oluşturma mantığını `generateNew.js` dosyasında değiştirebilirsiniz.
- Stili `index-style.css` dosyasında güncelleyebilirsiniz.
- Etkileşimleri `interactions.js` dosyasında geliştirebilirsiniz.

## Proje Yapısı

| Dosya/Klasör      | Açıklama                                           |
|-------------------|----------------------------------------------------|
| `index.html`      | Oyun arayüzü için ana HTML dosyası.                |
| `index-style.css` | Oyunu stillendirmek için CSS dosyası.              |
| `generateNew.js`  | Rastgele kodlar oluşturmak için JavaScript dosyası.|
| `interactions.js` | Kullanıcı etkileşimlerini işlemek için JS dosyası. |
| `res/`            | Ek kaynaklar için klasör (ör. resimler, yazı tipleri).|
