const conexion = require('../lib/conexionbd');

function buscarRecomendacion(require, response){
    const genero = require.query.genero;
    const anio_inicio = require.query.anio;
    const anio_fin = require.query.anio_lanzamiento;
    const puntuacion = require.query.puntuacion;    
}

const filtroRecomendacion = (genero, inicio, fin, puntuacion)=>{    
    let query = "";
    if(genero || inicio || fin || puntuacion){
        query = " WHERE "
        if(genero) query = query + " genero.nombre = '" + genero + "' AND";
        if(inicio) query = query + " anio = " + inicio + " AND";
        if(fin) query = query + " anio_lanzamiento = " + fin + " AND";
        if(puntuacion) query = query + " puntuacion = " + puntuacion + " AND";
        query = query.split(' ').slice(0, -1).join(' ');
    }
    return query;
}

