// DOM yüklendiğinde çalışacak olan olay dinleyicisi
document.addEventListener("DOMContentLoaded", function () {
    // .btn_data sınıfına sahip butona tıklama olayı ekleniyor
    document.querySelector(".btn_data").addEventListener("click", function () {
        // fetch fonksiyonu ile JSONPlaceholder API'den gönderi verileri çekiliyor
        fetch("https://jsonplaceholder.typicode.com/posts")
        // Gelen yanıt JSON formatına dönüştürülüyor
            .then((response) => response.json())
            .then((data) => {
                // .alldata sınıfına sahip tablo seçiliyor
                let tablo = document.querySelector(".alldata");
                // HTML içeriğini oluşturmak için bir değişken tanımlanıyor
                let html = "";
                // Gelen her veri elemanı için döngü oluşpturulur
                data.forEach((element) => {
                    // Her veri elemanı için tablo satırı HTML'ye ekleniyor
                    html += `
          <tr>
            <td>${element.id}</td>
            <td>${element.title}</td>
            <td>${element.body}</td>
          </tr>
          `;
                });
                // Oluşturulan HTML içeriği tabloya ekleniyor
                tablo.innerHTML = html;
            });
    });
});
// fetchdata fonksiyonu tanımlanıyor
function fetchdata() {
    // fetch fonksiyonu ile JSONPlaceholder API'den gönderi verileri çekiliyor
    fetch("https://jsonplaceholder.typicode.com/posts")
        // Gelen yanıt JSON formatına dönüştürülüyor
        .then((response) => response.json())
        .then((data) => {
            let tablo = document.querySelector(".alldata2");
            let html = "";
           // Her veri elemanı için tablo satırı HTML'ye ekleniyor
            data.forEach((element) => {
                html += `
        <tr>
          <td>${element.id}</td>
          <td>${element.title}</td>
          <td>${element.body}</td>
        </tr>
        `;
            });
            // Oluşturulan HTML içeriği tabloya ekleniyor
            tablo.innerHTML = html;
        });
}