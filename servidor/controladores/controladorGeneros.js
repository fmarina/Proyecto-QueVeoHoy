const conexion = require('../lib/conexionbd');

function buscarGeneros(require, response){
    let sql = "SELECT * FROM genero";
    conexion.query(sql, (err, resultado, fields)=>{
        if(err){
            console.log("Hubo un error en la consulta", error.message);
            return require.status(404).send("Hubo un error en la consulta");
        }
        var respuesta = { 'generos' : resultado}
        response.send(respuesta);
    });
}

module.exports = { buscarGeneros : buscarGeneros}
