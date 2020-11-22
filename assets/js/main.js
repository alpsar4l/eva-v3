/**
 * collectData() diye bir fonksiyon oluşturduk
 * Bununla api/v3/'e GET metoduyla istek atıyoruz ve bize anlık veritabanında ki bilgiyi cevap olarak veriyor
 * 
 * type: 'GET' veya 'POST'
 * get veri çekmek için, post veri yollamak için kullanılır
 * url: veriyi çekeceğimiz veyahut göndereceğimiz yer
 */
function collectData() {
    $.ajax({
        type: 'GET',
        url: 'api/v3/',
        success: function(response) {
            console.log(response)
        }
    })
}

/**
 * $(document).ready(function() { ... });
 * Sayfanın hazır hale gelmesini bekliyor
 * Yani, sayfanın kullanıcı tarafında yüklenmesinin bittiğinde çalıştırılacak kodlar bunun içine yazılması gerekmekte
 */
$(document).ready(function() {
    // Geliştirici konsoluna 'Hazırım!' yazıyor.
    // F12, Ctrl + Shift + I, Command + Shift + I yaparak buraya erişebilirsiniz
    console.log('Hazırım!');

    collectData();

});