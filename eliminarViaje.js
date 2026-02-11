const pool  = require ('./database/db');

const eliminarViaje = async (id) => {
    const consulta = "DELETE viajes where id = $1"
    const values = [id]
    const result = await pool.query(consulta, values)
    console.log("viaje eliminado con exito")
}

module.exports = eliminarViaje;