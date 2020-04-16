//paquetes necesarios para el proyecto
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

const controladorPeliculas = require('./controladores/controladorPeliculas');
const controladorGeneros = require('./controladores/controladorGeneros');
const controladorInfoPelicula = require('./controladores/controladorInformacionPelicula');
const controladorRecomendaciones = require('./controladores/controladorRecomendaciones');

var app = express();

app.use(cors());

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());


app.get("/peliculas", controladorPeliculas.buscarPeliculas);
app.get("/generos", controladorGeneros.buscarGeneros);
app.get("/peliculas/:id", controladorInfoPelicula.buscarInformacionPelicula);

//seteamos el puerto en el cual va a escuchar los pedidos la aplicación
var puerto = '8080';

app.listen(puerto, function () {
  console.log( "Escuchando en el puerto " + puerto );
});

