<?php
    require_once 'database/connect.php';

    /**
     *  Yapılması gerekenler (Başlayabilmek için ilk önce update.php'nin tamamlanması gerekmekte)
     *      
     *      a. Gelen verininin methodunun GET olup olmadığını kontrol edilmesi
     *          a. eğer GET ise...
     *              1. Veritabanından güncel veriyi alması gerekiyor
     *              2. Aldıktan sonra aldığı gibi client'a geri göndericek
     *              ve... Bu da bitti 🎉 3. takımın işi bitti demektir 😎
     *                  
     *          b. Eğer GET değilse geri dönüş yapmasına gerek yok
     */