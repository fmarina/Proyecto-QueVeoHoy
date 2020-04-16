const conexion = require('../lib/conexionbd');

function buscarPeliculas(require, response){
    let anio = require.query.anio;
    let titulo = require.query.titulo;
    let genero = require.query.genero;
    let columna_orden = require.query.columna_orden;
    let tipo_orden = require.query.tipo_orden;
    let pagina = require.query.pagina;
    let cantidad = require.query.cantidad;
   
    let sql = "SELECT * FROM pelicula";
    let query = filtrarPeliculas(anio, titulo, genero);    
    let orderBy = " ORDER BY " + columna_orden + " " + tipo_orden;
    let limit = " LIMIT " + ((pagina - 1) * cantidad) + "," + cantidad; // limit (fila de la tabla, cantidad)
    
    sql = sql + query + orderBy + limit;    

    conexion.query(sql, (err, resultado, fields)=>{
        if(err){
            console.log("Hubo un error en la consulta sql ", err.message);
            return response.status(404).send("Hubo un error en la consulta");
        }
        var sql_count = "select count(*) as total from pelicula" + query;        
        conexion.query(sql_count,(err, resultado2,fields)=>{
            if(err){
                console.log("Hubo un error en la consulta sql_count", err.message);
                return response.status(404).send("Hubo un error en la consulta");
            }         
            const respuesta = { 
                'peliculas' : resultado,
                'total'     : resultado2[0].total
            }
            response.send(respuesta);
        });        
    });
}

const filtrarPeliculas = (anio, titulo, genero) =>{
    let query = "";
    if(anio || titulo || genero){
        query = " WHERE ";
        if(anio)   query = `${query} anio = ${anio} AND`;                        
        if(titulo) query = `${query} titulo like '%${titulo}%' AND`;  
        if(genero) query = `${query} genero_id = ${genero} AND`;        
        query = query.split(' ').slice(0, -1).join(' ');                  
    }
    return query;
}

module.exports = { buscarPeliculas : buscarPeliculas}

