CREATE TABLE `eva`.`data` ( `id` INT NOT NULL AUTO_INCREMENT , `car` VARCHAR(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL , `speed` VARCHAR(30) NOT NULL , `voltage` VARCHAR(50) NOT NULL , `battery` VARCHAR(50) NOT NULL , `current` VARCHAR(50) NOT NULL , `ampere` VARCHAR(50) NOT NULL , `geo1` VARCHAR(50) NOT NULL , `geo2` VARCHAR(50) NOT NULL , `temp1` VARCHAR(50) NOT NULL , `temp2` VARCHAR(50) NOT NULL , `temp3` VARCHAR(50) NOT NULL , `speed_lu` VARCHAR(50) NOT NULL , `voltage_lu` VARCHAR(50) NOT NULL , `battery_lu` VARCHAR(50) NOT NULL , `current_lu` VARCHAR(50) NOT NULL , `ampere_lu` VARCHAR(50) NOT NULL , `location_lu` VARCHAR(50) NOT NULL , `temp_lu` VARCHAR(50) NOT NULL , PRIMARY KEY (`id`)) ENGINE = InnoDB;