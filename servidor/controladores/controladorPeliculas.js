const conexion = require('../lib/conexionbd');

function buscarPeliculas(require, response){
    let sql = "SELECT * FROM pelicula";
    conexion.query(sql, (err, resultado, fields)=>{
        if(err){
            console.log("Hubo un error en la consulta", error.message);
            return require.status(404).send("Hubo un error en la consulta");
        }
        var respuesta = { 'peliculas' : resultado}
        response.send(respuesta);
    });
}

module.exports = { buscarPeliculas : buscarPeliculas}

