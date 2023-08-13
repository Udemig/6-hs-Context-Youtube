# Kütüphaneler

- react-icons
- react-router-dom
- axios
- millify
- react-player
- moment
- tailwind (kurulum kendi sayfasında)

# Yapılacaklar

- `SideNav.jsx` içerisinde kategorileri listele
- - Seçilen kategorinin bilgisini Context yapısında tut

- Seçilen kategoroyi tuttuğumuz state her değiştiğinde ilgili kategoriye ait video verisini al
- - `Feed.jsx` içserisinde her bir video için videoyu ekrana bas

- Videolardan birine tıklandığında kullanıcıyı o videonun id'sini parametre olrak içeren bir linke yöndlendir
- - `VideoDetail.jsx` sayfasında urlden parametreyi al
- - parametreyle braber apiye video detayları için istek at
- - api'den gelen veriyi ekrana bas
- - videoyla alakalı içerikler için istek at
- - alaklaı içerikleri ekran bas

- Header'da kullanıcı bir kelimeyi aratıp butona bastığında `SearchResults.jsx` sayfasına yönlendir.
- - aratılan kelimeye url'e parametre olarak ekle

- İki yöntem var
- - /results/react.js

- - /results?search_query=react+project
