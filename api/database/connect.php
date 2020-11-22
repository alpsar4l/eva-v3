<?php
    error_reporting(0);
    $config = parse_ini_file("../../config.ini", true);

    /* 
    $server    = $config['database']['host'];
    $username  = $config['database']['username'];
    $password  = $config['database']['password'];
    $db_name   = $config['database']['dbname'];
    
    $connect   = mysql_connect($server, $username, $password);
    
    mysql_select_db($db_name, $connect);
    mysql_query("SET NAMES utf8");
    mysql_query("SET CHARACTER SET utf8mb4");
    mysql_query("SET COLLATION_CONNECTION='utf8mb4_general_ci'");
    */
?>
