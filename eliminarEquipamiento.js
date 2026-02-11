const pool  = require ('./database/db');

const eliminarEquipamiento = async (id) => {
    const consulta = "DELETE FROM equipamiento WHERE id = $1"
    const values = [id]
    const result = await pool.query(consulta, values)
    console.log("equipamiento eliminado con exito")
}

module.exports = eliminarEquipamiento ; 