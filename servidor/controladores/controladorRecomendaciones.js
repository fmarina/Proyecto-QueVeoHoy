const conexion = require('../lib/conexionbd');

function buscarRecomendacion(require, response){
    const genero = require.query.genero;
    const anio_inicio = require.query.anio_inicio;
    const anio_fin = require.query.anio_fin;
    const puntuacion = require.query.puntuacion;  
    let sql = "SELECT * FROM pelicula join genero on genero_id = genero.id";
    let query = filtroRecomendacion(genero, anio_inicio, anio_fin, puntuacion);
    sql = sql + query;
    conexion.query(sql, (err, result)=>{
        if(err) {
            console.log("Hubo un error en la consulta sql recomendacion", err.message);
            return response.status(404).send("Hubo un error en la consulta sql recomendacion");
        }
        console.log(sql);
        const respuesta = { 'peliculas' : result}
        response.send(respuesta);
    });  
}

const filtroRecomendacion = (genero, inicio, fin, puntuacion)=>{    
    let query = "";
    if(genero || inicio || fin || puntuacion){
        query = " WHERE "
        if(genero) query = `${query} genero.nombre = '${genero}' AND` ;
        if(inicio || fin) query = `${query} anio BETWEEN ${inicio} AND ${fin} AND`; 
        if(puntuacion) query = `${query} puntuacion = ${puntuacion} AND"`;
        query = query.split(' ').slice(0, -1).join(' ');
    }
    return query;
}

module.exports = {buscarRecomendacion : buscarRecomendacion};
