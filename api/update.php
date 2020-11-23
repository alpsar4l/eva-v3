<?php
    $config = parse_ini_file("../../config.ini", true);
    require_once 'database/connect.php';

    /**
     *  Yapılması gerekenler
     *      
     *      a. Gelen verininin methodunun POST olup olmadığını kontrol edilmesi
     *          a. eğer POST ise...
     *              a. Gönderilmiş güvenlik anahtarı config dosyasındaki anahtar ile uyuşuyor mu diye kontrol edilmeli
     *                  a. Uşuyor ise...
     *                      1. Gelen JSON yapısını PHP için uygun bir hâle getirip parçalanabilir bir duruma getirilmesi lazım
     *                         ``` Örnek JSON
     *                         {
     *                              "access_code": "eva123",
     *                              "speed": "50",
     *                              "voltage": "10",
     *                              "temp1": "20",
     *                              "temp2": "15",
     *                              "temp3": "10",
     *                              "battery": "10",
     *                              "geo1": "50.0000",
     *                              "geo2": "40.0000",
     *                              "ampere": "10",
     *                              "current": "10"
     *                         }
     *                         ```
     *                      2. Uyumlu hale gelen JSON dizesini SQL koduna dönüştürülmesi gerekiyor (mysql update)
     *                      ve... Büyük kısım bitti 🎉 geriye kalan kısıma bu etap bitince başlarız
     * 
     *                  b. Uyuşmuyor ise yollayan tarafa hata mesajı verilmesi lazım
     *                  
     *          b. Eğer POST değilse yollayan tarafa hata mesajı verilmesi lazım
     */