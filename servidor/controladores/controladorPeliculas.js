const conexion = require('../lib/conexionbd');

function buscarPeliculas(require, response){
    let anio = require.query.anio;
    let titulo = require.query.titulo;
    let genero = require.query.genero;
    let columna_orden = require.query.columna_orden;
    let tipo_orden = require.query.tipo_orden;
    let pagina = require.query.pagina;
    let cantidad = require.query.cantidad;
   
    var sql = "SELECT * FROM pelicula";
    var query = "";
    if(anio || titulo || genero){
        query = " where ";
        if(anio) query = query + " anio = " + anio + " and"; 
        if(titulo) query = query + " titulo like '%" + titulo + "%'" + " and";    
        if(genero) query = query + " genero_id = " + genero + " and" ;  

        var query1 = query.split(' ').slice(0, -1).join(' ');     
        query = query1;     
    }
    
    sql = sql + query;

    conexion.query(sql, (err, resultado, fields)=>{
        if(err){
            console.log("Hubo un error en la consulta", error.message);
            return require.status(404).send("Hubo un error en la consulta");
        }
        console.log(resultado);
        var respuesta = { 'peliculas' : resultado}
        response.send(respuesta);
    });
}

module.exports = { buscarPeliculas : buscarPeliculas}

