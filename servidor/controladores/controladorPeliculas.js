const conexion = require('../lib/conexionbd');

function buscarPeliculas(require, response){
    let titulo = require.query.titulo;
    let genero = require.query.genero;
    let anio = require.query.anio;

    let columnaOrden = require.query.columna_orden;    
    let tipoOrden = require.query.tipo_orden;
    let pagina = require.query.pagina;
    let cantidadResultado = require.query.cantidad;

    let sql = "SELECT * FROM pelicula";

}

module.exports = { buscarPeliculas : buscarPeliculas}