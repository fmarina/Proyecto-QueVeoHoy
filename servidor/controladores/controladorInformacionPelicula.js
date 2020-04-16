const conexion = require('../lib/conexionbd');

function buscarInformacionPelicula(require, response){

    let id = require.params.id;    
    if(!id) console.log("Hubo un error con ese id");

    let sql = 
        "select peli.titulo, peli.anio, peli.duracion, peli.director, peli.fecha_lanzamiento, peli.puntuacion, peli.poster, peli.trama, genero.nombre as genero, actor.nombre as actor from pelicula peli join genero on genero_id = genero.id join actor_pelicula on pelicula_id = peli.id join actor on actor_id = actor.id where peli.id = "  + id;    
    let sql_actores = 
        "select actor.id, actor.nombre from actor join actor_pelicula on actor_id = actor.id where pelicula_id = " + id;
    
    conexion.query(sql, (err, resultado)=>{
        if(err){
            console.log("Error en la consulta", err.message);
            return response.status(404).send("Hubo un error en la consulta de sql");
        }
        conexion.query(sql_actores, (err, resultActores)=>{
            if(err){
                console.log("Error en la consulta", err.message);
                return response.status(404).send("Hubo un error en la consulta actores");
            }
            const respuesta = { 
                'pelicula' : resultado[0], 
                'actores'  : resultActores,
                'genero' : resultado[0] 
            }
            response.send(respuesta);
        });        
    });   
}

module.exports = {buscarInformacionPelicula : buscarInformacionPelicula};



