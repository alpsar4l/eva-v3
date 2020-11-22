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
        success: function(response) {}
    })
}

/**
* Şimdilik collectData() kullanamayacağımız için (data yok) sahte data oluşturma fonksiyonu yapıyorum
*/
function fakeData() {
    var today = new Date();
    var time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds() + ', ' + today.getDate() + '.' + (today.getMonth() + 1) + '.' + today.getFullYear() ;

    parseScreen({
        voltage: Math.floor(Math.random() * 51),
        temp1: Math.floor(Math.random() * 101),
        temp2: Math.floor(Math.random() * 101),
        temp3: Math.floor(Math.random() * 101),
        speed: Math.floor(Math.random() * 181),
        battery: Math.floor(Math.random() * 101),
        
        speed_lu: time,
        battery_lu: time,
        voltage_lu: time,
        temp_lu: time,
    });
}

function parseScreen(data) {
    $('#temp-1').css('height', data.temp1 + '%');
    $('#temp-2').css('height', data.temp2 + '%');
    $('#temp-3').css('height', data.temp3 + '%');
    
    $('#temp-1-value').html(data.temp1 + '°C');
    $('#temp-2-value').html(data.temp2 + '°C');
    $('#temp-3-value').html(data.temp3 + '°C');

    $('#voltage-value').html(data.voltage);

    $('.sc-value').html(data.speed);
    $('.sc-percentage').css('transform', 'rotate(' + data.speed + 'deg)');

    $('#battery-value').html(data.battery + '%');
    $('.battery-fill').css('width', data.battery + '%');

    $('#speed-lu').html(data.speed_lu);
    $('#battery-lu').html(data.battery_lu);
    $('#voltage-lu').html(data.voltage_lu);
    $('#temp-lu').html(data.temp_lu);
}

/**
* $(document).ready(function() { ... });
* Sayfanın hazır hale gelmesini bekliyor
* Yani, sayfanın kullanıcı tarafında yüklenmesinin bittiğinde çalıştırılacak kodlar bunun içine yazılması gerekmekte
*/
$(document).ready(function() {
    /**
    * Geliştirici konsoluna 'Hazırım!' yazıyor.
    * F12, Ctrl + Shift + I, Command + Shift + I yaparak buraya erişebilirsiniz
    */ 
    
    console.log('Hazırım!');

    /**
    * Sayfa hazır olduğunda her 1 saniyede bir verileri tazelemek için setInterval() oluşturdum
    * Böylece her 1 saniyede bir veritabanından güncel verileri alıp ekrana yansıtacak
    */
    
    setInterval(() => {
        /**
        * collectData() yerine fakeData()'yı çalıştırıyorum malum veri yok
        * Ama bu esnada collectData()'yı yorum satırına aldım böylece kısa bir işlele kodu güncelleştirebileceğiz
        */

        // collectData();
        fakeData()
    }, 1000);

});