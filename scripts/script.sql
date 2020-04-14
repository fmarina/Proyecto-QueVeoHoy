CREATE DATABASE queveohoy;
USE queveohoy;

CREATE TABLE `pelicula` (
    `id` INT NOT NULL auto_increment, 
    `titulo` VARCHAR(100) NOT NULL, 
    `anio` INT NOT NULL, 
    `duracion` INT NOT NULL, 
    `director` VARCHAR(400) NOT NULL, 
    `fecha_lanzamiento` DATE, 
    `puntuacion` INT, 
    `poster` VARCHAR(300), 
    `trama` VARCHAR(700),
    PRIMARY KEY(`id`)
);

CREATE TABLE `genero`(
    `id` INT NOT NULL auto_increment,
    `nombre` VARCHAR(50) NOT NULL,
    PRIMARY KEY (`id`)
);

ALTER TABLE `pelicula` ADD COLUMN `genero_id` INT


