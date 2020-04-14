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